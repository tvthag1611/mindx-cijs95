import { Button, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";
import { WindowsOutlined } from "@ant-design/icons";

const LayoutPage = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    navigate("/login", { replace: true });
  };

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <WindowsOutlined style={{ fontSize: 40, color: "white" }} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={[
            {
              label: "Home",
              key: "1",
              onClick: () => navigate("/"),
            },
            {
              label: "About",
              key: "2",
              onClick: () => navigate("/about"),
            },
          ]}
          style={{ flex: 1, minWidth: 0, gap: 10, marginLeft: 20 }}
        />
        <Button onClick={logout}>Log out</Button>
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Layout>
          <Sider width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              items={[
                {
                  label: "123",
                },
              ]}
            />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default LayoutPage;
