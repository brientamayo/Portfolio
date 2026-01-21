import React from "react";

const EducationSkeleton = () => {
  return (
    <section className="min-h-screen pt-24 pb-12 flex items-center bg-slate-900">
      <div className="max-w-341.5 mx-auto px-5 md:px-10 lg:px-20 w-full">
        {/* Title Skeleton */}
        <div className="w-64 h-10 bg-slate-700 rounded mb-10 animate-pulse"></div>

        {/* School Info Skeleton */}
        <div className="bg-slate-800 rounded-xl p-6 md:p-10 mb-10 animate-pulse h-32"></div>

        {/* Coursework Skeleton */}
        <div className="bg-slate-800 rounded-xl p-6 md:p-10 space-y-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="bg-slate-700 rounded-lg h-20 md:h-24 animate-pulse"
              ></div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSkeleton;
