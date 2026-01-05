import React from 'react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: 'Best Price Guarantee',
      description: 'We match any competitor\'s price so you get the best deal for your adventure.',
      icon: 'local_offer'
    },
    {
      id: 2,
      title: '24/7 Support',
      description: 'Our dedicated team is here to help you anytime, anywhere in the world.',
      icon: 'support_agent'
    },
    {
      id: 3,
      title: 'Hand-picked Tours',
      description: 'Curated experiences just for you, ensuring quality and unforgettable memories.',
      icon: 'verified'
    }
  ];

  return (
    <div className="flex justify-center bg-slate-50 dark:bg-slate-900/50 py-12 px-4 md:px-40 border-y border-slate-100 dark:border-slate-800">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-col gap-10 px-4 @container">
          <div className="flex flex-col gap-4 text-center items-center">
            <h2 className="text-slate-900 dark:text-white tracking-light text-3xl md:text-4xl font-black leading-tight">
              Why Choose Us
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal max-w-[600px]">
              We make your travel experience seamless and unforgettable with services designed for the modern explorer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-1 gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 flex-col items-center text-center shadow-sm">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full text-primary">
                  <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">{feature.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
