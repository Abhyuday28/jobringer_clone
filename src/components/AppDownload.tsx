import React from 'react';
import { Smartphone, Star } from 'lucide-react';

const AppDownload = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-4">
              Download JobPortal App
            </h2>
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 text-yellow-400 fill-current"
                />
              ))}
              <span className="ml-2 text-white">4.5/5 Rating</span>
            </div>
            <p className="text-blue-100 mb-6">
              Search and apply for jobs on the go. Get instant notifications for
              your dream job!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-900 transition duration-300"
              >
                <img
                  src="/images/playstore.png"
                  alt="Play Store"
                  className="w-6 h-6 mr-3"
                />
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
              <a
                href="#"
                className="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-900 transition duration-300"
              >
                <img
                  src="/images/app-store.png"
                  alt="App Store"
                  className="w-6 h-6 mr-3"
                />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
              <img
                src="/images/adv.jpg"
                alt="JobPortal App"
                className="w-100 h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold transform rotate-12">
                Free!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
