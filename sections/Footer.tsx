import { format } from "date-fns";

const Footer = () => (
  <div id="footer" className="mb-16 text-xs leading-loose opacity-30">
    Licensed under MIT.
    <br />
    Copyright {format(Date.now(), "yyyy")} Amruth Pillai.
  </div>
);

export default Footer;
