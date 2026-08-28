import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://thebearconsolmagno.github.io',
  base: '/thebear_site',
  trailingSlash: 'always',
});
