import React, { FC, useState } from 'react';
import { Category, Project } from '../types';
import { CATEGORIES } from '../utils/constants';
import styled from 'styled-components';
import { CatButton } from './CategoryItem';

const GradientCircle = styled.div<{ colors: string[]; size?: string }>`
  background-image: linear-gradient(
    to right,
    ${(props) => props.colors[0]} 0%,
    ${(props) => props.colors[1]} 51%,
    ${(props) => props.colors[2]} 100%
  );
  border-radius: 100%;
  height: ${(props) => (props.size ? props.size : '1rem')};
  width: ${(props) => (props.size ? props.size : '1rem')};

  color: linear-gradient(
    to right,
    ${(props) => props.colors[0]} 0%,
    ${(props) => props.colors[1]} 51%,
    ${(props) => props.colors[2]} 100%
  );
  font-weight: bold;
  display: block;
  background-size: 200% auto;
  transition: 0.5s;

  :hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;

type Props = {
  item: Project;
};

const ProjectItem: FC<Props> = ({ item }) => {
  const { title, image, category, description, url, twitter } = item?.data;

  const colors = CATEGORIES.find(
    (cat: Category) => cat.key.toLowerCase() === category.toLowerCase(),
  )?.colors;

  const [showBtn, setShowBtn] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowBtn(true)}
      onMouseLeave={() => setShowBtn(false)}
      className={'p-5 border border-gray-200 rounded-lg hover:shadow-lg cursor-pointer relative'}
    >
      <div className={`flex justify-start items-center mb-2`}>
        <div className={'h-14 w-14 rounded-full m-1 flex justify-center items-center'}>
          {image ? (
            <img alt={title} src={image} className={`object-contain`} />
          ) : (
            <GradientCircle colors={colors as string[]} size={'100%'} />
          )}
        </div>
        <div className={`flex flex-col items-start ml-4`}>
          <p className={`font-bold text-md text-left`}>{title}</p>
          <div className={`flex items-center`}>
            <GradientCircle colors={colors as string[]} />
            <p
              className={`ml-1 text-sm font-black`}
              style={{ color: colors ? colors[0] : 'black' }}
            >
              {category}
            </p>
          </div>
        </div>
      </div>
      <div className={`text-left`}>
        <p className={`text-left leading-5`}>{description}</p>
        {twitter ? (
          <a
            className={'no-underline hover:underline'}
            href={`https://twitter.com/${twitter}`}
            target={'_blank'}
            rel={'noreferrer'}
          >
            <p className={`text-sm text-gray-500 mt-2`}>{`@${twitter}`}</p>
          </a>
        ) : null}
      </div>
      {showBtn ? (
        <div
          className={
            'absolute bottom-1 right-1 p-2 w-2/3 bg-gradient-to-l from-white via-white flex justify-end'
          }
        >
          <a className={'no-underline'} href={url} target={'_blank'} rel={'noreferrer'}>
            <CatButton colors={colors as string[]}>{'Visit site'}</CatButton>
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectItem;
