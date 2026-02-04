
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/catalogo',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/catalogo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1476, hash: '87e0d6ae7cdcd2d1b4e172f8734df61b4bd3fefdbbae46f378e568580913448b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 984, hash: 'd1a44ccdacbd6f0f0bb0e85cde40a0777e01a1110de09fa1bcc78a2f33c6f387', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1991, hash: 'a0fab6798ac126445aa2d2783e487480cf04b7c9ff21135f3c4f701bac344466', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3QRT5YUZ.css': {size: 3573, hash: 'zr03ruoDiPI', text: () => import('./assets-chunks/styles-3QRT5YUZ_css.mjs').then(m => m.default)}
  },
};
