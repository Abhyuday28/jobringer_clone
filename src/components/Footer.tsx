import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
} from 'lucide-react';

const Footer = () => {
  const indiaJobs = [
    'Mumbai',
    'Delhi',
    'Ajmer',
    'Pune',
    'Hyderabad',
    'Agra',
    'Chennai',
    'Kolkata',
    'Indore',
    'Gurugram',
    'Jaipur',
    'Ahmedabad',
  ];
  const internationalJobs = [
    'Africa',
    'USA',
    'UK',
    'Australia',
    'Canada',
    'Singapore',
    'Dubai',
    'Saudi Arabia',
    'New Zealand',
  ];

  const stats = [
    { label: 'Jobs Posted', value: '40808' },
    { label: 'Jobs Filled', value: '15153' },
    { label: 'Employers', value: '25776' },
    { label: 'Active Users', value: '1554182' },
  ];

  const footerLinks = [
    'Terms and conditions',
    'Privacy Policy',
    'Refund / Cancellation Policy',
    'About Us',
    'Contact Us',
    'FAQ',
    'Blogs',
  ];

  const socialLinks = [
    { Icon: Facebook, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Linkedin, href: '#' },
    { Icon: Youtube, href: '#' },
    { Icon: MessageCircle, href: '#' },
  ];

  return (
    <footer>
      <div className="absolute inset-0"></div>
      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Jobs by Location */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 pt-8">
          <div className="p-8 bg-blue-50">
            <h3 className="text-xl font-bold text-black mb-4">JOBS IN INDIA</h3>
            <div className="flex flex-wrap gap-2">
              {indiaJobs.map((city) => (
                <a
                  key={city}
                  href="#"
                  className="text-gray-800 hover:text-blue-500 transition-colors"
                >
                  #{city}
                </a>
              ))}
            </div>
          </div>
          <div className="p-8 bg-blue-50">
            <h3 className="text-xl font-bold text-black mb-4">
              INTERNATIONAL JOBS
            </h3>
            <div className="flex flex-wrap gap-2">
              {internationalJobs.map((country) => (
                <a
                  key={country}
                  href="#"
                  className="text-gray-800 hover:text-blue-500 transition-colors"
                >
                  #{country}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-teal-700">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-yellow-500">
                {stat.value}
              </div>
              <div className="text-blue-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="py-6 text-sm text-gray-600">
          <p className="mb-4">
            <span className="font-semibold">Disclaimer:</span> All Trademarks
            and Logos are the property of their respective owners, depicted here
            purely for representation purpose. Jobringer.com has taken all
            reasonable steps to ensure that information on this site is genuine.
            Job Applicants are advised to evaluate independently. Jobringer.com
            shall not have any responsibility in this regard. All Jobseeker
            services are strictly designed & meant only for job search
            assistance and to maximize the chances for the jobseekers to get
            their dream job. All Job Seeker Credentials and Employment
            Opportunities are subject to individual merit & evaluation. We do
            not guarantee any job to any jobseeker.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-4 py-6 border-t border-teal-700">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Follow us on</span>
            <div className="flex gap-2">
              {socialLinks.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-black hover:bg-blue-600 transition"
                  style={{ color: '#FFffff' }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Recognized By */}
          <div className="flex items-center gap-2">
            <span className="text-black font-bold">Recognized By</span>
            <img
              src="/images/startupindia.png"
              alt="#startupindia"
              width="180"
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm py-4 border-t border-teal-700">
          {footerLinks.map((link, index) => (
            <React.Fragment key={link}>
              <a
                href="#"
                className="text-blue-800 hover:text-blue-500 transition-colors"
              >
                {link}
              </a>
              {index < footerLinks.length - 1 && (
                <span className="text-blue-500">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-black font-semibold pt-4 pb-4">
          © All Rights Reserved @ 2025 Jobtech Ventures Private Limited.
        </div>
      </div>
    </footer>
  );
};

export default Footer;