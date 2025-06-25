import { Card } from "./Card";

export const Cards = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card title="Total Sales" amount={"56,200"} percentage={5.2} />
      <Card title="Total Expenses" amount={"24,500"} percentage={-1.8} />
      <Card title="Net Profit" amount={"31,700"} />
    </div>
  );
};
