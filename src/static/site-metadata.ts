interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Running swtang',
  siteUrl: 'https://shaowutang.com/',
  logo: 'android-chrome-225x225.png',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    // {
    //   // name: 'Blog',
    //   // url: 'https://shaowutang.com/',
    // },
    {
      name: 'Shaowu Tang',
      url: 'https://shaowutang.com/',
    },
  ],
};

export default data;
