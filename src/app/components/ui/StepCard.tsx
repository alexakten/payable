
interface StepCardProps {
  tagColor: string;
  tagText: string;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({
  tagColor,
  tagText,
  title,
  description,
}) => {
  const bgColorClass = ["purple", "yellow", "green", "blue"].includes(tagColor)
    ? `bg-${tagColor}`
    : "bg-default";

  return (
    <div
      className={`bg-white h-full border border-zinc-100 shadow-md justify-between text-left items-start flex flex-col p-6 w-full rounded-xl transform transition duration-300 ease-in-out hover:-translate-y-2`}
    >
      <div className="flex items-center gap-2">
        <div className={`w-2.5 h-2.5 ${bgColorClass} rounded-full`}></div>
        <p className="text-sm">{tagText}</p>
      </div>
      <div className="mt-16">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-2 opacity-40">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
