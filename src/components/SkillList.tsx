import { useEffect, useState } from "react";

export interface SkillItem {
  name: string;
  isText?: boolean;
}

export const SkillListItem: React.FC<SkillItem> = ({ name, isText }) => {
  const [isHovered, setIsHovered] = useState(false);
  const className =
    "inline font-bold text-xs px-2 rounded-full transition-all duration-[200ms] text-sm border border-gray-300 cursor-default opacity-70";

  const hoverClass = "bg-black text-white border-white";

  // Update hover state if URL hash matches this skill name
  useEffect(() => {
    const checkHash = () => {
      console.log("Checking hash for", name);
      const hash = decodeURIComponent(window.location.hash.slice(1));
      console.log(hash === name);
      setIsHovered(hash === name);
    };

    // Check initially
    checkHash();

    // Listen to hash changes
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, [name]);

  // On mouse over, update URL hash
  const handleMouseOver = () => {
    window.location.hash = encodeURIComponent(name);
  };

  if (isText) {
    return (
      <span
        className={`${className} ${isHovered ? hoverClass : ""}`}
        onMouseOver={handleMouseOver}
      >
        {name}
      </span>
    );
  }

  return (
    <li
      className={`${className} ${isHovered ? hoverClass : ""}`}
      onMouseOver={handleMouseOver}
    >
      {name}
    </li>
  );
};

interface SkillListProps {
  skills: string[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  return (
    <ul className="flex flex-wrap gap-1">
      {skills.map((skill) => (
        <SkillListItem
          key={skill}
          name={skill}
        />
      ))}
    </ul>
  );
};

export default SkillList;
