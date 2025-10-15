export interface SkillItem {
  name: string;
  isText?: boolean;
}

export const SkillListItem: React.FC<SkillItem> = ({ name, isText }) => {
  const className = "inline font-bold text-xs px-2 rounded-full transition-all duration-[200ms] border border-gray-300 cursor-default opacity-70 hover:bg-black hover:text-white hover:border-white";
  if (isText) {
    return <span className={className}>{name}</span>;
  }
  return (
    <li className={className}>
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
