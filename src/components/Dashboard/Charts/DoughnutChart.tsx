import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Registrar elementos necesarios
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Electronics", "Clothing", "Furniture"],
  datasets: [
    {
      label: "Revenue by category",
      data: [30, 45, 25],
      backgroundColor: [
        "rgba(15, 94, 222)", // azul
        "rgba(32, 187, 149)", // verde
        "rgba(111, 76, 249)", // morado
      ],
      borderColor: [
        "rgba(15, 94, 222, 1)",
        "rgba(32, 187, 149, 1)",
        "rgba(111, 76, 249, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    tooltip: {
      enabled: true,
    },
  },
};

// style={{ width: "300px", height: "300px" }}
export const DoughnutChart = () => {
  return (
    <div className="w-full">
      <Doughnut data={data} options={options} />
    </div>
  );
};
