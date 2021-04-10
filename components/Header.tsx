import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Categories from './Categories';

const Header: FC = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className={'flex flex-col items-center w-full'}>
      <div className={'h-auto'}>
        <p className={'font-black text-7xl italic'}>{'SWAN'}</p>
        <p className={'m-4'}>
          {'Swan is a listing site to advertise projects made on Bitcoin Cash.'}
        </p>
      </div>
      <div className={`mt-4 flex flex-col sm:flex-row justify-around w-1/2 mb-8`}>
        <a className={pathname === '/' ? 'font-bold text-brand-500' : ''} href={'/'}>
          {'All Listings'}
        </a>
        <a
          href={'https://read.cash/@hanahem/swancash-the-bch-projects-aggregator-b7cf9882'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          {'About'}
        </a>
        <a className={pathname === '/updates' ? 'font-bold text-brand-500' : ''} href={'/updates'}>
          {'Latest updates'}
        </a>
        <a
          className={pathname === '/submit' ? 'font-bold text-brand-500' : 'font-bold'}
          href={'https://forms.gle/eKgXMVTbu2eeb92i9'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          {'Submit Yours'}
        </a>
      </div>
      {pathname === '/' ? <Categories /> : null}
    </div>
  );
};

export default Header;
