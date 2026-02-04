
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/catalogo/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/catalogo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1451, hash: '7a173d56786d7f609b4f118271cf39ead3fa34a7c52436491ef7945cf5e6b687', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 959, hash: '82b95780e96dfdee236b484872c03df95c5ea4d2f38ef44906681a4336455d0d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1966, hash: '89ab9db0e54f902f87c61ba0b9a3f692790a475255dcaf5628184820a6843556', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3QRT5YUZ.css': {size: 3573, hash: 'zr03ruoDiPI', text: () => import('./assets-chunks/styles-3QRT5YUZ_css.mjs').then(m => m.default)}
  },
};
