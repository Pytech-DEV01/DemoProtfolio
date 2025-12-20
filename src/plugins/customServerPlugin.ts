import type { Plugin } from 'vite';

/**
 * Custom Server Plugin
 * Development tools, component tracking, or analytics
 * Add your own custom functionality here
 */
export default function customServerPlugin(): Plugin {
  return {
    name: 'custom-server-plugin',
    apply: 'serve',
    configureServer(server) {
      return () => {
        server.middlewares.use((req, res, next) => {
          // Add custom middleware here
          // Example: Component tracking, analytics, development tools
          next();
        });
      };
    },
  };
}
