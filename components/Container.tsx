import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
	return <div className="max-w-screen-x w-11/12 md:w-4/5 mx-auto">{children}</div>;
};
