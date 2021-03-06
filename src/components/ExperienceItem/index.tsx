import React from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

import styles from './experience-item.module.scss';
import SkillList from '../../containers/SkillList';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

interface Props extends ExperienceItem {
  onHoverSkill?: (key?: string) => void;
  highlightedSkillKey?: string;
}

const getDateString = (
  startDate: Props['startDate'],
  endDate: Props['endDate']
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

const ExperienceItem: React.FunctionComponent<Props> = ({
  name,
  url,
  position,
  // description,
  startDate,
  endDate,
  skills,
  onHoverSkill,
  highlightedSkillKey,
}) => {
  return (
    <div className={styles.experienceItem}>
      <h4 className={styles.title}>
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
      <div className={styles.time}>{getDateString(startDate, endDate)}</div>
      <div className={styles.about}>
        <SkillList
          skills={skills}
          onHoverSkill={onHoverSkill}
          highlightedSkillKey={highlightedSkillKey}
        />
      </div>
      {/* <p>{description}</p> */}
    </div>
  );
};

export default ExperienceItem;
