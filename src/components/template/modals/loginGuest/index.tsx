import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Space } from "antd";
import { useAppDispatch } from "src/redux/hooks";
import {
  setModalGuest,
  setNameGuest,
} from "src/redux/slices/authenticateSlice";
import { guestSession } from "src/services/loginService";

const LoginGuest = () => {
  //Estados Locais
  const [form] = Form.useForm();

  //Hooks
  const dispatch = useAppDispatch();

  const submit = async (value: any) => {
    await dispatch(setNameGuest(value.nomeGuest));
    await dispatch(guestSession());
    dispatch(setModalGuest(false));
  };
  return (
    <Form form={form} layout="vertical" onFinish={submit}>
      <Row gutter={[24, 24]}>
        <Form.Item
          label="Nome temporário"
          name="nomeGuest"
          rules={[
            {
              required: true,
              message: "Digite um nome temporário",
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Space size="middle">
            <Button
              className="cancelButton"
              onClick={() => dispatch(setModalGuest(false))}
              icon={<CloseOutlined />}
            >
              FECHAR
            </Button>
            <Button
              htmlType="submit"
              icon={<CheckOutlined />}
              className="buttonPrimary"
            >
              SALVAR
            </Button>
          </Space>
        </Col>
      </Row>
    </Form>
  );
};
export default LoginGuest;
