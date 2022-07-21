import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

export const formatDateString = (date: string) => format(parseISO(date), "do MMMM yyyy");

export const openURLInNewTab = (url: string) => window.open(url, "_blank", "noopener,noreferrer");
