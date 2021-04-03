import axios from 'axios';
import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    name: 'NFTs',
    key: 'nft',
    colors: ['#4158D0', '#C850C0', '#FFCC70'],
  },
  {
    name: 'Dev',
    key: 'dev',
    colors: ['#0093E9', '#80D0C7', '#80D0C7'],
  },
  {
    name: 'Earn',
    key: 'earn',
    colors: ['#EDDE5D', '#F09819', '#F09819'],
  },
  {
    name: 'Games',
    key: 'games',
    colors: ['#ff0084', '#ff0084', '#bf0f67'],
  },
  {
    name: 'Shop',
    key: 'shop',
    colors: ['#ffb347', '#ffb347', '#ffcc33'],
  },
  {
    name: 'Pay',
    key: 'pay',
    colors: ['#FF0099', '#FF0099', '#493240'],
  },
  {
    name: 'Publish',
    key: 'publish',
    colors: ['#000000', '#434343', '#919191'],
  },
  {
    name: 'Social',
    key: 'social',
    colors: ['#833ab4', '#fd1d1d', '#fcb045'],
  },
  {
    name: 'Tools',
    key: 'tools',
    colors: ['#1f4037', '#99f2c8', '#99f2c8'],
  },
  {
    name: 'Wallets',
    key: 'wallets',
    colors: ['#08AEEA', '#2AF598', '#2AF598'],
  },
  {
    name: 'Funding',
    key: 'funding',
    colors: ['#f953c6', '#b91d73', '#b91d73'],
  },
  {
    name: 'Misc.',
    key: 'misc',
    colors: ['#0F2027', '#203A43', '#2C5364'],
  },
];

export const API_URI = 'https://jsonpad.io/api/v1.0/lists/projects';

export const fetcher = (url: string) =>

  axios
    .get(url, {
      auth: {
        username: 'hanahem',
        password: process.env.API_PASS as string,
      },
      params: {
        page_size: 100
      }
    })
    .then((res: any) => res.data);
