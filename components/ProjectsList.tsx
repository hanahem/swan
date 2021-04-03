import React, { FC, SyntheticEvent, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import { API_URI, fetcher } from '../utils/constants';
import ProjectItem from './ProjectItem';
import { Project } from '../types';
import { FilterContext } from '../utils/FilterProvider';
import { CatButton } from './CategoryItem';

const ProjectsList: FC = () => {
  const { data, error, isValidating } = useSWR(API_URI + '/items', fetcher);

  const [items, setItems] = useState(data?.items);

  const [keyword, setKeyword] = useState('');
  const handleSearch = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setKeyword(value);
  };

  const context = useContext(FilterContext);
  useEffect(() => {
    if (context.categoryFilter && data) {
      setItems(
        data?.items?.filter(
          (d: Project) => d.data.category.toLowerCase() === context.categoryFilter.toLowerCase(),
        ),
      );
    }
    if (context.categoryFilter.length === 0 && data) {
      setItems(data?.items);
    }
    if (keyword && data) {
      setItems(
        data?.items?.filter((d: Project) =>
          d.data.title.toLowerCase().includes(keyword.toLowerCase()),
        ),
      );
    }
  }, [context, data, keyword]);

  if (isValidating) {
    return (
      <div className={'my-12 w-full'}>
        <div className={'h-14 w-14 rounded-full m-1 flex justify-center items-center m-auto'}>
          <img
            alt={'Loading'}
            src={'/favicon.png'}
            className={`object-contain animate-pulse m-auto`}
          />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={'my-12 w-full'}>
        <div className={'mt-8 w-full m-1 flex justify-center items-center m-auto'}>
          <p>{'An error occurred while fetching the listings. Retry please.'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={'my-12 w-full'}>
      <div className={`flex flex-col mx-4 sm:mx-0 sm:flex-row justify-between items-baseline mb-8`}>
        <span className={`flex flex-col items-start`}>
          <p className={`font-semibold text-3xl`}>{'All featured projects'}</p>
          <p className={`text-md text-gray-400 text-left`}>
            {'Explore all the projects added by the community'}
          </p>
          <p className={`text-sm font-light text-gray-600 mt-4 text-left`}>
            {items?.length + ' projects listed'}
          </p>
        </span>
        <span className={`mt-0 sm:mt-2 flex flex-col items-end`}>
          <input
            value={keyword}
            placeholder={'Search'}
            className={'p-2 border-b border-gray-300'}
            onChange={handleSearch}
          />
        </span>
      </div>
      {items?.length === 0 ? (
        <div className={'w-full mt-12 flex justify-center'}>
          <div className={'flex flex-col items-center'}>
            <p className={'text-center mb-4'}>
              {'There are no projects in this filter. Submit yours for free.'}
            </p>
            <a
              className={'no-underline'}
              href={'https://forms.gle/eKgXMVTbu2eeb92i9'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              <CatButton colors={['#000000', '#2d2f48', '#1a1e32']} onClick={() => {}}>
                {'Submit Project'}
              </CatButton>
            </a>
          </div>
        </div>
      ) : (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 self-center sm:mx-0 mx-6`}
        >
          {items?.map((item: Project) => (
            <ProjectItem item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
