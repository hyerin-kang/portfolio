import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: React.ReactNode;
  icon: React.ReactNode;
}
const SectionTitle = ({ title, subtitle, icon }: SectionTitleProps) => {
  return (
    <div className="mb-4 border-b border-gray-300 pb-2 flex items-center justify-between">
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        <span>{icon}</span>
        {title}
      </h1>
      {subtitle && <p className="text-gray-700">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
