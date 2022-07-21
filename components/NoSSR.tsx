import dynamic from "next/dynamic";
import React from "react";

const NoSSR: React.FC<React.PropsWithChildren> = ({ children }) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSSR), { ssr: false });
