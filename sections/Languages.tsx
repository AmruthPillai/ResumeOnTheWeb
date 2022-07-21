import Heading from "components/Heading";
import languagesList from "data/languages";
import Typewriter from "typewriter-effect";
import { FaSignLanguage } from "react-icons/fa";
import clsx from "clsx";
import { Fragment } from "react";

const Languages: React.FC = () => {
  return (
    <div id="languages">
      <Heading icon={FaSignLanguage}>Languages</Heading>

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

      <div className="flex gap-5 prose prose-sm prose-neutral dark:prose-invert">
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
