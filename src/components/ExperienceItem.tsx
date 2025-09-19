import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import SkillList, { SkillListItem, type SkillItem } from '@/components/SkillList';

interface ExperienceItemProps {
  isOld?: boolean;
  onHoverSkill?: (key?: string) => void;
  highlightedSkillKey?: string;
  name?: string;
  url?: string;
  position?: string;
  description?: string;
  startDate: string | Date;
  endDate?: string | Date;
  skills?: string[];
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

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  name,
  url,
  position,
  description,
  startDate,
  endDate,
  skills,
  isOld,
}) => {
  const skillsHash = useMemo(() => {
    const hash: { [key: string]: string } = {};
    skills?.forEach((skill) => {
      hash[skill] = skill;
    });
    return hash;
  }, [skills]);

  return (
    <div>
      <h4>
        {position && `${position} • `}
        {url ? (
          <a
            href={url}
            target="_blank"
            title={`Link to ${name} company/project`}
          >
            {name}
          </a>
        ) : (
          <>{name}</>
        )}
      </h4>
      <div>
        {getDateString(startDate, endDate)}
      </div>
      {!isOld && description && (
        <p className="text">
          {description
            ?.split('%%')
            .map((item) =>
              skillsHash[item] ? (
                <SkillListItem
                  isText
                  name={skillsHash[item]}
                />
              ) : (
                item
              )
            )}
        </p>
      )}
      {isOld && skills && (
        <div>
          <SkillList
            skills={skills}
          />
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;