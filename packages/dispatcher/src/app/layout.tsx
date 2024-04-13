'use client'

import React from 'react'
import { AntdRegistry } from '@ant-design/nextjs-registry'
// import { ApolloProvider } from '@apollo/client';
// import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
// import { client } from '@/app/apollo/client'
import { ConfigProvider, theme } from 'antd'
import { AuthContextProvider } from '~/components/context/AuthContext'

/* if (process.env.NODE_ENV !== 'production') {
  loadDevMessages();
  loadErrorMessages();
} */

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang='en'>
    <body style={{ height: '100dvh', width: '100dvw' }}>
      {/* <ApolloProvider client={client}> */}
      <AntdRegistry>
        <ConfigProvider
          theme={{
            // hashed: false,
            // 1. Use dark algorithm
            // algorithm: theme.darkAlgorithm,

            // 2. Combine dark algorithm and compact algorithm
            // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
          }}
        >
          <AuthContextProvider>{children}</AuthContextProvider>
        </ConfigProvider>
      </AntdRegistry>
      {/* </ApolloProvider> */}
    </body>
  </html>
)

export default RootLayout
