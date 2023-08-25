'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Popup } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { ICON } from '@/constants/icon';

interface Photo {
  imageKey?: string;
  source?: string;
  id?: number;
}

export default function Photo({ imageKey, source, id }: Photo) {
  const { open } = useOverlay();
  return (
    <Link href={`detail/${id}`}>
      <div className={`relative z-0 mb-16 inline-block h-fit w-full rounded-8`}>
        {imageKey && (
          <>
            <Image
              src={imageKey}
              alt={source || ''}
              width={200}
              height={100}
              className="rounded-8"
            />
            <div className="absolute bottom-6 right-6 h-36 w-36 rounded-24 bg-white bg-opacity-30 p-6">
              <Image
                src={ICON.bookmark.empty}
                width={24}
                height={24}
                alt="🔖"
                onClick={(e) => {
                  e.preventDefault();
                  open(({ exit }) => (
                    <Popup
                      onClick={exit}
                      className="cursor-pointer rounded-8"
                      onCloseOutside={exit}
                    >
                      <p>해당 기능은 아직 준비중이에요!</p>
                      <p> 업데이트를 기대해 주세요.</p>
                    </Popup>
                  ));
                }}
              />
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
