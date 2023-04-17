import { Layout, Menu, Input } from 'antd';

const HeaderComponent = () => {
  return (
    <Layout.Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
      <div
        style={{
          float: 'left',
          width: 120,
          height: 31,
          margin: '16px 24px 16px 0',
          background: 'rgba(255, 255, 255, 0.2)',
        }}
      />
      <Input.Search placeholder="Tìm kiếm..." onSearch={(value) => console.log(value)} enterButton />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Login</Menu.Item>
        <Menu.Item key="2">Register</Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default HeaderComponent;
