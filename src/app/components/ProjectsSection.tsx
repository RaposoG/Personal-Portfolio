import { useTranslations } from "next-intl";

export function ProjectsSection() {
  const t = useTranslations("Projects");

  return (
    <section className="p-4 border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4">{t("title")}</h2>
      <ul className="space-y-2">
        <li>
          <a href="#" className="block p-2 bg-gray-100 hover:bg-gray-200">
            {t("items.portfolio")}
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 bg-gray-100 hover:bg-gray-200">
            {t("items.calculator")}
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 bg-gray-100 hover:bg-gray-200">
            {t("items.quiz")}
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 bg-gray-100 hover:bg-gray-200">
            {t("items.countdown")}
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 bg-gray-100 hover:bg-gray-200">
            {t("items.product")}
          </a>
        </li>
      </ul>
    </section>
  );
}
