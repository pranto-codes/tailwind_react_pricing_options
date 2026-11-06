import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const resultData = [
  { name: "Student 1", physics: 82, chemistry: 79, math: 85 },
  { name: "Student 2", physics: 71, chemistry: 83, math: 77 },
  { name: "Student 3", physics: 59, chemistry: 61, math: 56 },
  { name: "Student 4", physics: 93, chemistry: 88, math: 95 },
  { name: "Student 5", physics: 87, chemistry: 92, math: 89 },
  { name: "Student 6", physics: 66, chemistry: 58, math: 62 },
  { name: "Student 7", physics: 78, chemistry: 80, math: 81 },
  { name: "Student 8", physics: 91, chemistry: 90, math: 94 },
  { name: "Student 9", physics: 74, chemistry: 72, math: 76 },
  { name: "Student 10", physics: 69, chemistry: 65, math: 68 },
];

const ResultChart = () => {
  return (
    <div className="w-full rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">Student Performance</h2>

      <div className="h-96 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={resultData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis domain={[0, 100]} />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="math"
              stroke="#6366f1"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="chemistry"
              stroke="#eab308"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="physics"
              stroke="#ef4444"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResultChart;
