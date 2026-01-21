import React from "react";

const AboutSkeleton = () => {
  return (
    <section className="min-h-screen pt-20 bg-slate-900 text-slate-100 flex items-center pb-6">
      <div className="max-w-341.5 mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side - Image Skeleton */}
          <div className="flex justify-center w-full md:w-1/2">
            <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-lg bg-slate-700 animate-pulse"></div>
          </div>

          {/* Right Side - Info Skeleton */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="w-48 h-8 bg-slate-700 rounded animate-pulse"></div> {/* Title */}
            <div className="w-full h-20 bg-slate-700 rounded animate-pulse"></div> {/* Description */}
            
            {/* Info Grid Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="w-full h-5 bg-slate-700 rounded animate-pulse"></div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkeleton;
