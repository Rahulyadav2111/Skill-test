"use client";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

// Generate initial data with random values from 0 to 100
const generateData = () =>
  Array.from({ length: 101 }, (_, index) => ({
    x: index,
    value: Math.floor(Math.random() * 101),
  }));

const LineChartComponent = ({ percentile }) => {
  const [data, setData] = useState(generateData());
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const newFilteredData = data.filter((point) => point.x % 5 === 0);

    const index = newFilteredData.findIndex((point) => point.x === percentile);

    const referencePoint = {
      x: percentile,
      value: Math.floor(Math.random() * 101),
    };

    if (index === -1) {
      newFilteredData.push(referencePoint);
    } else {
      newFilteredData[index] = referencePoint;
    }

    if (newFilteredData.length > 25) {
      setFilteredData(newFilteredData.sort((a, b) => a.x - b.x).slice(0, 25));
    } else {
      setFilteredData(newFilteredData.sort((a, b) => a.x - b.x));
    }
  }, [percentile]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const indexValue = payload[0].payload.x;
      const numberOfStudents = 4;
      return (
        <div className="bg-white border rounded-lg p-2 shadow-lg">
          <p className="text-black">Percentile: {indexValue}</p>
          <p className="text-black">Number of students: {numberOfStudents}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={300} className="z-[-1]">
        <LineChart data={filteredData}>
          <YAxis hide />
          <XAxis dataKey="x" domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine
            x={percentile}
            stroke="grey"
            label="your percentile"
            segment={[{ value: 30 }, { value: 35 }]}
          />

          {/* Line that shows values */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            dot={{ r: 4 }} // Show points on the line
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
