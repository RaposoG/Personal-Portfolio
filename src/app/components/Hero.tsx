import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="text-center py-8 border-b border-gray-300">
      <h1 className="text-4xl font-semibold mb-2">{t("title")}</h1>
      <p className="text-gray-600">{t("subtitle")}</p>
    </section>
  );
}
