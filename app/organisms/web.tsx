// components/DevelopedWebsites.tsx
'use client';

import { useState } from 'react';

const websites = [
  {
    name: 'naveenraj.tech',
    url: 'https://naveenraj.tech',
    description: 'Website for naveenraj.tech',
  },
  {
    name: 'nexussynthaura.com',
    url: 'https://nexussynthaura.com',
    description: 'Website for nexussynthaura.com',
  },
  {
    name: 'saiwinlights.com',
    url: 'https://saiwinlights.com',
    description: 'Website for saiwinlights.com',
  },
  {
    name: 'Anuyoga',
    url: 'https://anuyoga.vercel.app/',
    description: 'Website for Anuyoga',
  },
  {
    name: 'Saiwin Inventory',
    url: 'https://saiwin-inventory-16bw.vercel.app/',
    description: 'Website for Saiwin Inventory',
  },
  
  // Add more websites here...
];

export default function DevelopedWebsites() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="bg-white dark:bg-black py-20 px-4 md:px-20" id="developed-websites">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-12">
        My  Websites
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {websites.map((site, index) => (
          <a
            key={index}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(site.url)}
            onMouseLeave={() => setHovered(null)}
            className="relative rounded-2xl overflow-hidden border border-gray-600 bg-black shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="p-5 z-10 relative">
              <h3 className="text-xl font-semibold text-white mb-2">{site.name}</h3>
              <p className="text-sm text-gray-300">{site.description}</p>
            </div>

            <div className="absolute inset-0 opacity-0 hover:opacity-80 transition-opacity duration-300 z-0">
              {hovered === site.url && (
                <iframe
                  src={site.url}
                  className="w-full h-full pointer-events-none"
                  title={site.name}
                />
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
