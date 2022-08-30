import clsx from "clsx";
import languagesList from "data/languages";
import { Fragment } from "react";
import { Section } from "types/Sections";
import Typewriter from "typewriter-effect";
import { getSectionHeading } from "utils";

const Languages: React.FC = () => {
  return (
    <div id={Section.Languages} className="w-full">
      {getSectionHeading(Section.Languages)}

      <div className="h-[180px] flex flex-col justify-center">
        <Typewriter
          options={{
            delay: 40,
            loop: true,
            cursor: "",
          }}
          onInit={(typewriter) => {
            for (let language of languagesList) {
              typewriter
                .typeString(`<div class="text-3xl font-bold">${language.text}</div>`)
                .typeString(language.translation ? `<div class="mt-2 text-base">${language.translation}</div>` : "")
                .pauseFor(3000)
                .deleteAll();
            }
            typewriter.start();
          }}
        />
      </div>

      <div className="flex flex-wrap gap-5 prose prose-sm prose-neutral dark:prose-invert">
        {languagesList.map(({ id, language }, index) => (
          <Fragment key={id}>
            <span>{language}</span>
            <span className={clsx({ hidden: index === languagesList.length - 1 })}>/</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Languages;
