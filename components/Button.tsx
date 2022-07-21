import { BiLinkExternal } from "react-icons/bi";
import type { IconType } from "react-icons";

type Props = {
  icon?: IconType;
  onClick: () => void;
};

const Button: React.FC<React.PropsWithChildren<Props>> = ({ icon: Icon = BiLinkExternal, onClick, children }) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <div className="relative rounded-sm z-10 px-6 py-2.5 flex gap-2 items-center bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-900 top-0 left-0 transition-[top_left] hover:top-0.5 hover:left-0.5 active:top-1 active:left-1">
        {Icon && <Icon fontSize={18} />}
        <span className="font-bold">{children}</span>
      </div>

      <div className="w-full h-full rounded-sm absolute top-1 left-1 border-2 border-neutral-900 dark:border-neutral-50" />
    </div>
  );
};

export default Button;
