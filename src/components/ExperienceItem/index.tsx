import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import classNames from 'classnames';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import * as styles from './experience-item.module.scss';
import SkillItem from '../SkillItem';
import skillsList from '../../../content/skills.json';
import SkillList from '../../containers/SkillList';

interface ExperienceItemProps extends ExtExperienceItem {
  isOld?: boolean;
  onHoverSkill?: (key?: string) => void;
  highlightedSkillKey?: string;
}

const getDateString = (
  startDate: ExperienceItemProps['startDate'],
  endDate: ExperienceItemProps['endDate']
) => {
  let resultStr = '';
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  const FORMAT = 'MMM YYYY';
  resultStr += `${start.format(FORMAT)} ― `;

  if (endDate) {
    dayjs.extend(duration);
    dayjs.extend(relativeTime);
    resultStr += end.format(FORMAT);
    const diff = end.diff(start, 'month');
    const yearDiff = dayjs.duration(Math.floor(diff / 12), 'year');
    const monthDiff = dayjs.duration(diff % 12, 'month');
    resultStr += ` •`;
    if (yearDiff.asMilliseconds()) {
      resultStr += ` ${yearDiff.humanize()}`;
    }
    if (monthDiff.asMilliseconds()) {
      resultStr += ` ${monthDiff.humanize()}`;
    }
  } else {
    resultStr += 'present';
  }
  return resultStr;
};

const ExperienceItem: React.FunctionComponent<ExperienceItemProps> = ({
  name,
  url,
  position,
  description,
  startDate,
  endDate,
  skills,
  onHoverSkill,
  highlightedSkillKey,
  isOld,
}) => {
  const skill2label = useMemo(() => {
    const hash: { [key: string]: string } = {};
    skillsList.forEach((skill) => {
      hash[skill.value] = skill.label;
    });
    return hash;
  }, [skillsList]);

  return (
    <div className={styles.experienceItem}>
      <h4 className={classNames(styles.title, 'label')}>
        {position && `${position} • `}
        {url ? (
          <OutboundLink
            href={url}
            target="_blank"
            title={`Link to ${name} company/project`}
          >
            {name}
          </OutboundLink>
        ) : (
          <>{name}</>
        )}
      </h4>
      <div className={classNames(styles.time, 'secondary-text')}>
        {getDateString(startDate, endDate)}
      </div>
      {!isOld && description && (
        <p className="text">
          {description
            ?.split('%%')
            .map((item) =>
              skill2label[item] ? (
                <SkillItem
                  isText
                  key={item}
                  label={skill2label[item]}
                  value={item}
                  onHover={onHoverSkill}
                  isHighlighted={highlightedSkillKey === item}
                />
              ) : (
                item
              )
            )}
        </p>
      )}
      {isOld && skills && (
        <div className={styles.about}>
          <SkillList
            skills={skills}
            onHoverSkill={onHoverSkill}
            highlightedSkillKey={highlightedSkillKey}
          />
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;
