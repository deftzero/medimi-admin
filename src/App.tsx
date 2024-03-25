import { ConfigProvider, Typography } from 'antd'
import './App.css'
import { theme } from './config/theme'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

export default function App() {

  return (
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}
