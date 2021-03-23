import React, { Component } from "react";
import {Redirect} from 'react-router-dom'

//引入withRouter=>让普通组件拥有路由组件的方法
import { withRouter } from "react-router-dom";

import memenyUser from "../../utils/memenyUser.js";
import { saveUser } from "../../utils/localstore.js";

//引入login的css
import "./login.less";
//引入图片路径
import image from "./image/logo.png";
//引入ant的组件
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

//引入接口
import Api from "../../api/index";

//将From.Item替换
const Item = Form.Item;

class Login extends Component {
  onFinish = async (value) => {
    let _this = this;
    await Api.login({
      username: value.username,
      password: value.password,
    }).then((res) => {
      if (res.data.status === 0) {
        console.log(res);
        message.success({
          content: "登录成功",
          duration: 0.2,
          className: "custom-class",
          style: {
            marginTop: "20vh",
          },
          onClose() {
            //通过withRouter使用history
            memenyUser.user = res.data.data;
            saveUser(res.data.data);
            _this.props.history.replace("/");
          },
        });
      } else if (res.data.status === 1) {
        message.error({
          content: res.data.msg,
          duration: 0.2,
          className: "custom-class",
          style: {
            marginTop: "20vh",
          },
        });
      } else {
        message.error({
          content: "登录异常!请重新尝试登录",
          duration: 0.2,
          className: "custom-class",
          style: {
            marginTop: "20vh",
          },
        });
      }
    });
  };

  //自定义表单验证
  validator = (rule, value, callback) => {
    if (!value) {
      return Promise.reject("密码不能为空");
    } else if (value.length < 4) {
      return Promise.reject("密码长度不能小于4位");
    } else if (value.length > 12) {
      return Promise.reject("密码长度不能超过12位");
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      return Promise.reject("密码必须为数字,字母或者下划线");
    } else {
      return Promise.resolve();
    }
  };

  render() {
    const user = memenyUser.user
    if(user&&user._id){
      return <Redirect to='/'></Redirect>
    }
    return (
      <div className="login">
        <div className="header">
          <img src={image} alt="" />
          <h1>react项目: 后台管理系统</h1>
        </div>
        <div className="form">
          <h2>用户登录</h2>
          <Form onFinish={this.onFinish}>
            <Item
              name="username"
              rules={[
                { required: true, whitespace: false, message: "请输入用户名" },
                { min: 4, message: "用户名不能少于4位" },
                { max: 12, message: "用户名不能大于12位" },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: "用户名必须为英文,字母或者下划线,",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Item>
            <Item name="password" rules={[{ validator: this.validator }]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Item>
            <Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
