import Heading from "components/Heading";
import sectionsList from "data/sections";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import type { Section } from "types/Sections";

export const formatDateString = (date: string) => format(parseISO(date), "do MMMM yyyy");

export const openURLInNewTab = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

export const getSectionHeading = (section: Section) => (
  <Heading icon={sectionsList[section].icon}>{sectionsList[section].title}</Heading>
);
