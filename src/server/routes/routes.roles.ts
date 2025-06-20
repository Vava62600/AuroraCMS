import express from 'express';
const router = express.Router();

let roles = [
  { id: 1, name: 'superadmin', permissions: ['*'] },
  { id: 2, name: 'admin', permissions: ['manage_sites', 'manage_users', 'edit_content', 'view_analystics', 'debug_sites'] },
  { id: 3, name: 'editor', permissions: ['edit_content', 'view_analytics'] },
  { id: 4, name: 'devlopper', permissions: ['view_analytics', 'debug_sites'] }
  { id: 5, name: 'technicien', permissions: ['debug_sites'] }
  { id: 6, name: 'viewer', permissions: ['view_analytics'] }

];

router.get('/', (_req, res) => {
  res.json({ roles });
});

router.post('/create', (req, res) => {
  const { name, permissions } = req.body;
  const newRole = { id: Date.now(), name, permissions };
  roles.push(newRole);
  res.status(201).json({ message: 'Role created', role: newRole });
});

router.post('/assign', (req, res) => {
  const { userId, roleId } = req.body;
  // Here you’d update the DB to assign the role to userId
  res.json({ message: `Assigned role ${roleId} to user ${userId}` });
});

export default router;