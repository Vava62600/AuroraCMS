import { Request, Response, NextFunction } from 'express';

export function adminAccessGuard(req: Request, res: Response, next: NextFunction) {
  const user = req.user;

  if (!user) {
    // Pas connecté -> redirige vers la page publique ou login
    return res.redirect('/');
  }

  const allowedAdminRoleIds = [1, 2, 4, 5]; // superadmin, admin, developer, technicien

  if (!allowedAdminRoleIds.includes(user.roleId)) {
    // Rôle non admin, redirige vers la racine
    return res.redirect('/');
  }

  next();
}
