import React from 'react';
import classNames from 'classnames';

import * as styles from './skill-item.module.scss';

interface Props extends SkillItem {
  onHover?: (key?: string) => void;
  isHighlighted: boolean;
}

const SkillItem: React.FunctionComponent<Props> = ({
  label,
  value,
  onHover,
  isHighlighted,
}) => {
  const handleMouseOver = () => {
    onHover && onHover(value);
  };
  const handleMouseLeave = () => {
    onHover && onHover();
  };
  return (
    <li
      className={classNames(styles.skillItem, {
        [styles.highlighted]: isHighlighted,
      })}
      title={`Skill item: ${label}`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </li>
  );
};

export default SkillItem;
