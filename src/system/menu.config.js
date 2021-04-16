import React from "react";
import {
  AiOutlineDashboard,
  AiOutlineProfile,
  AiFillDollarCircle,
} from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
export default [
  {
    key: "dashboard",
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
  },
  {
    key: "expanses",
    title: "Despesas",
    icon: <AiOutlineProfile />,
  },
  {
    key: "revenues",
    title: "Receitas",
    icon: <AiFillDollarCircle />,
  },
  {
    key: "users",
    title: "Usuários",
    icon: <FiUsers />,
  },
];
