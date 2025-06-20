import express, { Request, Response } from 'express';
import path from 'path';
import { execFile } from 'child_process';
import { fileURLToPath } from 'url';

const router = express.Router();

// Pour ESM (__dirname polyfill)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load WordPress plugins from a compatible directory
router.get('/', (_req, res) => {
  // This would dynamically read plugin manifests from mounted PHP-WASM-compatible folder
  res.json({ plugins: [] });
});

// Run a WP plugin in PHP-WASM sandbox
router.post('/execute', (req: Request, res: Response) => {
  const { plugin, args } = req.body as { plugin: string; args: string[] };
  const pluginPath = path.resolve(__dirname, '../../php-wasm/plugins/', plugin);

  // Limite de temps pour éviter l'abus
  const child = execFile(
    'php-wasm',
    [pluginPath, ...(args || [])],
    { timeout: 5000 }, // 5 secondes max
    (err: Error | null, stdout: string, stderr: string) => {
      if (err) {
        res.status(500).json({ error: stderr || err.message });
      } else {
        res.json({ output: stdout });
      }
    }
  );
});

export default router;