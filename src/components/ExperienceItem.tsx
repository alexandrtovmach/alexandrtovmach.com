import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import SkillList, { SkillListItem } from '@/components/SkillList';
import type { Occupation, EmployeeRole } from 'schema-dts';

interface ExperienceItemProps extends EmployeeRole {
  isOld?: boolean;
  hasOccupation: Occupation;
  fullSkillSet: string[];
}

const getDateString = (startDate?: string, endDate?: string) => {
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

// {
//   "hasOccupation": {
//     "@type": "Occupation",
//     "name": "Founder",
//     "responsibilities": "Founded a company that provides software solutions for big manufacturing business.",
//     "skills": [
//       "nodejs",
//       "typescript",
//       "heroku",
//       "bash",
//       "react",
//       "bootstrap",
//       "postgresql",
//       "prisma",
//       "swagger"
//     ],
//     "url": "https://soft4manufacture.com/",
//     "description": "soft4manufacture"
//   }
// }

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  startDate,
  endDate,
  hasOccupation: {
    url,
    name: position,
    description: company,
    responsibilities,
    skills,
  },
  isOld,
  fullSkillSet,
}) => {
  const skillsHash = useMemo(() => {
    const hash: { [key: string]: string } = {};
    fullSkillSet?.forEach((skill) => {
      hash[skill] = skill;
    });
    return hash;
  }, [fullSkillSet]);

  return (
    <div className="mb-4">
      <h4>
        {position && `${position} • `}
        {url ? (
          <a
            href={url?.toString()}
            target="_blank"
            title={`Link to ${company} company/project`}
          >
            {company?.toString()}
          </a>
        ) : (
          <>{company?.toString()}</>
        )}
      </h4>
      <p className="font-extralight text-xs mb-1 lowercase">
        {getDateString(startDate?.toString(), endDate?.toString())}
      </p>
      {!isOld && responsibilities && (
        <p className="font-extralight text-sm">
          {responsibilities
            .toString()
            ?.split('%%')
            .map((item) =>
              skillsHash[item] ? (
                <SkillListItem key={item} isText name={skillsHash[item]} />
              ) : (
                item
              )
            )}
        </p>
      )}
      {isOld && skills && (
        <div>
          <SkillList skills={skills as string[]} />
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;
