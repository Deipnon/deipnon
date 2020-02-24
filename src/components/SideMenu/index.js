// @flow

import React, { useContext, useEffect, useState } from 'react'
import { Icon, Layout, Menu } from 'antd'
import { withRouter } from 'react-router-dom'

import { SideMenuContext } from '../../views/Layout'

import './style.less'

const { Sider } = Layout

const SideMenu = ({history, location}) => {

  const { isCollapsed } = useContext(SideMenuContext)
  const [ defaultSelectedKey, setDefaultSelectedKey ] = useState()
  
  useEffect(() => {
    setDefaultSelectedKey([location.pathname])
  }, [location.pathname, setDefaultSelectedKey])
  
  const handleMenuClick = ({key}) => {
    history.push(key)
  }

  return (
    <Sider trigger={null} collapsible collapsed={isCollapsed}>
      <section className="sidenav-header bg-warning" style={{height: '60px'}}>
        <Icon type="chrome" className="logo-img"/>
        <a className="brand">Deipnon</a>
      </section>
      <Menu onClick={handleMenuClick} theme="dark" selectedKeys={defaultSelectedKey}>
        <Menu.Item key="/">
          <Icon type="shop" />
          <span>Home</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="shopping" />
          <span>Orders</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="history" />
          <span>Kitchen</span>
        </Menu.Item>
        <Menu.Item key="/menu">
          <Icon type="read" />
          <span>Menu</span>
        </Menu.Item>
        <Menu.Item key="/settings/restaurant">
          <Icon type="setting" />
          <span>Settings</span>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default withRouter(SideMenu)
