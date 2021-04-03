import React, { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Category } from '../types';
import { FilterContext } from '../utils/FilterProvider';

export const CatButton = styled.button<{ colors: string[]; selected?: boolean }>`
  background-image: linear-gradient(
    to right,
    ${(props) => props.colors[0]} 0%,
    ${(props) => props.colors[1]} 51%,
    ${(props) => props.colors[2]} 100%
  );
  margin: 10px;
  padding: 10px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;

  :focus {
    outline: none;
  }

  :hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }

  ${(props) =>
    props.selected
      ? `background-position: right center;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    border: 2px solid black;`
      : ''}
`;

type Props = {
  category: Category;
};

const CategoryItem: FC<Props> = ({ category }) => {
  const [colors, setColors] = useState(['', '', '']);
  useEffect(() => {
    setColors(category.colors);
  }, [category]);

  const context = useContext(FilterContext);
  const isSelected = context?.categoryFilter?.toLowerCase() === category.name.toLowerCase();
  return (
    <CatButton
      colors={colors}
      onClick={() => context?.setCategory(isSelected ? '' : category.name)}
      selected={isSelected}
    >
      <p className={'font-bold'}>{category.name}</p>
    </CatButton>
  );
};

export default CategoryItem;
