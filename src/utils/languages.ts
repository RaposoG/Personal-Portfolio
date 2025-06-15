import fs from "fs";
import path from "path";

export const languageNames: Record<string, string> = {
  en: "English",
  pt: "Português",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  ja: "日本語",
  ko: "한국어",
  zh: "中文",
  ru: "Русский",
};

// Lista de idiomas suportados
export const supportedLanguages = ["en", "pt"];

export async function getAvailableLanguages(): Promise<string[]> {
  const messagesDir = path.join(process.cwd(), "messages");
  const files = await fs.promises.readdir(messagesDir);
  return files.filter((file) => file.endsWith(".json")).map((file) => file.replace(".json", ""));
}

export async function getLanguageName(code: string): Promise<string> {
  return languageNames[code] || code.toUpperCase();
}

export async function isValidLanguage(code: string): Promise<boolean> {
  return supportedLanguages.includes(code);
}
