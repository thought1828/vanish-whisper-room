
import React, { useState, useRef, useEffect } from 'react';
import { Video, VideoOff, Mic, MicOff, Monitor, MonitorOff, Phone, Settings, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ChatPanel from './ChatPanel';
import VideoGrid from './VideoGrid';
import ScreenShare from './ScreenShare';

interface RoomInterfaceProps {
  roomId: string;
  userName: string;
  onLeaveRoom: () => void;
}

const RoomInterface = ({ roomId, userName, onLeaveRoom }: RoomInterfaceProps) => {
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [participants, setParticipants] = useState([{ id: '1', name: userName, isMe: true }]);
  
  const localVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Initialize local video stream
    const initializeMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: isVideoEnabled, 
          audio: isAudioEnabled 
        });
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.log('Media access denied:', error);
      }
    };

    initializeMedia();
  }, [isVideoEnabled, isAudioEnabled]);

  const toggleVideo = () => {
    setIsVideoEnabled(!isVideoEnabled);
  };

  const toggleAudio = () => {
    setIsAudioEnabled(!isAudioEnabled);
  };

  const toggleScreenShare = async () => {
    if (!isScreenSharing) {
      try {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        setIsScreenSharing(true);
        // Handle screen share stream
      } catch (error) {
        console.log('Screen share denied:', error);
      }
    } else {
      setIsScreenSharing(false);
    }
  };

  const copyRoomLink = () => {
    const roomLink = `${window.location.origin}/room/${roomId}`;
    navigator.clipboard.writeText(roomLink);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
              Room: {roomId}
            </h1>
            <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
              <Users className="w-4 h-4" />
              <span>{participants.length} participant{participants.length !== 1 ? 's' : ''}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={copyRoomLink} className="text-sm">
              Copy Link
            </Button>
            <Button variant="destructive" onClick={onLeaveRoom}>
              <Phone className="w-4 h-4 mr-2" />
              Leave
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Video Area */}
        <div className="flex-1 flex flex-col">
          {/* Video Grid */}
          <div className="flex-1 p-6">
            {isScreenSharing ? (
              <ScreenShare />
            ) : (
              <VideoGrid 
                participants={participants}
                localVideoRef={localVideoRef}
                isVideoEnabled={isVideoEnabled}
              />
            )}
          </div>

          {/* Controls */}
          <div className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 p-4">
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant={isAudioEnabled ? "default" : "destructive"}
                size="lg"
                onClick={toggleAudio}
                className="rounded-full w-14 h-14"
              >
                {isAudioEnabled ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
              </Button>
              
              <Button
                variant={isVideoEnabled ? "default" : "destructive"}
                size="lg"
                onClick={toggleVideo}
                className="rounded-full w-14 h-14"
              >
                {isVideoEnabled ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
              </Button>
              
              <Button
                variant={isScreenSharing ? "destructive" : "outline"}
                size="lg"
                onClick={toggleScreenShare}
                className="rounded-full w-14 h-14"
              >
                {isScreenSharing ? <MonitorOff className="w-6 h-6" /> : <Monitor className="w-6 h-6" />}
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowChat(!showChat)}
                className="rounded-full w-14 h-14"
              >
                <MessageCircle className="w-6 h-6" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="rounded-full w-14 h-14"
              >
                <Settings className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Chat Panel */}
        {showChat && (
          <div className="w-80 border-l border-slate-200 dark:border-slate-700">
            <ChatPanel roomId={roomId} userName={userName} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomInterface;
