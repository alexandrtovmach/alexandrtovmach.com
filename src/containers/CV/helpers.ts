interface QueryItem {
  node: {
    name: string;
    internal: { content: string };
  };
}

export const parseQuery = <ParsedType>(
  queryRes: any,
  forseJSONParse?: boolean
) => {
  const contentMd: any = {};
  queryRes.edges.forEach(
    ({
      node: {
        name,
        internal: { content },
      },
    }: QueryItem) => {
      contentMd[name] = forseJSONParse ? JSON.parse(content) : content;
    }
  );
  return contentMd as ParsedType;
};

export const mergeExperienceWithSkills = (
  item: ExperienceItem,
  skills: SkillItem[]
) => {
  const extendedSkills = item.skills
    .map(
      (targetKey) =>
        (skills.find(({ value }) => targetKey === value) || {
          category: 'other',
          value: targetKey,
        }) as SkillItem
    )
    .filter(Boolean);
  return {
    ...item,
    skills: extendedSkills,
  };
};
