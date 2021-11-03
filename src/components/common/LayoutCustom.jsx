import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import "./css/layout.css";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export const LayoutCustom = (props) => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/student">Student</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/course">Course</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background">
          <Sider className="site-layout-background-sider">
            <Menu mode="inline" className="menu">
              <SubMenu key="sub1" className="sub-menu" title="Student">
                <Menu.Item key="1">
                  <Link to="/student">Student</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" className="sub-menu" title="Course">
                <Menu.Item key="2">
                  <Link to="/course">Course</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" className="sub-menu" title="Department">
                <Menu.Item key="3">
                  <Link to="/department">Department</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" className="sub-menu" title="Subject">
                <Menu.Item key="4">
                  <Link to="/subject">Subject</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content className="main-content">
            {props.children}
          </Content>
        </Layout>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
