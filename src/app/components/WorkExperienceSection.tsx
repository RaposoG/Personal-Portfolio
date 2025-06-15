import { useTranslations } from "next-intl";

export function WorkExperienceSection() {
  const t = useTranslations("WorkExperience");

  return (
    <section className="p-4 border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4">{t("title")}</h2>
      <div className="mb-4">
        <h3 className="text-xl font-medium">{t("roadmap.title")}</h3>
        <p className="text-gray-700">{t("roadmap.description")}</p>
        <a href="#" className="text-blue-600 hover:underline">
          {t("roadmap.link")}
        </a>
      </div>
      <div>
        <h3 className="text-xl font-medium">{t("opensource.title")}</h3>
        <p className="text-gray-700">{t("opensource.description")}</p>
        <a href="#" className="text-blue-600 hover:underline">
          {t("opensource.link")}
        </a>
      </div>
    </section>
  );
}
