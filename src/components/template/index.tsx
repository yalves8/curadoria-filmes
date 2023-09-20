import { theme, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Logo from "../../utils/images/wepik-creative-cinema-production-logo-20230920040419CmaA.png";
import { Header, Content, Footer } from "antd/es/layout/layout";
import React from "react";
import "./style/index.scss";

const Template = ({ children }: any) => {
  return (
    <Layout className="layoutTemplate">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        className="siderTemplate"
      >
        <div className="demo-logo-vertical">
          <img src={Logo} alt="oi" className="imageLogo" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          className="menuTemplate"
          defaultSelectedKeys={["4"]}
          items={[
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            UserOutlined,
          ].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }))}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "white" }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div className="divTemplate">{children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Curadoria de Filmes ©2023 Created by Yasmin Souza
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Template;
