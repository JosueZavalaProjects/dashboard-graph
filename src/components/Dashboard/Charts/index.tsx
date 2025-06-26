import { ChartCard } from "./Chart";
import { DoughnutChart } from "./DoughnutChart";
import { LineChart } from "./LineChart";

export const Charts = () => {
  const lineChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const lineChartDataSet = [0, 180000, 180000, 300000, 350000, 220000, 560000];
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
      <ChartCard title={"Sales Overview"}>
        <LineChart
          title={"Sales Overview"}
          labels={lineChartLabels}
          dataSet={lineChartDataSet}
        />
      </ChartCard>
      <ChartCard title={"Revenue by Category"}>
        <DoughnutChart />
      </ChartCard>
    </div>
  );
};
