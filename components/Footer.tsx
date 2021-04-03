import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className={`absolute bottom-2 border-t border-gray-300 py-4 w-full mt-8 h-12`}>
      <div className={`w-full flex justify-between items-center px-4 sm:px-0`}>
        <p className={`font-black italic text-gray-300`}>{'SWAN'}</p>
        <p className={`text-sm text-gray-300`}>{'contact@swan.cash - 2021'}</p>
      </div>
    </div>
  );
};

export default Footer;
