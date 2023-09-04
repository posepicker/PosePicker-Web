'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import EmptyCase from './components/EmptyCase';
import FilterSheet from './components/FilterSheet';
import FilterTab from './components/FilterTab';
import PhotoList from './components/PhotoList';
import { usePoseFeedQuery } from '@/apis';
import { Spacing } from '@/components/Spacing';
import useDidMount from '@/hooks/useDidMount';
import useFilterState from '@/hooks/useFilterState';
import { useRef } from 'react';
import useObserver from '@/hooks/useObserver';

export default function Feed() {
  const params = useSearchParams();
  const router = useRouter();

  const { filterState, updateFilterState } = useFilterState();
  const { data, fetchNextPage, isFetching } = usePoseFeedQuery(filterState);

  useDidMount(() => {
    if (!params.get('filter')) return;
    updateFilterState({
      tags: new Array(params.get('filter') || ''),
      frameCount: 0,
      peopleCount: 0,
    });
    router.replace('/feed');
  });

  const bottom = useRef(null);
  useObserver({ target: bottom, root: null, onIntersect: fetchNextPage });

  return (
    <>
      <FilterTab />
      <Spacing size={40} />
      <div className="h-fit overflow-y-scroll">
        <div className="columns-2	py-16">
          {data?.pages.map((page) => (
            <PhotoList key={page.filteredContents.number} data={page.filteredContents.content} />
          ))}
          {isFetching && <div>Loading...</div>}
        </div>
        {/* {data?.recommendation && (
          <>
            <EmptyCase
              title={'신비한 포즈를 찾으시는군요!'}
              text={'찾고 싶은 포즈를 저희에게 알려주세요.'}
              button={'문의사항 남기기'}
              path={URL.inquiry}
            />

            <h4 className="mb-16">이런 포즈는 어때요?</h4>
            <PhotoList data={data.recommendedContents.content} />
          </>
        )} */}
        {/* {isFetched ? <PhotoList data={data?.filteredContents.content} /> : <PhotoList />} */}
      </div>
      <div ref={bottom} />
      <FilterSheet />
    </>
  );
}
