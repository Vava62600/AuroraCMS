import { Router } from 'express';
import { runPlugin, runTheme } from './sandbox';

const router = Router();

router.post('/plugin', async (req, res) => {
  try {
    const { pluginName, action, params } = req.body;
    const result = await runPlugin(pluginName, action, params);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'WP plugin execution error' });
  }
});

router.post('/theme', async (req, res) => {
  try {
    const { themeName, action, params } = req.body;
    const result = await runTheme(themeName, action, params);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'WP theme execution error' });
  }
});

export default router;
