import React, { useState } from "react";
import { Button, Layout } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
import TopHeader from "../../components/TopHeader";
import { removeAllListeners } from "process";
import Home from "./home/Home";
import UserList from "./user-manage/UserList";
import RoleList from "./right-manage/RoleList";
import RightList from "./right-manage/RightList";
import NoPermission from "./noPermission/NoPermission";
import './NewsSanBox.scss'
const { Content } = Layout;
export default function NewsSanBox() {
  let [collapsed, setCollapsed] = useState(true);
  const toggle = (tag:boolean)=>{
    setCollapsed(collapsed=tag)
  }
  return (
    <Layout>
      <SideMenu collapsed={collapsed}></SideMenu>
      <Layout className="site-layout">
        <TopHeader collapsed={collapsed} toggle={toggle}></TopHeader>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/use-manage/list" component={UserList}></Route>
            <Route path="/right-manage/role/list" component={RoleList}></Route>
            <Route
              path="/right-manage/right/list"
              component={RightList}
            ></Route>
            <Redirect from="/" to="/home" exact></Redirect>
            <Route path="*" component={NoPermission} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}
