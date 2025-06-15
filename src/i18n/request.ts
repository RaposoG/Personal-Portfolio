import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { supportedLanguages } from "@/utils/languages";

export default getRequestConfig(async () => {
  // Try to get the language from cookies first
  const cookieStore = await cookies();
  const savedLanguage = cookieStore.get("language")?.value;

  // If no saved language, use browser language
  const browserLang = typeof navigator !== "undefined" ? navigator.language.split("-")[0] : "en";
  const preferredLanguage = savedLanguage || browserLang;

  // Validate if the language is supported
  const finalLanguage = supportedLanguages.includes(preferredLanguage) ? preferredLanguage : "en";

  try {
    // Try to load the language file
    const messages = (await import(`../../messages/${finalLanguage}.json`)).default;
    return {
      locale: finalLanguage,
      messages,
    };
  } catch (error) {
    // If the file doesn't exist, fallback to English
    const messages = (await import(`../../messages/en.json`)).default;
    return {
      locale: "en",
      messages,
    };
  }
});
