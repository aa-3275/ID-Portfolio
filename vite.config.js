import { defineConfig } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(fileURLToPath(import.meta.url));
const riseCourseDir = resolve(rootDir, 'public/projects/report-controllerview-workflow').replaceAll('\\', '/');
const profileImage = resolve(rootDir, 'public/images/AlokSingh.png').replaceAll('\\', '/');

export default defineConfig({
  server: {
    watch: {
      ignored: watchedPath => {
        const normalizedPath = watchedPath.replaceAll('\\', '/');
        return normalizedPath === profileImage || normalizedPath.startsWith(`${riseCourseDir}/`);
      },
    },
  },
});
