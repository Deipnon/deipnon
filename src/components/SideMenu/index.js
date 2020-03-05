// @flow

import React, { useContext, useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import { ChromeOutlined, ShopOutlined, ShoppingOutlined, HistoryOutlined, ReadOutlined, SettingOutlined } from '@ant-design/icons'
import { withRouter } from 'react-router-dom'

import { SideMenuContext } from '../../views/Layout'

import './style.less'

const { Sider } = Layout

const SideMenu = ({ history, location }) => {

  const { isCollapsed } = useContext(SideMenuContext)
  const [defaultSelectedKey, setDefaultSelectedKey] = useState()

  useEffect(() => {
    setDefaultSelectedKey([location.pathname])
  }, [location.pathname, setDefaultSelectedKey])

  const handleMenuClick = ({ key }) => {
    history.push(key)
  }

  return (
    <Sider trigger={null} collapsible collapsed={isCollapsed}>
      <section className="sidenav-header bg-warning" style={{ height: '60px' }}>
        <ChromeOutlined  className="logo-img" />
        <span className="brand">Deipnon</span>
      </section>
      <Menu onClick={handleMenuClick} theme="dark" selectedKeys={defaultSelectedKey}>
        <Menu.Item key="/">
          <ShopOutlined type="shop" />
          <span>Home</span>
        </Menu.Item>
        <Menu.Item key="2">
          <ShoppingOutlined type="shopping" />
          <span>Orders</span>
        </Menu.Item>
        <Menu.Item key="3">
          <HistoryOutlined type="history" />
          <span>Kitchen</span>
        </Menu.Item>
        <Menu.Item key="/menu">
          <ReadOutlined type="read" />
          <span>Menu</span>
        </Menu.Item>
        <Menu.Item key="/settings/restaurant">
          <SettingOutlined type="setting" />
          <span>Settings</span>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default withRouter(SideMenu)
