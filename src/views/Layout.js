// @flow
import * as React from 'react';
import { Layout } from 'antd';
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag';

import SideMenu from '../components/SideMenu'
import Header from '../components/Header'

import { useSideMenu } from '../hooks'

import { getRestaurant } from '../graphql/queries';

const ID = "f9377751-c632-4460-b983-1b00bb03610f"

// $FlowFixMe
export const RestaurantContext = React.createContext({});
// $FlowFixMe
export const SideMenuContext = React.createContext()

type PropsType = {|
  children: React.Node  
|}

export default ({ children }: PropsType) => {
  
  const sideMenu = useSideMenu()

  const { loading, data } = useQuery(gql(getRestaurant), {
    variables: {
      id: ID
    }
  });

  if (loading)
    return <div>Loading....</div>

  return (
    <RestaurantContext.Provider value={data.getRestaurant}>
      <SideMenuContext.Provider value={sideMenu}>
        <Layout style={{ height: '100vh' }}>
          <SideMenu />
          <Layout>
            <Header />
            <Layout.Content style={{ padding: '16px' }}>
              {children}
            </Layout.Content>
          </Layout>
        </Layout>
      </SideMenuContext.Provider>
    </RestaurantContext.Provider>
  )
};
