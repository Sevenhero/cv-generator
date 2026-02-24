import './ScaledImages.css';

import Image from 'next/image';

const ScaledImage = ({ src, alt, width, height }: { src: string, alt: string, width: number, height: number }) => {
  return (
    <div className="container">
      <Image
        src={src}
        alt={alt}
        // layout="fill"
        // objectFit="contain"
        style={{ objectFit: "contain" }}
        priority
        className="image"
      />
    </div>
  );
};

export default ScaledImage;