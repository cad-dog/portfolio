export type Skill = {
  skillName: string;
  skillType: "technology" | "language";
};

export type SkillListData = {
  proficiency: "Experienced" | "Proficient" | "Acquainted";
  cards: Skill[];
};

export type SkillList = {
  listTitle: string;
  list: SkillListData[];
};
