'use client'

import { ReactNode, useState } from 'react'
import { Flex, Layout, Menu, MenuProps, SiderProps } from 'antd'
import { DropboxOutlined, TeamOutlined, UserOutlined, DollarOutlined, PlusOutlined, OrderedListOutlined } from '@ant-design/icons'
import { isNil } from 'lodash'
import Link from 'next/link'

type MenuItem = Required<MenuProps>['items'][number]

function getItem (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } satisfies MenuItem
}

const { Header, Content, Sider, Footer } = Layout

const items: MenuItem[] = [
  getItem('Paquetes', 'primary-menu-paquetes', <DropboxOutlined />, [
    getItem(<Link href='/packages/register'>Registro</Link>, 'primary-menu-paquetes-registro', <PlusOutlined />),
    getItem(<Link href='/packages/list'>Ver Paquetes</Link>, 'primary-menu-paquetes-lista', <OrderedListOutlined />),
  ]),
  getItem('Clientes', 'primary-menu-clientes', <UserOutlined />),
  getItem('Pagos', 'primary-menu-pagos', <DollarOutlined />),
  getItem('Usuarios', 'primary-menu-usuarios', <TeamOutlined />),
]

type PrimaryWithDetailsLayout = {
  main: ReactNode
  details: ReactNode
  mainProps?: SiderProps
  detailsProps?: SiderProps
}

export const PrimaryWithDetailsLayout: React.FC<PrimaryWithDetailsLayout> = ({ main, details }) => {
  const [mainCollapsed, setMainCollapsed] = useState(false)
  const [detailsCollapsed, setDetailsCollapsed] = useState(isNil(details))
  return (
    <Flex style={{ height: '100%' }}>
      <Layout>
        <Sider
          collapsible
          collapsed={mainCollapsed}
          onCollapse={(value) => setMainCollapsed(value)}
        >
          <Menu
            theme='dark'
            // defaultSelectedKeys={['1']}
            mode='inline'
            items={items}
          />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>{main}</Content>
          <Footer>Footer</Footer>
        </Layout>
        <Sider
          collapsed={detailsCollapsed}
          onCollapse={(value) => setDetailsCollapsed(value)}
          collapsedWidth={0}
        >{details}
        </Sider>
      </Layout>
    </Flex>
  )
}