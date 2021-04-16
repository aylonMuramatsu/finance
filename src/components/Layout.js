import React from "react";
import { useGlobal } from "../context/global";
import { Container } from "../styles/ui/Layout.style";
import Content from "./Content";
import Header from "./Header";
import Indicators from "./Indicators";
import Sidebar from "./Sidebar";

export default function Layout() {
  const { config } = useGlobal();
  return (
    <Container minimal={config.minimalist}>
      <Header />
      <Sidebar />
      <Content>
        <Indicators />
      </Content>
    </Container>
  );
}
