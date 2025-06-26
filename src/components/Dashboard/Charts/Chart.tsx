interface ChartProps {
  title: string;
  children: React.ReactNode;
}
export const ChartCard = ({ title, children }: ChartProps) => {
  return (
    <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
      <div className="text-xl">{title}</div>
      <div className="flex md:justify-center md:items-center h-full w-full">
        {children}
      </div>
    </div>
  );
};
