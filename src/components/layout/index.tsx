import { HTMLAttributes, ElementType, FC } from "react";

interface LayoutProps extends HTMLAttributes<HTMLHeadingElement> {
  headingLevel: ElementType;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  text: string;
}

export const Layout: FC<LayoutProps> = ({ headingLevel, width, minWidth, maxWidth, height, minHeight, maxHeight, text }) => {
  const Heading = headingLevel;
  return <Heading headingLevel={headingLevel} style={{ width, minWidth, maxWidth, height, minHeight, maxHeight }}>{text}</Heading>;
};

// <Layout headingLevel="main" width="100%" height="5rem" text="Hello world!" />