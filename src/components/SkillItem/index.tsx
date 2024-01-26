import React from 'react';
import classNames from 'classnames';

import * as styles from './skill-item.module.scss';

interface Props extends SkillItem {
  onHover?: (key?: string) => void;
  isHighlighted: boolean;
  isText?: boolean;
}

const SkillItem: React.FunctionComponent<Props> = ({
  label,
  value,
  onHover,
  isHighlighted,
  isText,
}) => {
  const handleMouseOver = () => {
    onHover && onHover(value);
  };
  const handleMouseLeave = () => {
    onHover && onHover();
  };
  return isText ? (
    <span
      className={classNames(styles.skillItem, {
        [styles.highlighted]: isHighlighted,
        [styles.isText]: isText,
      })}
      title={`Skill item: ${label}`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </span>
  ) : (
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
