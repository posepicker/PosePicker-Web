import { ICON } from '@/constants/icon';
import Image from 'next/image';

export default function Filter() {
  return (
    <div className="fixed left-0 right-0 top-116 flex h-56 items-center bg-white px-20">
      <button className="bg-sub-white flex items-center gap-8 rounded-8 px-16 py-9">
        <h5 id="subtitle-2">필터</h5>
        <Image src={ICON.carat.down} alt={'▾'} width={16} height={16} />
      </button>
    </div>
  );
}
