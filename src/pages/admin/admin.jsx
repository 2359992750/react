import React, { Component } from "react";
import memenyUser from "../../utils/memenyUser.js";
import { Redirect,Route,Switch } from "react-router-dom";
import { Layout } from "antd";

//引入自定义组件
import Header from "../../components/Header/header";
import Slider from "../../components/Slider/slider";
import Home from '../home/home'
import Category from '../category/category'
import Bar from '../echarts/Bar'
import Line from '../echarts/line'
import Pie from '../echarts/pie'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Order from '../order/order'

const { Footer, Sider, Content } = Layout;

export default class Admin extends Component {
  render() {
    const user = memenyUser.user;
    if (!user || !user._id) {
      return <Redirect to="/login"></Redirect>;
    }
    return (
      <Layout style={{ height: "100%" }}>
        <Sider>
          <Slider />
        </Sider>
        <Layout>
          <Header></Header>
          <Content>
            <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/category' component={Category}/>
              <Route path='/role' component={Role}/>
              <Route path='/user' component={User}/>
              <Route path='/product' component={Product}/>
              <Route path='/echarts/bar' component={Bar}/>
              <Route path='/echarts/line' component={Line}/>
              <Route path='/echarts/pie' component={Pie}/>
              <Route path='/order' component={Order}/>
              <Redirect to='/home'/>
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
