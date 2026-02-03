
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1442, hash: 'cc66c3bcc9780c12609ced06814c0160e656f9ed70f882f983c3a6442ae51f1e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: 'c3de1e259f1a519d3b9a33c631374577b641e3fc6685be16df69c51c5f5a57c6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1957, hash: '6b8d256be8918cfcda721b336f39e4b2cee9e1997a00db58a2fb94a3640742b0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3QRT5YUZ.css': {size: 3573, hash: 'zr03ruoDiPI', text: () => import('./assets-chunks/styles-3QRT5YUZ_css.mjs').then(m => m.default)}
  },
};
