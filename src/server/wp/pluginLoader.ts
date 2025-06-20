import fs from 'fs';
import path from 'path';

const pluginsDir = path.resolve(__dirname, 'plugins');

export function loadPlugin(pluginName: string): string | null {
  const pluginPath = path.join(pluginsDir, pluginName);
  if (!fs.existsSync(pluginPath)) return null;
  // Charger plugin, adapter à AuroraCMS (bridge PHP-WASM)
  return pluginPath;
}
