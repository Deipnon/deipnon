// @flow
import React, { useContext } from 'react';
import { Icon, Layout } from 'antd'

import { SideMenuContext } from '../../views/Layout'

import './style.less'

const { Header } = Layout

const HeaderBar = () => {
  const { toggleSideMenu, isCollapsed } = useContext(SideMenuContext)

  return (
    <Header className="bg-warning">
      <div className="list-unstyled list-inline">
        <a className="list-inline-item d-none d-md-inline-block">
        <Icon
          className="trigger list-icon"
          onClick={toggleSideMenu}
          type={isCollapsed ? 'menu-unfold' : 'menu-fold'}
        />
        </a>
      </div>
    </Header>
  )
}

export default HeaderBar;
