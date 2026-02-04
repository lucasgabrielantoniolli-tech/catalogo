
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
    'index.csr.html': {size: 1450, hash: 'c7f5349d380835718766544444501741937a18f971198555b5764f5065aa9f4c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 958, hash: 'e90e4b638580fd46dece7d6ee0726fb30fe860d06f40621fbb1f0a27237ea0d9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1965, hash: '821092bba92a63fff4f9e17c0eb15dd97509286d36586e7f4b3ea1f221f335f8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3QRT5YUZ.css': {size: 3573, hash: 'zr03ruoDiPI', text: () => import('./assets-chunks/styles-3QRT5YUZ_css.mjs').then(m => m.default)}
  },
};
