import { useTranslations } from "next-intl";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import { WorkExperienceSection } from "./components/WorkExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { ReviewsSection } from "./components/ReviewsSection";

export default function Home() {
  const t = useTranslations("Footer");

  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-sans">
      <div className="w-full border border-gray-300">
        <Header />
        <Hero />
        <main className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 border-r border-gray-300">
            <ProjectsSection />
          </div>
          <div className="w-full md:w-2/3 flex flex-col">
            <WorkExperienceSection />
            <EducationSection />
          </div>
        </main>
        <ReviewsSection />
        <footer className="text-center py-4 border-t border-gray-300 text-gray-600">&copy; {t("copyright")}</footer>
      </div>
    </div>
  );
}
