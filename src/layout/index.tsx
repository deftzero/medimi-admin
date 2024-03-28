import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from 'antd';
import { Sidebar } from './Sidebar';
import { AppHeader } from './Header';

const { Content, Footer } = Layout;

export default function AppLayout() {

  const { t } = useTranslation();

  return (
    <Layout hasSider>
      <Sidebar />
      <Layout style={{ marginLeft: 215 }}>
        <AppHeader />
        <Content style={{ margin: '24px 24px 0', overflow: 'initial' }}>
          <div
            className='p-12 bg-white rounded-md text-center'
          >
            <p>long content</p>
            <p>{t('title', { name: 'John' })}</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
              ))
            }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};