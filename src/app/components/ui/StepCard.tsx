import React from 'react';

interface StepCardProps {
  showTag?: boolean;
  showBorder?: boolean;
  showShadow?: boolean;
  tagColor?: string;
  tagText?: string;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({
  showTag = true,
  showBorder = true,
  showShadow = true,
  tagColor,
  tagText,
  title,
  description,
}) => {
  const bgColorClass = tagColor && ["purple", "yellow", "green", "blue"].includes(tagColor)
    ? `bg-${tagColor}`
    : "bg-default";

  const borderClass = showBorder ? "border border-zinc-100" : "";
  const shadowClass = showShadow ? "shadow-md" : "";

  return (
    <div
      className={`bg-white h-full ${borderClass} ${shadowClass} justify-between text-left items-start flex flex-col p-6 w-full rounded-xl transform transition duration-300 ease-in-out hover:-translate-y-2`}
    >
      <div className="flex items-center gap-2">
        {showTag && tagText && (
          <div className="flex items-center gap-2">
            {tagColor && <div className={`w-2.5 h-2.5 ${bgColorClass} rounded-full`}></div>}
            <p className="opacity-40 text-sm">{tagText}</p>
          </div>
        )}
      </div>
      {/* <p className="text-sm">{tagText}</p> */}
      <div className="mt-12">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-2 opacity-40">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
