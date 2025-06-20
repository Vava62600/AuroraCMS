import fs from 'fs';
import path from 'path';

const themesDir = path.resolve(__dirname, 'themes');

export function loadTheme(themeName: string): string | null {
  const themePath = path.join(themesDir, themeName);
  if (!fs.existsSync(themePath)) return null;
  // Charger thème, adapter WP -> AuroraCMS
  return themePath;
}
