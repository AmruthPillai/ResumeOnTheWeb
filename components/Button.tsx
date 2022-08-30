import clsx from "clsx";
import type { IconType } from "react-icons";
import { BiLinkExternal } from "react-icons/bi";

type Props = {
  icon?: IconType;
  disabled?: boolean;
  className?: string;
  onClick: () => void;
};

const Button: React.FC<React.PropsWithChildren<Props>> = ({
  onClick,
  children,
  className,
  disabled = false,
  icon: Icon = BiLinkExternal,
}) => {
  return (
    <div className={clsx("flex", className)}>
      <div
        className={clsx("relative cursor-pointer", { "cursor-not-allowed opacity-75": disabled })}
        onClick={disabled ? () => {} : onClick}
      >
        <div
          className={clsx(
            "relative rounded-sm z-10 px-8 py-2.5 flex gap-2.5 items-center justify-center bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-900 top-0 left-0 transition-[top_left] hover:top-0.5 hover:left-0.5 active:top-1 active:left-1",
            { "hover:top-0 hover:left-0 active:top-0 active:left-0": disabled }
          )}
        >
          {Icon && <Icon fontSize={16} />}
          <span className="font-bold">{children}</span>
        </div>

        <div className="w-full h-full rounded-sm absolute top-1 left-1 border-2 border-neutral-900 dark:border-neutral-50" />
      </div>
    </div>
  );
};

export default Button;
