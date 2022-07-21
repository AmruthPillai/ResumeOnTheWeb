import Heading from "components/Heading";
import achievementList from "data/achievements";
import { FaAward } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

const Achievements = () => (
  <div id="achievements">
    <Heading icon={FaAward}>Achievements</Heading>

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
