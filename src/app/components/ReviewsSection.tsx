import { useTranslations } from "next-intl";
import { TeacherReviewCard } from "./TeacherReviewCard";

export function ReviewsSection() {
  const t = useTranslations("Reviews");

  return (
    <section className="p-4 border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4">{t("title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TeacherReviewCard review={t("review")} teacherName={t("teacher.name")} teacherTitle={t("teacher.title")} />
        <TeacherReviewCard review={t("review")} teacherName={t("teacher.name")} teacherTitle={t("teacher.title")} />
        <TeacherReviewCard review={t("review")} teacherName={t("teacher.name")} teacherTitle={t("teacher.title")} />
      </div>
    </section>
  );
}
