import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

interface BartChartProps {
  stats?: {
    hp: number;
    atk: number;
    def: number;
    spe_atk: number;
    spe_def: number;
    vit: number;
  };
}

const BartChart = ({ stats }: BartChartProps) => {
  const data = {
    labels: [
      "Attaque",
      "Défence",
      "Vie",
      "Attaque spé",
      "Défence spé",
      "Vitesse",
    ],
    datasets: [
      {
        label: "Stats",
        data: [
          stats?.atk,
          stats?.def,
          stats?.hp,
          stats?.spe_atk,
          stats?.spe_def,
          stats?.vit,
        ],
        backgoundColor: [
          "#137C8B",
          "#709CA7",
          "#B8CBD0",
          "#7A90A4",
          "#344D59",
          "#226D68",
        ],
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BartChart;
