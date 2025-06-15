import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("Header");

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-300">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-black"></div>
        <span className="text-lg font-bold">{t("name")}</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              {t("nav.home")}
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              {t("nav.projects")}
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              {t("nav.articles")}
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              {t("nav.contact")}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
