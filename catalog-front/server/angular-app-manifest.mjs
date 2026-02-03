
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/catalog-front/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/catalog-front"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1456, hash: 'ac7296c29194b46160876d11c2c8395e2627b627a58b9891ed92ae4f9b7f2689', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 964, hash: 'b32fd02e8875d1ab4e816c56d2ccd66ff305ffe8e959c230e3a6506bb1facb53', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1971, hash: '1a0f4f7e4aaa097137b1a02076aa44e00e43a36ca9e4e21db9d102af1aa36eee', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3QRT5YUZ.css': {size: 3573, hash: 'zr03ruoDiPI', text: () => import('./assets-chunks/styles-3QRT5YUZ_css.mjs').then(m => m.default)}
  },
};
