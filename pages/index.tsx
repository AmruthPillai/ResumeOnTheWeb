import { getArticles, getInstagramMedia } from "services";
import {
  AboutMe,
  Achievements,
  Blog,
  Certifications,
  Education,
  Header,
  Languages,
  Philantrophy,
  Projects,
  Skills,
  WorkExperience,
  Photography,
  Music,
} from "sections";
import type { Article, InstagramMedia } from "types/Sections";
import type { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const articles = await getArticles();
  const instagramMedia = await getInstagramMedia();

  return { props: { articles, instagramMedia } };
};

type Props = {
  articles: Article[];
  instagramMedia: InstagramMedia[];
};

const Home: NextPage<Props> = ({ articles, instagramMedia }) => {
  return (
    <div className="container grid gap-12">
      <Header />

      <AboutMe />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <WorkExperience />
        <Education />
      </div>

      <Skills />
      <Projects />
      <Blog articles={articles} />
      <Languages />

      <div className="grid lg:grid-cols-3 gap-12">
        <Achievements />
        <Certifications />
        <Philantrophy />
      </div>

      <Photography instagramMedia={instagramMedia} />
      <Music />
    </div>
  );
};

export default Home;
