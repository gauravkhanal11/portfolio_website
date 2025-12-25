import React from 'react';

const techStack = []; // ADD THE TECH STACK (AS STRINGS) TO THIS LIST FOR UPDATING THE WEBSITE LATER

export function Stats() {
  return (
    <div className="w-full py-12 overflow-hidden bg-white">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }
        /* Optional: Pause on hover so people can read */
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Masked Container for a "fade" effect on the edges */}
      <div className="relative flex items-center overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent">
        
        <div className="animate-scroll flex items-center">
          {/* First set of items */}
          {techStack.map((tech, index) => (
            <div key={`item-1-${index}`} className="flex items-center mx-12">
              <span className="text-3xl font-extrabold tracking-tight text-slate-800 uppercase">
                {tech}
              </span>
            </div>
          ))}

          {/* Second set of items (Exact Duplicate for seamless loop) */}
          {techStack.map((tech, index) => (
            <div key={`item-2-${index}`} className="flex items-center mx-12">
              <span className="text-3xl font-extrabold tracking-tight text-slate-800 uppercase">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
