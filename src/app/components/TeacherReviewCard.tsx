import { useTranslations } from "next-intl";

interface TeacherReviewCardProps {
  review: string;
  teacherName: string;
  teacherTitle: string;
}

export function TeacherReviewCard({ review, teacherName, teacherTitle }: TeacherReviewCardProps) {
  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <p className="italic mb-2">"{review}"</p>
      <p className="font-medium">{teacherName}</p>
      <p className="text-sm text-gray-600">{teacherTitle}</p>
    </div>
  );
}
