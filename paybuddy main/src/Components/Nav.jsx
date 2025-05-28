import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

const navItems = [
  { name: 'Send Money', href: '/Sendmoney' }, // ← changed from "Dashboard"
  { name: 'Main menu', href: '/' }, // ← changed from "Dashboard"
  { name: 'Add Money', href: '/Addmoney' },
  { name: 'Travel Booking', href: '/Travel' },
];


export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('auth');
    navigate('/Login');
  };

  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-indigo-700 to-purple-700 shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  className="h-12 rounded transition-transform duration-300 hover:scale-110"
                  src=  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/904702166112871.6412b59bc06b0.jpg'
                  alt="Logo"
                />
                <span className="text-white text-lg font-semibold tracking-wide"></span>
              </div>

              <div className="hidden sm:flex space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href
                        ? 'bg-white/10 text-white font-semibold'
                        : 'text-white hover:bg-white/10 hover:text-white',
                      'rounded-md px-3 py-2 text-sm transition duration-200'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center space-x-3">
                <button className="text-white hover:text-indigo-200 transition">
                  <BellIcon className="h-5 w-5" />
                </button>

                <Menu as="div" className="relative">
                  <MenuButton className="focus:outline-none">
                    <img
                      className="h-8 w-8 rounded-full border border-white shadow transition-transform hover:scale-105 duration-300"
                      src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid&w=740"
                      alt="User"
                    />
                  </MenuButton>
                  <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/10 focus:outline-none">
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          to="/Profile"
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Profile
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <button
                          onClick={handleSignOut}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'w-full text-left px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>

              <div className="sm:hidden">
                <DisclosureButton className="text-white p-2">
                  {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="sm:hidden px-4 pb-3 pt-2 space-y-1">
            {navItems.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                className={classNames(
                  location.pathname === item.href
                    ? 'bg-white/10 text-white font-semibold'
                    : 'text-white hover:bg-white/10',
                  'block rounded-md px-3 py-2 text-base transition'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
