import Button from "components/Button";
import ImageLink from "components/ImageLink";
import links from "data/links";
import { FaDev } from "react-icons/fa";
import { Article, Section } from "types/Sections";
import { formatDateString, getSectionHeading, openURLInNewTab } from "utils";

type Props = {
  articles: Article[];
};

const Blog: React.FC<Props> = ({ articles }) => (
  <div id={Section.Blog}>
    {getSectionHeading(Section.Blog)}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <div key={article.id} className="flex flex-col gap-2">
          <ImageLink href={article.url} alt={article.title} src={article.social_image} height={250} />

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
        </div>
      ))}
    </div>

    <Button icon={FaDev} className="mt-8" onClick={() => openURLInNewTab(links.dev)}>
      Articles on DEV
    </Button>
  </div>
);

export default Blog;
