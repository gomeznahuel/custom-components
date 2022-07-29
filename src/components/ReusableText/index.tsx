import { HTMLAttributes, ElementType, FC } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  headingLevel: ElementType;
}

export const TsHeading: FC<HeadingProps> = ({ headingLevel, children, className }) => {
  const Heading = headingLevel;

  return (
    <Heading className={className} headinglevel={headingLevel}>
      {children}
    </Heading>
  );
};

// Component that renders a heading with a given level. The level is passed as a prop.
// Levels available: h1, h2, h3, h4, h5, h6, p, div 

// <TsHeading headingLevel="h1" className="greet">Hello world!</TsHeading>