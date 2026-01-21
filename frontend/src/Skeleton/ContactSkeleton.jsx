import React from "react";

const ContactSkeleton = () => {
  return (
    <section className="min-h-screen pt-24 pb-12 bg-linear-to-br from-slate-900 to-slate-800 flex items-center">
      <div className="max-w-341.5 mx-auto px-5 md:px-10 lg:px-20 w-full">
        <div className="bg-slate-900 bg-opacity-80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl max-w-2xl mx-auto space-y-6 border border-slate-700">
          {/* Title */}
          <div className="w-48 h-10 bg-slate-700 rounded-full animate-pulse mx-auto"></div>

          {/* Name & Email Skeleton */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col space-y-2">
              <div className="w-full h-12 bg-slate-700 rounded-full animate-pulse"></div>
            </div>
            <div className="flex-1 flex flex-col space-y-2">
              <div className="w-full h-12 bg-slate-700 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Message Skeleton */}
          <div className="w-full h-32 bg-slate-700 rounded-xl animate-pulse"></div>

          {/* Button Skeleton */}
          <div className="w-full h-12 bg-slate-700 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSkeleton;