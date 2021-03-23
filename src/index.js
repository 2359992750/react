import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "antd/dist/antd.css";

//在入口文件中获取用户信息判断是否登录
import memenyUser from "./utils/memenyUser";
import { getUser } from "./utils/localstore";
memenyUser.user = getUser();

ReactDom.render(<App />, document.getElementById("root"));
