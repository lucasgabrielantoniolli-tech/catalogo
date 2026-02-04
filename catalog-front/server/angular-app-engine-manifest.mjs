
export default {
  basePath: 'https://github.com/lucasgabrielantoniolli-tech/catalogo',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
