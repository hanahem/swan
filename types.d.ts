export type Category = {
  name: string;
  key: string;
  colors: string[];
};

export type Project = {
  id: string;
  created: string;
  updated: string;
  data: {
    title: string;
    url: string;
    creator: string;
    twitter: string;
    description: string;
    image: string;
    category: string;
    tags: string[];
    screenshots: string[];
  };
};
