import { theme, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Logo from "../../utils/images/logoCornPng.png";
import LogoHeader from "../../utils/images/logoheaderPng.png";
import { Header, Content, Footer } from "antd/es/layout/layout";
import React from "react";
import "./style/index.scss";

const Template = ({ children }: any) => {
  return (
    <Layout className="layoutTemplate">
      <Layout
        style={{
          overflow: "auto",
        }}
      >
        <Header className="headerTemplate">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={LogoHeader} alt="oi" className="imageLogoHeader" />
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            className="menuTemplate"
            defaultSelectedKeys={["2"]}
            items={new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          />
        </Header>
        <Content className="contentMain">{children}</Content>
        <Footer
          style={{
            backgroundColor: "white",
            padding: 0,
          }}
        >
          Curadoria de Filmes ©2023 Created by Yasmin Souza
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Template;
