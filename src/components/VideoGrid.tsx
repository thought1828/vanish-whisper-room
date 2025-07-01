
import React from 'react';
import { Card } from '@/components/ui/card';
import { User, VideoOff } from 'lucide-react';

interface Participant {
  id: string;
  name: string;
  isMe: boolean;
}

interface VideoGridProps {
  participants: Participant[];
  localVideoRef: React.RefObject<HTMLVideoElement>;
  isVideoEnabled: boolean;
}

const VideoGrid = ({ participants, localVideoRef, isVideoEnabled }: VideoGridProps) => {
  const getGridClass = () => {
    const count = participants.length;
    if (count === 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
    if (count <= 4) return 'grid-cols-2 grid-rows-2';
    return 'grid-cols-3 grid-rows-2';
  };

  return (
    <div className={`grid ${getGridClass()} gap-4 h-full`}>
      {participants.map((participant) => (
        <Card key={participant.id} className="relative overflow-hidden bg-slate-900 dark:bg-slate-800">
          {participant.isMe ? (
            <div className="relative w-full h-full">
              {isVideoEnabled ? (
                <video
                  ref={localVideoRef}
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-700">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-10 h-10 text-slate-300" />
                    </div>
                    <VideoOff className="w-8 h-8 text-slate-400 mx-auto" />
                  </div>
                </div>
              )}
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {participant.name} (You)
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-700">
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-slate-300" />
                </div>
                <p className="text-slate-300">{participant.name}</p>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {participant.name}
              </div>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default VideoGrid;
