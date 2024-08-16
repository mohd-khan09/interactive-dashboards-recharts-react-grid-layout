import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { chartdata } from "./dataUtils";

const DummyBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={chartdata}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid
          vertical={false}
          strokeWidth={0.45}
          opacity={0.5}
          strokeDasharray="3 3 "
        />
        <XAxis
          dataKey="name"
          textAnchor="end"
          tickLine={false}
          className="text-[10px]"
          axisLine={{ stroke: "rgba(0, 0, 0, 0.3)", strokeWidth: 0.3 }} // Adjust stroke color and width here
        />
        <YAxis
          className="text-[10px]"
          tickLine={false}
          axisLine={{ stroke: "rgba(0, 0, 0, 0.3)", strokeWidth: 0.3 }}
        />
        <Tooltip />
        <Legend
          wrapperStyle={{
            bottom: 5,
          }}
        />
        <Bar
          dataKey="pv"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="uv"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DummyBarChart;
