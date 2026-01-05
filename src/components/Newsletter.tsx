import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    // Handle newsletter subscription logic here
    setEmail('');
  };

  return (
    <div className="flex justify-center bg-primary/5 dark:bg-slate-900 py-16 px-4 md:px-40">
      <div className="layout-content-container flex flex-col md:flex-row items-center justify-between max-w-[960px] flex-1 gap-8">
        <div className="flex flex-col gap-2 max-w-[480px]">
          <h3 className="text-slate-900 dark:text-white text-2xl font-bold">Subscribe for Travel Tips</h3>
          <p className="text-slate-600 dark:text-slate-400">Get the latest travel deals and inspiration sent directly to your inbox.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-3 flex-col sm:flex-row">
          <input 
            className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2 text-slate-900 dark:text-white outline-none focus:border-primary min-w-[280px]" 
            placeholder="Your email address" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="submit"
            className="bg-primary hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
