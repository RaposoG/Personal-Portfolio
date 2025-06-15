"use client";

import { useTranslations } from "next-intl";

interface Course {
  id: string;
  name: string;
}

export function EducationSection() {
  const t = useTranslations("Education");
  const courses = t.raw("courses") as Course[];

  return (
    <section className="p-4 border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4">{t("title")}</h2>
      <p className="mb-2">{t("description")}</p>
      <h3 className="text-xl font-medium mb-2">{t("coursesTitle")}</h3>
      <ul className="list-disc list-inside space-y-1">
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </section>
  );
}
