import { ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Layout.Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          float: "left",
          width: 120,
          height: 31,
          margin: "16px 24px 16px 0",
          background: "rgba(255, 255, 255, 0.2)",
        }}
      />
      <Input.Search
        placeholder="Search"
        onSearch={(value) => console.log(value)}
        enterButton
        style={{ marginRight: "15px", width: "70%" }}
      />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item
          onClick={() => navigate("/login")}
          icon={<UserOutlined style={{ fontSize: "22px" }} />}
        >
          Login
        </Menu.Item>
        <Menu.Item
          onClick={() => navigate("/register")}
          icon={<UserOutlined style={{ fontSize: "22px" }} />}
        >
          Register
        </Menu.Item>
        <Menu.Item
          icon={<ShoppingOutlined style={{ fontSize: "22px" }} />}
        ></Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
