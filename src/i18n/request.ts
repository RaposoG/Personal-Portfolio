import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { supportedLanguages } from "@/utils/languages";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const savedLanguage = cookieStore.get("language")?.value;

  const browserLang = typeof navigator !== "undefined" ? navigator.language.split("-")[0] : "en";
  const preferredLanguage = savedLanguage || browserLang;

  const finalLanguage = supportedLanguages.includes(preferredLanguage) ? preferredLanguage : "en";

  try {
    const messages = (await import(`../../messages/${finalLanguage}.json`)).default;
    return {
      locale: finalLanguage,
      messages,
    };
  } catch (error) {
    const messages = (await import(`../../messages/en.json`)).default;
    return {
      locale: "en",
      messages,
    };
  }
});
