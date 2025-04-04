import React from 'react';
import { Card, Button } from '@/components/ui/base-components';
import useAppStore from '@/store/appStore';

const YouTubeVideo: React.FC<{ videoId: string; title?: string }> = ({ videoId, title }) => {
  return (
    <div className="mb-4">
      {title && <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{title}</h3>}
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
        <iframe 
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title || "Exercise video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideo;
