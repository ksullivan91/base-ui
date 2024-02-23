import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Enables Vite to handle React files
    dts({
      // Generates type declarations (.d.ts files)
      insertTypesEntry: true,
      // Exclude test and story files from the build
      exclude: [
        '**/__tests__/*',
        '**/*.stories.tsx',
        '**/components.ts',
        '**/theme.ts',
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // Entry file
      name: 'base-ui-react', // Global variable, used in UMD builds
      fileName: (format) => `base-ui-react.${format}.js`,
    },
    rollupOptions: {
      // Externalize peer dependencies
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist', // Output directory
    sourcemap: true, // Optional: Generates source maps
  },
});
