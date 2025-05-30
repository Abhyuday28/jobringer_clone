import { useState } from 'react';
import { Bell, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="https://www.jobringer.com/images/logonew.svg"
                alt="jobRinger"
                width="180"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <a
              href="#"
              className="text-sm lg:text-base text-gray-700 hover:text-blue-600 transition font-medium whitespace-nowrap"
            >
              My Dashboard
            </a>
            <a
              href="#"
              className="text-sm lg:text-base text-gray-700 hover:text-blue-600 transition font-medium whitespace-nowrap"
            >
              Jobs
            </a>
            <a
              href="#"
              className="text-sm lg:text-base text-gray-700 hover:text-blue-600 transition font-medium whitespace-nowrap"
            >
              Jobseeker Services
            </a>
            <a
              href="#"
              className="text-sm lg:text-base text-gray-700 hover:text-blue-600 transition font-medium whitespace-nowrap"
            >
              Subscription
            </a>
          </nav>

          {/* Right Side Items */}
          <div className="flex items-center">
            <button className="p-1 rounded-full text-gray-600 hover:text-blue-600 transition">
              <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button className="hidden md:flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-full ml-4">
              <User className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600" />
              <div className="text-xs lg:text-sm font-medium">Hello User</div>
              <div className="text-xs text-gray-500">▼</div>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 ml-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              My Dashboard
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              Jobs
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              Jobseeker Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              Subscription
            </a>
            <button className="flex items-center px-3 py-2 bg-blue-100 hover:bg-blue-600 text-grey-700 hover:text-white transition duration-200 m-2 rounded-full">
              <User className="h-5 w-5 " />
              <div className="ml-2 text-sm font-medium">Hello User</div>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
