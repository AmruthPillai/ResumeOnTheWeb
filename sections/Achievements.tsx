import achievementList from "data/achievements";
import { MdChevronRight } from "react-icons/md";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const Achievements = () => (
  <div id={Section.Achievements}>
    {getSectionHeading(Section.Achievements)}

    <div className="grid gap-4">
      {achievementList.map((achievement) => (
        <div key={achievement.id} className="flex gap-5 group">
          <div>
            <MdChevronRight
              fontSize={20}
              className="relative left-0 group-hover:left-3 group-hover:text-teal-500 transition-[left_color]"
            />
          </div>

          <div className="leading-relaxed">
            <h5 className="font-bold group-hover:text-teal-500 transition-[color]">{achievement.title}</h5>
            <p className="prose prose-sm prose-neutral dark:prose-invert">{achievement.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Achievements;
