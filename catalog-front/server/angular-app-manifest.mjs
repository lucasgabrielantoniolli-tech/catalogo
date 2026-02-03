
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'catalog-front',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/catalog-front"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1454, hash: 'cc372126b2c2c959c00d85970f667ad73c2ce8af9305575472cb8311e542ae9b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 962, hash: '133c2c11f85271641589469d23d8a1118c26e202ad2525e451253076f12abbb8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3QRT5YUZ.css': {size: 3573, hash: 'zr03ruoDiPI', text: () => import('./assets-chunks/styles-3QRT5YUZ_css.mjs').then(m => m.default)}
  },
};
