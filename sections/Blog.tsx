import Heading from "components/Heading";
import ImageLink from "components/ImageLink";
import { formatDateString, openURLInNewTab } from "utils";
import Button from "components/Button";
import { MdBook } from "react-icons/md";
import Tippy from "@tippyjs/react";
import { BiLinkExternal } from "react-icons/bi";
import { FaDev } from "react-icons/fa";
import type { Article } from "types/Sections";

type Props = {
  articles: Article[];
};

const Blog: React.FC<Props> = ({ articles }) => (
  <div id="blog">
    <Heading icon={MdBook}>Blog</Heading>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <div key={article.id} className="flex flex-col gap-2">
          <ImageLink size={250} src={article.social_image} alt={article.title} href={article.url} />

          <div>
            <h4 className="text-lg font-bold truncate">{article.title}</h4>
            <p className="mt-1 text-xs">
              Published on {formatDateString(article.published_at)} | {article.public_reactions_count} Reactions
            </p>
          </div>

          <p className="prose prose-sm prose-neutral dark:prose-invert">{article.description}</p>

          {article.tag_list.length > 0 && (
            <p className="text-xs leading-relaxed font-bold">{article.tag_list.map((tag) => `#${tag}`).join(" ")}</p>
          )}

          <div className="flex">
            <Tippy content="Read More" placement="bottom">
              <a href={article.url} target="_blank" rel="noreferrer">
                <BiLinkExternal fontSize={18} />
              </a>
            </Tippy>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-5 inline-block">
      <Button icon={FaDev} onClick={() => openURLInNewTab("https://pillai.xyz/dev")}>
        Articles on DEV
      </Button>
    </div>
  </div>
);

export default Blog;
