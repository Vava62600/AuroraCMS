let securityLoggingEnabled = true; // à lier avec les paramètres de l’admin

export function securityLog(event: string, userId?: string, details?: any) {
  if (!securityLoggingEnabled) return;
  console.warn("[SECURITY]", new Date().toISOString(), event, userId || "anonymous", details || "");
}
