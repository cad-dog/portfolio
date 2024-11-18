import { SkillList } from "@/app/lib/definitions";
import SkillCard from "./skill-card";

export default function Skills({ skills }: { skills: SkillList[] }) {
  return (
    <>
      {skills.map((skill, firstIndex) => {
        return (
          <div key={firstIndex}>
            <h2 className="text-xl text-gray-400">{skill.listTitle}</h2>
            {skill.list.map((skillItem, secondIndex) => {
              return (
                <div
                  key={secondIndex}
                  className="flex flex-col gap-1 px-2 mb-1"
                >
                  <h3 className="text-lg text-gray-500">
                    {skillItem.proficiency}
                  </h3>
                  {skillItem.cards.map((card, thirdIndex) => {
                    return (
                      <div
                        key={thirdIndex}
                        className="flex pl-4 pr-4 py-2 bg-slate-700 rounded"
                        data-testid="skill-card"
                      >
                        <SkillCard
                          skillName={card.skillName}
                          skillType={card.skillType}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
