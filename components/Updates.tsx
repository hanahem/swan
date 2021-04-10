import React, { FC, useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';

const Updates: FC = () => {
  const [md, setMd] = useState('');

  useEffect(() => {
    (async function () {
      // @ts-ignore
      const content = await import(`../UPDATES.md`);
      console.log(content);
      setMd(content.default);
    })();
  }, []);

  if (md) {
    return (
      <Markdown
        className={'text-left'}
        options={{
          wrapper: 'article',
          overrides: {
            h1: {
              props: {
                className: 'text-2xl font-semibold my-2',
              },
            },
            h2: {
              props: {
                className: 'text-xl font-semibold my-2',
              },
            },
            h3: {
              props: {
                className: 'text-lg font-semibold my-2',
              },
            },
            p: {
              props: {
                className: 'my-2',
              },
            },
            pre: {
              props: {
                className: 'p-2 bg-gray-100 text-sm my-4',
              },
            },
          },
        }}
      >
        {md}
      </Markdown>
    );
  } else {
    return (
      <div className={'h-14 w-14 rounded-full m-1 flex justify-center items-center m-auto'}>
        <img
          alt={'Loading'}
          src={'/favicon.png'}
          className={`object-contain animate-pulse m-auto`}
        />
      </div>
    );
  }
};

export default Updates;
