import { useLoaderData } from "react-router-dom";


import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Statistics = () => {
	const data =useLoaderData()
		return (
		<>
	{/* Banner Section */}
      <h3>Assignment Marks Statistics </h3>

      {/* Chart Section */}
      <div className="w-[95%] md:w-[80%] mx-auto py-12">
        <ResponsiveContainer width={"98%"} height={300}>
          <AreaChart
            width={800}
            height={600}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
              >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="number"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="text-center">
          <p className="text-lg font-semibold text-subTitle">
            Total Assignment
          </p>
        </div>
      </div>
    </>
	);
}
