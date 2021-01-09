import { memo, useState } from 'react';
import Layout from 'app/components/Layout';
import Menu from 'app/components/Menu';
import { Link } from 'react-router-dom';
import { UserOutlined, CalculatorOutlined } from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;
const MenuItemSider = [
  {
    key: '1',
    title: 'User list',
    path: '/admin/user',
    icon: <UserOutlined />,
  },
  {
    key: '2',
    title: 'Game list',
    path: '/admin/game',
    icon: <CalculatorOutlined />,
  },
];
export const StyledSider = memo(() => {
  const [collapsed, setCollapsed] = useState(true);
  const onCollapse = collapse => {
    setCollapsed(collapse);
  };
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        trigger={null}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {/* {MenuItemSider.map(item => {
            const check = Object.keys(item);
            if (!check.includes('subMenu')) {
              return (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
              );
            } else {
              return (
                <SubMenu key={item.key} title="title">
                  {item.subMenu.map(sub => (
                    <Menu.Item key={sub.key}>{sub.title}</Menu.Item>
                  ))}
                </SubMenu>
              );
            }
          })} */}
          {MenuItemSider.map(item => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.path}>{item.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </>
  );
});
export default StyledSider;
