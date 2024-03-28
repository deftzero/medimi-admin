import { Layout } from 'antd';
import Logo from '../assets/medimi-logo-colors.png'
import { Link, useLocation } from 'react-router-dom';
import Dashboard from '../assets/icons/dashboard.svg?react'
import MedicalAccounts from '../assets/icons/medical-accounts.svg?react'
import Countries from '../assets/icons/countries.svg?react'
import Patients from '../assets/icons/patient.svg?react'
import Incomes from '../assets/icons/income-1.svg?react'
import RemoteRevenue from '../assets/icons/remote-revenue.svg?react'
import Users from '../assets/icons/users.svg?react'
import { useTranslation } from 'react-i18next';

const { Sider } = Layout;

const siderStyle: any = {
  backgroundColor: '#FCFCFC',
  borderRight: '1px solid #e2e8f0',
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  zIndex: 2
};

export interface ISidebarLink {
  key: number
  title: string;
  href: string;
  icon?: any;
}


export function Sidebar() {
  const { t } = useTranslation();

  const sidebarItems: ISidebarLink[] = [
    {
      key: 1,
      icon: Dashboard,
      title: t('NAVIGATION.DASHBOARD'),
      href: "/dashboard"
    },
    {
      key: 2,
      icon: MedicalAccounts,
      title: 'Medical Accounts',
      href: "/medical-accounts"
    },
    {
      key: 3,
      icon: Countries,
      title: 'Countries',
      href: "/countries"
    },
    {
      key: 4,
      icon: Patients,
      title: 'Patients',
      href: "/patients"
    },
    {
      key: 5,
      icon: Incomes,
      title: 'Incomes',
      href: "/incomes"
    },
    {
      key: 6,
      icon: RemoteRevenue,
      title: 'Remote Revenue',
      href: "/remote-revenue"
    },
    {
      key: 4,
      icon: Users,
      title: 'Users',
      href: "/users"
    },
  ]
  
  return (
    <Sider style={siderStyle} width={225}>
      <div className='flex justify-center w-full mt-5'>
        <img src={Logo} className='h-16' />
      </div>
      <ul className="list-none space-y-2 px-3 mt-8">
        {sidebarItems.map((link: any) =>
          <li key={link.title}>
            <SidebarLink link={link} />
          </li>
        )}
      </ul>
    </Sider>
  )
}

const SidebarLink = ({
  link,
}: {
  link: ISidebarLink;
}) => {

  const activeIconColor = '#f1f5f9'
  const iconColor = '#64748b'

  const location = useLocation()

  return (
    <Link
      to={link.href}
      className={`group transition-colors py-2.5 pl-5 inline-block hover:bg-popover text-xs hover:shadow rounded-md w-full${location.pathname.includes(link.href) ? " font-semibold bg-primary text-slate-100 hover:bg-primary hover:text-slate-100" : " text-slate-500 hover:text-slate-500"
        }`}
    >
      <div className="flex items-center space-x-2">
        <link.icon fill={location.pathname.includes(link.href) ? activeIconColor : iconColor } />
        <span>{link.title}</span>
      </div>
    </Link>
  );
};