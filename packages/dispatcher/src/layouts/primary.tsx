'use client'

import { PropsWithChildren, useState } from 'react'
import { Flex, Layout, Menu, MenuProps } from 'antd'
import { DropboxOutlined, TeamOutlined, UserOutlined, DollarOutlined, PlusOutlined, OrderedListOutlined } from '@ant-design/icons'
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

export const PrimaryLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Flex style={{ height: '100%' }}>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
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
          <Content>{children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Flex>
  )
}
