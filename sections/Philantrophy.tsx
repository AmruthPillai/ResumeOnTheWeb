import philantrophyList from "data/philantrophy";
import { MdChevronRight } from "react-icons/md";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const Philantrophy = () => (
  <div id={Section.Philantrophy}>
    {getSectionHeading(Section.Philantrophy)}

    <div className="grid gap-4">
      {philantrophyList.map((philantrophy) => (
        <div key={philantrophy.id} className="flex gap-5 group">
          <div>
            <MdChevronRight
              fontSize={24}
              className="relative left-0 group-hover:left-3 group-hover:text-teal-500 transition-[left_color]"
            />
          </div>

          <div className="leading-relaxed">
            <h5 className="font-bold group-hover:text-teal-500 transition-[color]">{philantrophy.title}</h5>
            <p className="prose prose-sm prose-neutral dark:prose-invert">{philantrophy.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Philantrophy;
