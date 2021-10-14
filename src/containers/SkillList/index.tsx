import React from 'react';
import SkillItem from '../../components/SkillItem';

import * as styles from './skill-list.module.scss';

interface Props {
  skills: SkillItem[];
  onHoverSkill?: (key?: string) => void;
  highlightedSkillKey?: string;
}

const SkillList: React.FunctionComponent<Props> = ({
  skills,
  highlightedSkillKey,
  onHoverSkill,
}) => {
  return (
    <ul className={styles.skillList}>
      {skills.map(({ label, value }) => (
        <SkillItem
          key={value}
          label={label}
          value={value}
          onHover={onHoverSkill}
          isHighlighted={highlightedSkillKey === value}
        />
      ))}
    </ul>
  );
};

export default SkillList;
