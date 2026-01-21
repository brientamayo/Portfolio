import React from "react";

const SkillsSkeleton = () => {
  // We'll render 8 placeholders for your skills grid
  return (
    <section className="min-h-screen pt-20 pb-10 flex items-center bg-slate-900">
      <div className="w-full max-w-341.5 mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Title Skeleton */}
        <div className="w-56 h-10 bg-slate-700 rounded mb-12 animate-pulse"></div>

        {/* Skills Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              >
                {/* Icon & Name Skeleton */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-slate-700 rounded-full animate-pulse"></div>
                  <div className="w-24 h-4 bg-slate-700 rounded animate-pulse"></div>
                </div>

                {/* Progress Bar Skeleton */}
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div className="bg-slate-600 h-3 rounded-full animate-pulse" />
                </div>

                {/* Percentage Skeleton */}
                <div className="text-right mt-2">
                  <div className="w-8 h-3 bg-slate-700 rounded animate-pulse inline-block"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSkeleton;
