export function debugLog(message: string, data?: any) {
  if (process.env.NODE_ENV === "development") {
    console.debug("[DEBUG]", message, data || "");
  }
}