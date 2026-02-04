
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '../catalogo/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/catalogo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1453, hash: '86c4b70f7517c76717404c1bfb9ea6598329a77447e5e28480156c006c5cbd00', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 961, hash: '898a97005526f54b660210d631f4736768eb4da7dd2e78da0341b9a1b7109086', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3QRT5YUZ.css': {size: 3573, hash: 'zr03ruoDiPI', text: () => import('./assets-chunks/styles-3QRT5YUZ_css.mjs').then(m => m.default)}
  },
};
