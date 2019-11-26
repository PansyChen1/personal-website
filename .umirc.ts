import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'personal-website',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },

      pwa: {
          manifestOptions: {
            srcPath: 'manifest.json',
          },
        },
    }],
  ],
}

export default config;
