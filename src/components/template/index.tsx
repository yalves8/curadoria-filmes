import { Button, Layout, Menu, MenuProps } from "antd";

import LogoHeader from "../../utils/images/logoheaderPng.png";
import { Header, Content, Footer } from "antd/es/layout/layout";
import "./style/index.scss";
import { DashboardOutlined, SaveOutlined } from "@ant-design/icons";
import { useAppDispatch } from "src/redux/hooks";
import { validateWithLogin } from "src/services/loginService";

const Template = ({ children }: any) => {
  const items: MenuProps["items"] = [
    {
      label: "Página inicial",
      key: "1",
      icon: <DashboardOutlined />,
    },
    {
      label: "Meus filmes",
      key: "2",
      icon: <SaveOutlined />,
    },
  ];

  //Hooks
  const dispatch = useAppDispatch();

  const sessao = async () => {
    await dispatch(
      validateWithLogin({ username: "yasminsouza", password: "Bing@min8" })
    );
  };
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
            defaultSelectedKeys={["1"]}
            items={items}
          />
          <Button onClick={sessao}>Criar Sessao Convidado</Button>
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
