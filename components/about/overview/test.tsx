import React from 'react';

const Timeline = () => {
  const timelineItems = [
    {
      year: "2022",
      title: "A trusted SaaS companion for Fortune 500 firms",
    },
    {
      year: "2020-2021",
      title: "Braving the odds during the pandemic",
    },
    {
      year: "2019",
      title: "Clocked 144% year-on-year growth",
    },
    {
      year: "2017",
      title: "Connected 1 million+ cars & trucks",
    },
    {
      year: "2016",
      title: "Pioneering the video streaming industry",
    },
    {
      year: "2015",
      title: "First in-app communication platform",
    },
    {
      year: "2012-2014",
      title: "Spreading wings beyond the Asia-Pacific to the Americas",
    },
    {
      year: "2008-2011",
      title: "Emergence & recognition as a leading SaaS company",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
        
        {timelineItems.map((item, index) => (
          <div key={index} className="relative pl-12 pb-8">
            {/* Dot */}
            <div className="absolute left-4 top-1 h-4 w-4 rounded-full bg-blue-600 transform -translate-x-1/2"></div>
            
            {/* Year */}
            <div className="text-lg font-semibold text-blue-600 mb-1">
              Year{item.year.includes("-") ? "s" : ""} {item.year}
            </div>
            
            {/* Content */}
            <div className="text-gray-700">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;