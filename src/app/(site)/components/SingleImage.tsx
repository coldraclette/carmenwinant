import Image from 'next/image';

import { urlForImage, urlForSmallerImage } from '../../../../sanity/lib/image';
import { ProjectImage } from '../types';

interface SingleImageProps {
  image: ProjectImage;
  inModal?: boolean;
}

export default function SingleImage({
  image,
  inModal = false,
}: SingleImageProps) {
  if (!image) return null;
  
  if (inModal) {
    return (
      <div className="relative mr-[15px]">
        <Image
          alt=""
          height={800}
          width={1200}
          src={urlForImage(image)}
          sizes="(min-width: 1024px) 1200px, 100vw"
          className={`h-[90vh] w-auto object-contain`}
          placeholder="blur"
          blurDataURL={image.asset.metadata.lqip}
        />
      </div>
    );
  }

  return (
    <div className="relative mr-[15px]">
      <Image
        alt=""
        height={800}
        width={1200}
        src={urlForSmallerImage(image)}
        sizes="213px"
        className={`h-[150px] w-auto object-contain `}
        placeholder="blur"
        blurDataURL={image.asset.metadata.lqip}
      />
    </div>
  );
}
