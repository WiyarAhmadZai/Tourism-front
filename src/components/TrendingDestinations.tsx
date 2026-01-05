import React from 'react';

interface Destination {
  id: number;
  name: string;
  price: string;
  rating: number;
  imageUrl: string;
}

const TrendingDestinations: React.FC = () => {
  const destinations: Destination[] = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      price: '$899',
      rating: 4.9,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9biEc1sgcOVrOOyaNY81u8McgZNYVO7lVqDZUNpZzKuYzc1Je7x8wsyKDR5DT3-EGCqw_cDFpp3KEb6h8kUfl5itskAbIyC4-UEALCEeYJa9E9wkOjz_4-1AcumNXfJlWe85ykazeuHW9-OzszoEV6iU6HujuxyM0ItmkAwgsJn5Ywj5qXb0455nUdZNVIqGQ8yE-UbfipnESD07cBIp7retg3ufeogKcHL8JwXbHdBjRdLsjl_p7vdDG4SZyy9GZVn1A3pfRdk8'
    },
    {
      id: 2,
      name: 'Santorini, Greece',
      price: '$1,200',
      rating: 4.8,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9djIGfWW1ZBPibSJR3Oqt52sIvwEnUAhlqkQueEtbYy1RVgE2f5pGDupJTxyCXFNKNeVBcsf_3sD4KbVD0n4yZXIb1Sj4wdSRKmZwzcpqAh9DTWWv_hG5L_3pyPABYDVOupfUd7oTQ9fTXsu9ZbCbxoIQcii5xueT6nI5X3K2DtEJBrGifI5YrfCrda00jv7x2qhYMGtI5EfPIdcjDl1UVw_npCO6MpikR_qRIsjKGN4zIzZliUa-GXTkrc062g_SMhtYApj2XbE'
    },
    {
      id: 3,
      name: 'Kyoto, Japan',
      price: '$1,500',
      rating: 5.0,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7P2ItRQM3r1Bq6SpxQhen8TF_PUF1YUrkJYjRv4NK_HmfVfV6X0YiEbxGAoqPYJxxR3H7OFFn5NrX3wFHx2chZqFZjIROv4zjtdeKF9SyWo0X0hkKIAjNoczzoipZG3CAmgiGwVo5IFL5WLQrXH-vNzxwwUsjLInU_6hTGdd3VbtPwl2LFhaHQTzE1AzPpIIgc8s94mAJSn58nS85tvLrohAvOipYkI3PMglVGGFmmOQFoh01nRA-mj3TOCjRpwgsB3ZKAg46Lcc'
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center text-amber-400 text-sm font-bold gap-1">
        <span className="material-symbols-outlined text-[18px]">star</span>
        {rating}
      </div>
    );
  };

  return (
    <>
      <div className="flex justify-center bg-white dark:bg-background-dark pt-8 px-4 md:px-40">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex items-center justify-between px-4 pb-3 pt-5">
            <h2 className="text-slate-900 dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em]">Trending Now</h2>
            <a className="text-primary font-bold text-sm hover:underline" href="#">View All</a>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center bg-white dark:bg-background-dark pb-10 px-4 md:px-40">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {destinations.map((destination) => (
              <div key={destination.id} className="group flex flex-col gap-3 pb-3 bg-white dark:bg-slate-800 rounded-lg overflow-hidden transition-all hover:shadow-lg border border-transparent dark:border-slate-700">
                <div 
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover transform transition-transform duration-500 group-hover:scale-105" 
                  style={{ backgroundImage: `url("${destination.imageUrl}")` }}
                ></div>
                <div className="px-3 pb-2">
                  <div className="flex justify-between items-start">
                    <p className="text-slate-900 dark:text-white text-lg font-bold leading-normal">{destination.name}</p>
                    {renderStars(destination.rating)}
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal mt-1">
                    From <span className="text-primary font-bold text-base">{destination.price}</span>
                  </p>
                  <button className="mt-3 w-full py-2 rounded bg-primary/10 hover:bg-primary/20 text-primary text-sm font-bold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingDestinations;
