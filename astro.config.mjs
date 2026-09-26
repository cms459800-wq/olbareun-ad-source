import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const site = process.env.SITE_URL || (deploymentHost ? `https://${deploymentHost}` : 'http://localhost:4321');
if (process.env.VERCEL && !deploymentHost && !process.env.SITE_URL) {
  throw new Error('Set SITE_URL to the public site origin before deploying.');
}

export default defineConfig({
  site,
  integrations: [sitemap()],
});
