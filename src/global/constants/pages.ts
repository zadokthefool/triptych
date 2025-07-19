export interface PageProps {
  path: string;
}

type PagesObject = {
  [key: string]: PageProps;
};

export const pages: PagesObject = {
  home: {
    path: '/',
  },
};
