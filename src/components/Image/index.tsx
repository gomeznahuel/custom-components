import { FC } from "react";

interface ImageProps {
  src: string;
  alt: string;
  maxWidth?: string;
  maxHeight?: string;
}

export const Image: FC<ImageProps> = ({ src, alt, maxWidth, maxHeight }) => {
  return <img src={src} alt={alt} style={{ maxWidth, maxHeight }} />;
};
