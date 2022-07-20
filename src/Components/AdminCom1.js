import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "../Assets/css/Admin.module.css";
function AdminCom1() {
  const data = [
    {
      name: "Jan",
      Male: 560,
      Female: 400,
      amt: 960,
    },
    {
      name: "Feb",
      Male: 300,
      Female: 260,
      amt: 560,
    },
    {
      name: "Mar",
      Male: 460,
      Female: 500,
      amt: 960,
    },
    {
      name: "Apr",
      Male: 270,
      Female: 760,
      amt: 1030,
    },
    {
      name: "May",
      Male: 580,
      Female: 200,
      amt: 780,
    },
    {
      name: "Jun",
      Male: 450,
      Female: 370,
      amt: 820,
    },
    {
      name: "Jul",
      Male: 340,
      Female: 543,
      amt: 883,
    },
    {
      name: "Aug",
      Male: 340,
      Female: 430,
      amt: 770,
    },
    {
      name: "Sep",
      Male: 340,
      Female: 450,
      amt: 790,
    },
    {
      name: "Oct",
      Male: 340,
      Female: 543,
      amt: 783,
    },
    {
      name: "Nov",
      Male: 400,
      Female: 270,
      amt: 670,
    },
    {
      name: "Dec",
      Male: 340,
      Female: 743,
      amt: 1083,
    },
  ];
  return (
    <div className={styles.admin__com__1}>
      {" "}
      <ResponsiveContainer width="100%">
        <LineChart
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Female"
            stroke="red"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Male" fill="red" stroke="green" />
        </LineChart>
      </ResponsiveContainer>{" "}
    </div>
  );
}

export default AdminCom1;
