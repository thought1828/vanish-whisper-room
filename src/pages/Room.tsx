
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RoomInterface from '@/components/RoomInterface';
import RoomCreation from '@/components/RoomCreation';

const Room = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [currentRoom, setCurrentRoom] = useState<string | null>(roomId || null);
  const [userName, setUserName] = useState<string>('');
  const [isInRoom, setIsInRoom] = useState(false);

  useEffect(() => {
    if (roomId && !isInRoom) {
      // If accessing room directly via URL, show join dialog
      setCurrentRoom(roomId);
    }
  }, [roomId, isInRoom]);

  const handleCreateRoom = (newRoomId: string, name: string) => {
    setCurrentRoom(newRoomId);
    setUserName(name);
    setIsInRoom(true);
    navigate(`/room/${newRoomId}`);
  };

  const handleJoinRoom = (roomIdToJoin: string, name: string) => {
    setCurrentRoom(roomIdToJoin);
    setUserName(name);
    setIsInRoom(true);
    navigate(`/room/${roomIdToJoin}`);
  };

  const handleLeaveRoom = () => {
    setCurrentRoom(null);
    setUserName('');
    setIsInRoom(false);
    navigate('/');
  };

  if (isInRoom && currentRoom && userName) {
    return (
      <RoomInterface
        roomId={currentRoom}
        userName={userName}
        onLeaveRoom={handleLeaveRoom}
      />
    );
  }

  return (
    <RoomCreation
      onCreateRoom={handleCreateRoom}
      onJoinRoom={handleJoinRoom}
    />
  );
};

export default Room;
