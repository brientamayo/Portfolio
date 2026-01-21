import React from "react";

const ProjectsSkeleton = () => {
  return (
    <section className="min-h-screen pt-24 pb-12 flex items-center bg-slate-900">
      <div className="max-w-341.5 mx-auto px-5 md:px-10 lg:px-20 w-full">
        {/* Title Skeleton */}
        <div className="w-56 h-10 bg-slate-700 rounded mb-12 animate-pulse"></div>

        {/* Content Skeleton */}
        <div className="flex flex-col-reverse lg:flex-row gap-12">
          {/* LEFT: Details Skeleton */}
          <div className="lg:w-1/2 space-y-4">
            <div className="w-24 h-4 bg-slate-700 rounded animate-pulse"></div>
            <div className="w-48 h-6 bg-slate-700 rounded animate-pulse"></div>
            <div className="w-32 h-4 bg-slate-700 rounded animate-pulse"></div>
            <div className="space-y-2">
              <div className="w-full h-3 bg-slate-700 rounded animate-pulse"></div>
              <div className="w-full h-3 bg-slate-700 rounded animate-pulse"></div>
              <div className="w-5/6 h-3 bg-slate-700 rounded animate-pulse"></div>
            </div>

            {/* Tech Stack Skeleton */}
            <div className="flex flex-wrap gap-3 pt-3">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-24 h-6 bg-slate-700 rounded-full animate-pulse"
                  ></div>
                ))}
            </div>
          </div>

          {/* RIGHT: Image Skeleton */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="w-full h-64 md:h-80 lg:h-96 bg-slate-700 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSkeleton;
