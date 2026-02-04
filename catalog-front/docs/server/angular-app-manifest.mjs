
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/lucasgabrielantoniolli-tech/catalogo',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/lucasgabrielantoniolli-tech/catalogo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1496, hash: '338ff08373d3d7b48c3557018b844b5e5748e820d3bf989483c6d9365968e1ad', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: 'd1cbb13ed7796cd26de70c2bdf02a752c7518a56dc4e18c1679ac9bc9ce3a7c4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2011, hash: 'a40aeee87a51fe0146d44808349516f26572ffa48428d770560c0d9da9042a2d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3QRT5YUZ.css': {size: 3573, hash: 'zr03ruoDiPI', text: () => import('./assets-chunks/styles-3QRT5YUZ_css.mjs').then(m => m.default)}
  },
};
