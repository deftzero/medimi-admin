import { Layout, Button, Input, Divider, Avatar, Dropdown } from 'antd';
import Search from '../assets/icons/search.svg?react'
import Notification from '../assets/icons/notification-bing.svg?react'
const { Header } = Layout;

export function AppHeader({ name = 'Jon Jones', items = [] }: { name: string, items: [] }) {

  return (
    <Header style={{ padding: '15px 20px', background: '#FFFFFF' }} className='flex justify-between'>
      <Input prefix={<Search />} className='bg-slate-50' placeholder='Search' style={{ maxWidth: '400px' }} />
      <div className='flex flex-row items-center gap-3'>
        <Notification />
        <Dropdown menu={{ items }} trigger={['click']}>
          <div className='flex flex-row leading-3 px-2 py-1 items-center gap-2 hover:cursor-pointer rounded-full bg-[#f7e6e6]'>
            <Avatar>{name.split(' ')[0]?.charAt(0)}{name.split(' ')[1]?.charAt(0)}</Avatar>
            <span>{name}</span>
          </div>
        </Dropdown>
      </div>
    </Header>
  )
}
