import React from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

import styles from './experience-item.module.scss';

interface Props {
  name: string;
  url?: string;
  position?: string;
  description?: string;
  startDate: string | Date;
  endDate?: string | Date;
  skills: {
    name: string;
  }[];
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
    resultStr += ` • ${dayjs
      .duration(Math.floor(diff / 12), 'year')
      .humanize()} ${dayjs.duration(diff % 12, 'month').humanize()}`;
  } else {
    resultStr += 'present';
  }
  return resultStr;
};

const ExperienceItem: React.FunctionComponent<Props> = ({
  name,
  url,
  position,
  description,
  startDate,
  endDate,
}) => {
  return (
    <div className={styles.experienceItem}>
      <h4 className={styles.title}>
        {position && `${position} • `}
        {url ? (
          <a href={url} target="_blank" title={name}>
            {name}
          </a>
        ) : (
          <>{name}</>
        )}
      </h4>
      <div className={styles.time}>{getDateString(startDate, endDate)}</div>
      <p>{description}</p>
    </div>
  );
};

export default ExperienceItem;
