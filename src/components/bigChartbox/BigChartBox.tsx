import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "D",
    Livres: 4000,
    Vêtements: 2400,
    Électronique: 2400,
  },
  {
    name: "L",
    Livres: 3000,
    Vêtements: 1398,
    Électronique: 2210,
  },
  {
    name: "M",
    Livres: 2000,
    Vêtements: 9800,
    Électronique: 2290,
  },
  {
    name: "M",
    Livres: 2780,
    Vêtements: 3908,
    Électronique: 2000,
  },
  {
    name: "J",
    Livres: 1890,
    Vêtements: 4800,
    Électronique: 2181,
  },
  {
    name: "V",
    Livres: 2390,
    Vêtements: 3800,
    Électronique: 2500,
  },
  {
    name: "S",
    Livres: 3490,
    Vêtements: 4300,
    Électronique: 2100,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Graph Produits</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Électronique"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="Vêtements"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="Livres"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
