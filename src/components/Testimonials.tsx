import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  content: string;
  rating: number;
  imageUrl: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      location: 'Traveled to Bali',
      content: 'The trip to Bali was absolutely magical. Everything was organized perfectly, from the hotels to the tours. I didn\'t have to worry about a thing!',
      rating: 5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZdYj_cY6l5VetWr1ZH4E5NR_Mt-nvhOwsAxTpEYE5Vvk1uXctuBgHq1oWdfSWMcdUwBgO5kgMZH6ejRxWoeaYz69ZQH1XI-IWEYh8rHDM_dOSLPWan7IuXCL9XSMAyswEgtXM5IyO10mCgN4ORlN7YDawXaoafX_A0LFhZZ1HnW07or74KpZiCmM6uwOvDzqBr-ziI1NTuFem-SSUTib2qvYGSlRkr9hy5WspyIcAYKbn_1rMGFLXvnmW2IWpfYOsLKpDE7pMFvA'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Traveled to Japan',
      content: 'TravelCo helped us find hidden gems in Kyoto we would never have found on our own. The local guides were knowledgeable and friendly.',
      rating: 4.5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1t-T4OCoC9Tkc2BvHPuyUh9VmjGg-tLNykBdqp7pORucVsbbrNywBn1Smssbtb2-inHsGu54YrDOV89u60QI0jI8lEUFN65sDrdlyDeJrMKsW1LADob0cfB8Lw4b7OhNlFBgL4IvuV17Z-yE4WWzdIUy5O6c1jKyR6r2RRdo9Rjcgz_zDnRkPUrwQRJ09FMEMS9FbcuMov2tNN-FaRbR6jUjq9OSO1GYIAOwxkxcMZ_3Jt9uCqKJqdheLaCdHR3tZpGsalxA3KEw'
    }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-2 text-amber-400">
        {[...Array(fullStars)].map((_, index) => (
          <span key={index} className="material-symbols-outlined text-xl">star</span>
        ))}
        {hasHalfStar && <span className="material-symbols-outlined text-xl">star_half</span>}
      </div>
    );
  };

  return (
    <div className="flex justify-center bg-white dark:bg-background-dark py-16 px-4 md:px-40">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight text-center mb-10">What Our Travelers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col gap-4 p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
              {renderStars(testimonial.rating)}
              <p className="text-slate-700 dark:text-slate-300 text-base italic">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-3 mt-2">
                <div 
                  className="w-10 h-10 rounded-full bg-cover bg-center" 
                  style={{ backgroundImage: `url("${testimonial.imageUrl}")` }}
                ></div>
                <div>
                  <p className="text-slate-900 dark:text-white font-bold text-sm">{testimonial.name}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
