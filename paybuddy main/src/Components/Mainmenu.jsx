import {
  PaperAirplaneIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import Carousel from './Carousel';
import HoverCardGrid from './HoverCardGrid';
import Parallax from './Parallax';

const menuItems = [
  { name: 'Send Money', icon: PaperAirplaneIcon, href: '/' },
  { name: 'Add Money', icon: BanknotesIcon, href: '/Addmoney' },
  { name: 'Travel Booking', icon: BuildingLibraryIcon, href: '/Travel' },
  { name: 'Calendar', icon: CalendarDaysIcon, href: '/calendar' },
];

export default function MainMenu() {
  const location = useLocation();

  return (
    <div className='container-fluid mx-auto'>
      <Carousel className="container"/>
        <div className=''>

    <div className=" container-fluid mx-auto p-5 flex justify-center">
      {menuItems.map(({ name, icon: Icon, href }) => (
          <Link
          key={name}
          to={href}
          className={classNames(
              location.pathname === href
              ? 'bg-indigo-600 text-white '
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition duration-150 ease-in-out'
            )}
            >
          <Icon className="h-5 w-5" />
          {name}
        </Link>
      ))}

    </div>
      <HoverCardGrid />
      <div className='container-fluid relative'>
      <Parallax />
      </div>
      </div>
      </div>
  );
}
