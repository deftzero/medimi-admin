import { Layout } from 'antd';
import { Sidebar } from './Sidebar';
import { AppHeader } from './Header';

const { Content } = Layout;

const contentStyles = {
  minHeight: '85dvh',
  lineHeight: '120px',
  margin: '24px 24px',
  overflow: 'initial'
}

export default function AppLayout({ children }: { children: any }) {

  return (
    <Layout hasSider>
      <Sidebar />
      <Layout style={{ marginLeft: 215 }}>
        <AppHeader />
        <Content style={contentStyles}>
          <div className='p-12 bg-white rounded-md text-center h-full'>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};