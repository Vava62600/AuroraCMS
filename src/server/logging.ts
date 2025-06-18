import fs from "fs";
import path from "path";

const logDir = path.join(__dirname, "..", "..", "logs");
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

export function writeDebugLog(message: string) {
  const logPath = path.join(logDir, "debug.log");
  fs.appendFileSync(logPath, `[${new Date().toISOString()}] DEBUG: ${message}\n`);
}

export function writeSecurityLog(event: string, userId: string = "anonymous", details?: any) {
  const logPath = path.join(logDir, "security.log");
  const entry = `[${new Date().toISOString()}] SECURITY: ${event} | User: ${userId} | Details: ${JSON.stringify(details)}\n`;
  fs.appendFileSync(logPath, entry);
}
export function writeErrorLog(error: Error) {
  const logPath = path.join(logDir, "error.log");
  const entry = `[${new Date().toISOString()}] ERROR: ${error.message}\nStack: ${error.stack}\n`;
  fs.appendFileSync(logPath, entry);
}
export function writeInfoLog(message: string) {
  const logPath = path.join(logDir, "info.log");
  fs.appendFileSync(logPath
, `[${new Date().toISOString()}] INFO: ${message}\n`);
}
export function writeWarningLog(message: string) {
  const logPath = path.join(logDir, "warning.log");
  fs.appendFileSync(logPath, `[${new Date().toISOString()}] WARNING: ${message}\n`);
}
export function clearLogs() {
  const logFiles = ["debug.log", "security.log", "error.log", "info.log", "warning.log"];
  logFiles.forEach(file => {
    const filePath = path.join(logDir, file);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  });
}
export function getLogFilePath(filename: string): string {
  return path.join(logDir, filename);
}