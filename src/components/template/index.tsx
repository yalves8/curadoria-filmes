import { Button, Layout, Menu, MenuProps, Modal, Typography } from "antd";

import LogoHeader from "../../utils/images/logoCornPng.png";
import { Header, Content, Footer } from "antd/es/layout/layout";
import "./style/index.scss";
import { DashboardOutlined, SaveOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { resetGuest, setModalGuest } from "src/redux/slices/authenticateSlice";
import LoginGuest from "./modals/loginGuest";
import { deletarSessao } from "src/services/loginService";

const Template = ({ children }: any) => {
  //Estados Globais
  const authenticateState = useAppSelector((state: any) => state.authenticate);

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

  const sairSessao = async () => {
    await dispatch(resetGuest());
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
            <img src={LogoHeader} alt="oi" className="imageLogo" />
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            className="menuTemplate"
            defaultSelectedKeys={["1"]}
            items={items}
          />

          {authenticateState.nameGuest === "" ? (
            <div
              className="divButtonSession"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Button
                //style={{ height: }}
                onClick={() => dispatch(setModalGuest(true))}
              >
                Criar Sessao Convidado
              </Button>
            </div>
          ) : (
            <div className="divGuest">
              <Typography.Title level={4} className="titleGuest">
                Olá {authenticateState.nameGuest}!
              </Typography.Title>
              <Button
                //style={{ height: }}
                onClick={sairSessao}
              >
                Sair da sessão
              </Button>
            </div>
          )}
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
      <Modal
        title={"NOME CONVIDADO"}
        centered
        width={600}
        open={authenticateState.modalGuest}
        onCancel={() => dispatch(setModalGuest(false))}
        footer={null}
      >
        <LoginGuest />
      </Modal>
    </Layout>
  );
};

export default Template;
