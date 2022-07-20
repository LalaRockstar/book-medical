import React from "react";
import styles from "../Assets/css/Admin.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function AdminCom3() {
  const data = [
    {
      name: "Mon",
      Male: 40,
      Female: 10,
      amt: 50,
    },
    {
      name: "Tue",
      Male: 30,
      Female: 13,
      amt: 43,
    },
    {
      name: "Wed",
      Male: 20,
      Female: 9,
      amt: 29,
    },
    {
      name: "Thu",
      Male: 27,
      Female: 39,
      amt: 66,
    },
    {
      name: "Fri",
      Male: 18,
      Female: 48,
      amt: 66,
    },
    {
      name: "Sat",
      Male: 23,
      Female: 38,
      amt: 61,
    },
    {
      name: "Sun",
      Male: 34,
      Female: 43,
      amt: 77,
    },
  ];
  return (
    <div className={styles.admin__com__3}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Female" fill="#8884d8" />
          <Bar dataKey="Male" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AdminCom3;
