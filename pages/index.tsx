import { getArticles, getDribbbleShots, getInstagramMedia } from "services";
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
  Designs,
  Resume,
  Contact,
  AboutRotW,
  Footer,
} from "sections";
import type { Article, DribbbleShot, InstagramMedia } from "types/Sections";
import type { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const articles = await getArticles();
  const dribbbleShots = await getDribbbleShots();
  const instagramMedia = await getInstagramMedia();

  return { props: { articles, dribbbleShots, instagramMedia } };
};

type Props = {
  articles: Article[];
  dribbbleShots: DribbbleShot[];
  instagramMedia: InstagramMedia[];
};

const Home: NextPage<Props> = ({ articles, dribbbleShots, instagramMedia }) => (
  <div className="grid gap-24">
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
    <Designs dribbbleShots={dribbbleShots} />
    <Resume />
    <Contact />
    <AboutRotW />
    <Footer />
  </div>
);

export default Home;
