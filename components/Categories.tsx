import React, { FC } from 'react';
import CategoryItem from './CategoryItem';
import { CATEGORIES } from '../utils/constants';
import { Category } from '../types';

const Categories: FC = () => {
  return (
    <div>
      <div className={'w-full grid grid-cols-2 sm:grid-rows-2 sm:grid-cols-6 gap-2'}>
        {CATEGORIES.map((cat: Category) => (
          <CategoryItem category={cat} key={cat.key} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
