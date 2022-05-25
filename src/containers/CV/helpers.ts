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
