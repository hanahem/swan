import React, { createContext, FC, ReactNode, useState } from 'react';

export const FilterContext = createContext({
  categoryFilter: '',
  keyword: '',
  setCategory: (_categoryFilter: string) => {},
  setKeyword: (_keyword: string) => {},
});
const FilterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const state = {
    categoryFilter: '',
    keyword: '',
    setCategory: (categoryFilter: string) => setFilter({ ...filter, categoryFilter }),
    setKeyword: (keyword: string) => setFilter({ ...filter, keyword }),
  };

  const [filter, setFilter] = useState(state);
  return <FilterContext.Provider value={filter}>{children}</FilterContext.Provider>;
};

export default FilterProvider;
