'use client';

import { useEffect, useRef, useState } from 'react';

const gravityWells = [
  { num: "01", title: "Fear of the Unknown", desc: "Leaders worry about breaking systems, staff capability, and wasted investments", color: "from-red-400 to-red-600" },
  { num: "02", title: "Cost Anxiety", desc: "Hidden costs: training, migration, downtime, hiring, and change management", color: "from-orange-400 to-orange-600" },
  { num: "03", title: "Culture Eats Strategy", desc: "\"We've always done it this way\" turns systems into expensive paperweights", color: "from-yellow-400 to-yellow-600" },
  { num: "04", title: "Lack of Digital Leadership", desc: "No vision, roadmap, priorities, or accountability leads to project drift", color: "from-green-400 to-green-600" },
  { num: "05", title: "Skills Gap", desc: "Missing cloud, data, cybersecurity, and DevOps expertise", color: "from-blue-400 to-blue-600" },
  { num: "06", title: "Poor ROI Clarity", desc: "Without measurable outcomes, adoption freezes", color: "from-indigo-400 to-indigo-600" },
  { num: "07", title: "Legacy Systems", desc: "Technical debt makes old systems risky to change or replace", color: "from-purple-400 to-purple-600" },
  { num: "08", title: "Change Fatigue", desc: "After failed projects, staff develop resistance and quiet sabotage", color: "from-pink-400 to-pink-600" },
  { num: "09", title: "Regulatory Fear", desc: "Data protection, compliance, and procurement rules create uncertainty", color: "from-cyan-400 to-cyan-600" },
  { num: "10", title: "No Compelling Story", desc: "Without understanding why, what, and how—resistance wins", color: "from-teal-400 to-teal-600" },
];

export default function GravityWells() {
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'scale-100');
          entry.target.classList.remove('opacity-0', 'scale-95');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase">The Barriers</p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 mb-4">The 10 Gravity Wells</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Hover over each barrier to explore the obstacles keeping African businesses grounded</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {gravityWells.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => {
                if (el) itemsRef.current[idx] = el;
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              className="group cursor-pointer opacity-0 scale-95 transform transition-all duration-500"
            >
              {/* Gradient Card Background */}
              <div className={`relative h-full min-h-64 rounded-xl p-6 bg-gradient-to-br ${item.color} overflow-hidden`}>
                {/* Overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-5xl font-bold text-white/90 mb-3">{item.num}</div>
                    <h3 className="text-lg font-semibold text-white mb-3 leading-tight group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Expandable Description */}
                  <div className={`transition-all duration-300 overflow-hidden ${hoveredIndex === idx || activeIndex === idx ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'}`}>
                    <p className="text-sm text-white/90 leading-relaxed pt-2 border-t border-white/20">
                      {item.desc}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  <div className={`mt-4 flex items-center gap-2 transition-all duration-300 ${hoveredIndex === idx ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                    <div className="w-2 h-2 rounded-full bg-white/80" />
                    <span className="text-xs text-white/80 font-medium">View Details</span>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-500`} />
              </div>
            </div>
          ))}
        </div>

        {/* Info Text */}
        <div className="mt-12 text-center text-sm text-gray-600">
          <p>Click on any barrier to keep it expanded, or hover to preview details</p>
        </div>
      </div>
    </section>
  );
}
