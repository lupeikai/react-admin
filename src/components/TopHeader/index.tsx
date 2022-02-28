import React from 'react'
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header} = Layout;

interface IProps{
  collapsed:boolean,
  toggle:(tag:boolean)=>void
}
export default function TopHeader(props:IProps) {
  const {collapsed,toggle} = props
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
    {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
      className: 'trigger',
      onClick: this.toggle,
    })} */}
    {collapsed?<MenuUnfoldOutlined onClick={()=>toggle(false)}/>:<MenuFoldOutlined  onClick={()=>toggle(true)}/>}
  </Header>
  )
}
