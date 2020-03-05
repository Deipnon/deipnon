/* eslint-disable jsx-a11y/anchor-is-valid */
// @flow
import React, { useContext } from 'react';
import { Layout } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import { SideMenuContext } from '../../views/Layout'

import './style.less'

const { Header } = Layout

const HeaderBar = () => {
  const { toggleSideMenu, isCollapsed } = useContext(SideMenuContext)

  return (
    <Header className="bg-warning">
      <div className="list-unstyled list-inline">
        <a className="list-inline-item d-none d-md-inline-block">
          { isCollapsed ?
            <MenuFoldOutlined className="trigger list-icon" onClick={toggleSideMenu}/>:
            <MenuUnfoldOutlined className="trigger list-icon" onClick={toggleSideMenu}/>}
        </a>
      </div>
    </Header>
  )
}

export default HeaderBar;
