import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    name: "Slack",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
  },
  {
    name: "Microsoft",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
  },
  {
    name: "Google",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
  },
  {
    name: "AWS",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"
  },
  {
    name: "Salesforce",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png"
  },
  {
    name: "Hubspot",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hubspot_Logo.svg/2560px-Hubspot_Logo.svg.png"
  },
  {
    name: "Notion",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
  },
  {
    name: "Zapier",
    image: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg"
  },
  {
    name: "Airtable",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Airtable_Logo.svg/2560px-Airtable_Logo.svg.png"
  },
  {
    name: "Monday",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Monday_logo.svg/2560px-Monday_logo.svg.png"
  }
];

const LogoMarquee = () => {
  return (
    <div className="bg-[#080808] overflow-hidden py-12 relative">
      <div className="container mx-auto">
        <h3 className="text-white/60 text-center mb-12 text-sm uppercase tracking-wider font-medium">
          Onde nossa transformação chegou
        </h3>
      </div>
      
      <div className="flex overflow-hidden relative w-full">
        <motion.div
          className="flex min-w-full items-center justify-around gap-8 md:gap-12"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex-shrink-0 w-16 md:w-24"
            >
              <img 
              src={logo.image}
              alt={logo.name}
                className="w-full h-auto object-contain opacity-40 hover:opacity-90 transition-opacity grayscale hover:grayscale-0"
            />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex min-w-full items-center justify-around gap-8 md:gap-12 absolute left-full"
          animate={{
            x: ["-100%", "-200%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {logos.map((logo) => (
            <div
              key={`${logo.name}-duplicate`}
              className="flex-shrink-0 w-16 md:w-24"
            >
            <img 
              src={logo.image}
              alt={logo.name}
                className="w-full h-auto object-contain opacity-40 hover:opacity-90 transition-opacity grayscale hover:grayscale-0"
            />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradientes para suavizar as bordas */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#080808] to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#080808] to-transparent z-10"></div>
    </div>
  );
};

export default LogoMarquee; 