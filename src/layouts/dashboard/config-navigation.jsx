import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  // {
  //   title: 'dashboard',
  //   path: '/',
  //   icon: icon('ic_analytics'),
  // },
  {
    title: 'Review Dashboard',
    path: '/user',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Your Links',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'My Account',
    path: '/account',
    icon: icon('ic_user'),
  },
];

export default navConfig;
