import React from "react";

const HomeSkeleton = () => {
  return (
    <section className="min-h-screen pt-16 pb-8 max-w-341.5 mx-auto px-4 md:px-8 lg:px-12 xl:px-16 flex items-center">
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col space-y-4 text-left">
          <div className="w-32 h-4 bg-slate-700 rounded animate-pulse"></div>
          <div className="w-64 h-8 bg-slate-700 rounded animate-pulse"></div>
          <div className="w-full md:w-96 h-20 bg-slate-700 rounded animate-pulse mt-2"></div>
          <div className="flex gap-4 mt-4">
            <div className="w-28 h-10 bg-slate-700 rounded-full animate-pulse"></div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-700 rounded-full animate-pulse"></div>
              <div className="w-10 h-10 bg-slate-700 rounded-full animate-pulse"></div>
              <div className="w-10 h-10 bg-slate-700 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center pt-6 md:pt-0">
          <div className="w-72 h-72 md:w-88 md:h-88 rounded-full bg-slate-700 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeSkeleton;
