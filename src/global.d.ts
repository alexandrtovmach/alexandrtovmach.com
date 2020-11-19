interface SkillItem {
  label?: string;
  category?:
    | 'backend'
    | 'frontend'
    | 'mobile'
    | 'databases'
    | 'design'
    | 'other';
  value: string;
}

interface ExperienceItem {
  name: string;
  url?: string;
  position?: string;
  description?: string;
  startDate: string | Date;
  endDate?: string | Date;
  skills: SkillItem[];
}
