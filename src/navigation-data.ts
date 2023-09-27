export const navigationData = [
  {
    label: 'Home',
    link: '',
  },
  {
    label: 'Products',
    children: [
      {
        label: 'Product 1',
        link: '/headTeacherWelcome',
      },
      {
        label: 'Product 2',
        link: '/product2',
        children: [
          {
            label: 'Subproduct A',
            link: '/subproductA',
          },
          {
            label: 'Subproduct B',
            link: '/subproductB',
          },
        ],
      },
    ],
  },
];
