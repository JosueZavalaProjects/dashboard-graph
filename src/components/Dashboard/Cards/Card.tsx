import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/16/solid";

interface CardProps {
  title: string;
  amount: string | number;
  percentage?: number;
}

export const Card = ({ title, amount, percentage }: CardProps) => {
  return (
    <div className="flex flex-col gap-3 border border-gray-300 rounded-lg p-6">
      <div className="text-3xl font-thin">{title}</div>
      <div className="text-4xl font-semibold">${amount}</div>
      <Percentage percentage={percentage} />
    </div>
  );
};

const Percentage = ({ percentage }: { percentage?: number }) => {
  return (
    <>
      {percentage && (
        <>
          {percentage >= 0 && (
            <div className="flex gap-2 text-xl text-green-500">
              <span className="grid justify-items-center items-center">
                <ArrowTrendingUpIcon className="size-4" />
              </span>
              <span>{percentage}%</span>
            </div>
          )}
          {percentage < 0 && (
            <div className="flex gap-2 text-xl text-red-500">
              <span className="grid justify-items-center items-center">
                <ArrowTrendingDownIcon className="size-4" />
              </span>
              <span>{percentage * -1}%</span>
            </div>
          )}
        </>
      )}
    </>
  );
};
