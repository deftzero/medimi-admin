import { Layout, Input, Avatar, Dropdown, MenuProps, Select } from 'antd';
import Search from '../assets/icons/search.svg?react'
import { useTranslation } from 'react-i18next';
import Notification from '../assets/icons/notification-bing.svg?react'
const { Header } = Layout;

const headerStyles = {
  borderBottom: '1px solid #e2e8f0',
  padding: '15px 20px',
  background: '#FFFFFF'
}

export function AppHeader({ name = 'Jon Jones' }: { name?: string }) {


  const items: MenuProps['items'] = [
    {
      label: <a href="#">Settings</a>,
      key: '0',
    },
    {
      label: <a href="#">Profile</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: 'Logout',
      key: '3',
    },
  ];

  return (
    <Header style={headerStyles} className='flex justify-between sticky top-0'>
      <Input prefix={<Search />} className='bg-slate-50' placeholder='Search' style={{ maxWidth: '400px' }} />
      <div className='flex flex-row items-center gap-3'>
        <ToggleLanguage />
        <Notification />
        <Dropdown menu={{ items }} trigger={['click']}>
          <div className='flex flex-row leading-3 px-1 py-1 items-center gap-2 hover:cursor-pointer rounded-full bg-slate-200'>
            <Avatar>{name.split(' ')[0]?.charAt(0)}{name.split(' ')[1]?.charAt(0)}</Avatar>
            <span>{name}</span>
            <svg className="w-2.5 h-2.5 ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </div>
        </Dropdown>
      </div>
    </Header>
  )
}


function ToggleLanguage() {
  const { i18n } = useTranslation()

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    i18n.changeLanguage(value);
  };

  return (
    <Select
      defaultValue="EN"
      onChange={handleChange}
      style={{ width: 100 }}
      options={[{ value: 'en', label: 'EN' }, { value: 'fr', label: 'FR' }]}
    />
  )
}