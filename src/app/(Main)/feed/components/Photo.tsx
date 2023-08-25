import Image from 'next/image';

import { ICON } from '@/constants/icon';

interface Photo {
  imageKey?: string;
  source?: string;
}

export default function Photo({ imageKey, source }: Photo) {
  return (
    <div className={`relative z-0 mb-16 inline-block h-fit w-full rounded-8`}>
      {imageKey && (
        <>
          <img src={imageKey} alt={source} className="rounded-8" />
          <div className="absolute bottom-6 right-6 h-36 w-36 rounded-24 bg-white bg-opacity-30 p-6">
            <Image src={ICON.bookmark.empty} width={24} height={24} alt="🔖" />
          </div>
        </>
      )}
    </div>
  );
}