import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/archive',
    component: ComponentCreator('/archive', '51a'),
    exact: true
  },
  {
    path: '/authors',
    component: ComponentCreator('/authors', '498'),
    exact: true
  },
  {
    path: '/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/authors/all-sebastien-lorber-articles', 'e0a'),
    exact: true
  },
  {
    path: '/authors/yangshun',
    component: ComponentCreator('/authors/yangshun', 'b5c'),
    exact: true
  },
  {
    path: '/cv',
    component: ComponentCreator('/cv', 'e40'),
    exact: true
  },
  {
    path: '/first-blog-post',
    component: ComponentCreator('/first-blog-post', '63d'),
    exact: true
  },
  {
    path: '/index_backup',
    component: ComponentCreator('/index_backup', '463'),
    exact: true
  },
  {
    path: '/long-blog-post',
    component: ComponentCreator('/long-blog-post', '998'),
    exact: true
  },
  {
    path: '/mdx-blog-post',
    component: ComponentCreator('/mdx-blog-post', '886'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags', '626'),
    exact: true
  },
  {
    path: '/tags/docusaurus',
    component: ComponentCreator('/tags/docusaurus', '9be'),
    exact: true
  },
  {
    path: '/tags/facebook',
    component: ComponentCreator('/tags/facebook', '03e'),
    exact: true
  },
  {
    path: '/tags/hello',
    component: ComponentCreator('/tags/hello', 'd06'),
    exact: true
  },
  {
    path: '/tags/hola',
    component: ComponentCreator('/tags/hola', 'ba0'),
    exact: true
  },
  {
    path: '/welcome',
    component: ComponentCreator('/welcome', '9e2'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a37'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
