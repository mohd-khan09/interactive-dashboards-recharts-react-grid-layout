import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { chartdata } from "./dataUtils";

const StackedAreaChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart
      data={chartdata}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="name"
        textAnchor="end"
        tickLine={false}
        className="text-[10px]"
        axisLine={{ stroke: "rgba(0, 0, 0, 0.3)", strokeWidth: 0.3 }}
      />
      <YAxis
        className="text-[10px]"
        tickLine={false}
        axisLine={{ stroke: "rgba(0, 0, 0, 0.3)", strokeWidth: 0.3 }}
      />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="amt"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default StackedAreaChart;
