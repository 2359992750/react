import React, { Component } from "react";
import { Link,withRouter } from "react-router-dom";
import { Menu } from "antd";
import "./slider.less";
import {
  AppstoreOutlined,
  WindowsOutlined,
  BarChartOutlined,
  PieChartOutlined,
  LineChartOutlined,
  UnorderedListOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import logo from "../../pages/login/image/logo.png";
const { SubMenu } = Menu;

class Slider extends Component {
  render() {
    var path = this.props.location.pathname
    return (
      <div className="slider">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
          <span>react 后台</span>
        </Link>
        <Menu mode="inline" theme="dark" selectedKeys={[path]}>
          <Menu.Item key='/home' icon={<PieChartOutlined />}>
            <Link to="/home">首页</Link>
          </Menu.Item>
          <SubMenu icon={<WindowsOutlined />} title="商品">
            <Menu.Item key='/category'>
              <Link to="/category">
                <UnorderedListOutlined />
                <span>品类管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key='/product'>
              <Link to="/product">
                <ToolOutlined />
                <span>商品管理</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key='/user' icon={<PieChartOutlined />}>
            <Link to="/user">用户管理</Link>
          </Menu.Item>
          <Menu.Item key='/role' icon={<PieChartOutlined />}>
            <Link to="/role">角色管理</Link>
          </Menu.Item>
          <SubMenu icon={<AppstoreOutlined />} title="图形图表">
            <Menu.Item key='/echarts/bar'>
              <Link to="/echarts/bar">
                <BarChartOutlined />
                <span>柱形图</span>
              </Link>
            </Menu.Item>
            <Menu.Item key='/echarts/line'>
              <Link to="/echarts/line">
                <LineChartOutlined />
                <span>折线图</span>
              </Link>
            </Menu.Item>
            <Menu.Item key='/echarts/pie'>
              <Link to="/echarts/pie">
                <PieChartOutlined />
                <span>饼图</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key='/order' icon={<PieChartOutlined />}>
            <Link to="/order">订单管理</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default  withRouter(Slider);
