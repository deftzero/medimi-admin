import { Layout } from 'antd';
import Logo from '../assets/medimi-logo-colors.png'
import { Link } from 'react-router-dom';
import Dashboard from '../assets/icons/dashboard.svg?react'
import MedicalAccounts from '../assets/icons/medical-accounts.svg?react'
import Countries from '../assets/icons/countries.svg?react'
import Patients from '../assets/icons/patient.svg?react'
import Incomes from '../assets/icons/income-1.svg?react'
import RemoteRevenue from '../assets/icons/remote-revenue.svg?react'
import Users from '../assets/icons/users.svg?react'

const { Sider } = Layout;

const siderStyle: any = {
  backgroundColor: '#FCFCFC',
  borderRight: '1px solid #e2e8f0',
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0
};

export interface ISidebarLink {
  key: number
  title: string;
  href: string;
  icon?: any;
}

const sidebarItems: ISidebarLink[] = [
  {
    key: 1,
    icon: Dashboard,
    title: 'Dashboard',
    href: "/dashboard"
  },
  {
    key: 2,
    icon: MedicalAccounts,
    title: 'Medical Accounts',
    href: "/accounts"
  },
  {
    key: 3,
    icon: Countries,
    title: 'Countries',
    href: "/journal-voucher"
  },
  {
    key: 4,
    icon: Patients,
    title: 'Patients',
    href: "/general-ledger"
  },
  {
    key: 5,
    icon: Incomes,
    title: 'Incomes',
    href: "/general-ledger"
  },
  {
    key: 6,
    icon: RemoteRevenue,
    title: 'Remote Revenue',
    href: "/general-ledger"
  },
  {
    key: 4,
    icon: Users,
    title: 'Users',
    href: "/general-ledger"
  },
]

export function Sidebar() {
  return (
    <Sider style={siderStyle} width={225}>
      <div className='flex justify-center w-full mt-5'>
        <img src={Logo} className='h-20' />
      </div>
      <ul className="list-none space-y-1 px-5 mt-5">
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
  active = false,
}: {
  link: ISidebarLink;
  active?: boolean;
}) => {

  const activeIconColor = '#f1f5f9'
  const iconColor = '#64748b'

  return (
    <Link
      to={link.href}
      className={`group transition-colors p-3 inline-block hover:bg-popover text-xs hover:shadow rounded-md w-full${active ? " font-semibold bg-primary text-slate-100 hover:bg-primary hover:text-slate-100" : " text-slate-500 hover:text-slate-500"
        }`}
    >
      <div className="flex items-center space-x-2">
        <link.icon fill={active ? activeIconColor : iconColor } />
        <span>{link.title}</span>
      </div>
    </Link>
  );
};