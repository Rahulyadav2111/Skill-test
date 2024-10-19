import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import Image from "next/image";
import HTMLIMAGE from "../assets/html.png";

const ProgressPieChart = ({ value = 12, total = 15 }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      { name: "Completed", value: value },
      { name: "Remaining", value: total - value },
    ]);
  }, [value, total]);

  const COLORS = ["#0000FF", "#e0e0e0"]; // Blue for completed, gray for remaining

  return (
    <div className="relative flex justify-center items-center">
      <PieChart width={200} height={200}>
        {data.length > 0 && (
          <Pie
            data={data}
            cx={100}
            cy={100}
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            startAngle={-10}
            endAngle={360}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        )}
        <Tooltip />
      </PieChart>
      <div className="absolute">
        <Image src={HTMLIMAGE} alt="HTML Icon" width={40} height={40} />
      </div>
    </div>
  );
};

export default ProgressPieChart;
