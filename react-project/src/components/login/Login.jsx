import { Button, Card, Form, Input, Row, Typography, message } from "antd";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (values) => {
    if (values.username === "admin" && values.password === "admin") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", true);
      message.success("Đăng nhập thành công");
      navigate("/", { replace: true });
    }
  };

  return (
    <Row justify="center">
      <Card className="login">
        <Typography.Title>Login</Typography.Title>
        <Form layout="vertical" onFinish={handleLogin}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};

export default Login;
