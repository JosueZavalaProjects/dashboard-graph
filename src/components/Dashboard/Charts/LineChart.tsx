import { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { ChartProps } from "../../../interfaces/charts";

export const LineChart = ({ labels, dataSet }: ChartProps) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const chartRef = useRef(null);

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dataSet,
        fill: true,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return null;

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(43, 67, 243, 0.5)");
          gradient.addColorStop(1, "rgba(43, 67, 243, 0)");
          return gradient;
        },
        borderColor: "rgb(43, 67, 243)",
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return <Line ref={chartRef} options={options} data={data} />;
};
