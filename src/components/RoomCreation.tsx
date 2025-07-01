
import React, { useState } from 'react';
import { Plus, Link, User, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface RoomCreationProps {
  onCreateRoom: (roomId: string, userName: string) => void;
  onJoinRoom: (roomId: string, userName: string) => void;
}

const RoomCreation = ({ onCreateRoom, onJoinRoom }: RoomCreationProps) => {
  const [userName, setUserName] = useState('');
  const [roomIdToJoin, setRoomIdToJoin] = useState('');
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showJoinDialog, setShowJoinDialog] = useState(false);

  const generateRoomId = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const handleCreateRoom = () => {
    if (userName.trim()) {
      const roomId = generateRoomId();
      onCreateRoom(roomId, userName.trim());
      setShowCreateDialog(false);
    }
  };

  const handleJoinRoom = () => {
    if (userName.trim() && roomIdToJoin.trim()) {
      onJoinRoom(roomIdToJoin.trim().toUpperCase(), userName.trim());
      setShowJoinDialog(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 dark:bg-blue-600 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            VanishRoom
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Create or join a secure room for private video calls, chat, and screen sharing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Create Room */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Plus className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-2xl text-slate-900 dark:text-white">Create New Room</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300">
                Start a new private room and invite others to join
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
                  <Shield className="w-4 h-4" />
                  <span>End-to-end encrypted</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span>Temporary & stateless</span>
                </div>
              </div>
              
              <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
                <DialogTrigger asChild>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Create Room
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Room</DialogTitle>
                    <DialogDescription>
                      Enter your name to create a new private room
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="create-name">Your Name</Label>
                      <Input
                        id="create-name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter your name"
                        className="mt-1"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        onClick={handleCreateRoom}
                        disabled={!userName.trim()}
                        className="flex-1"
                      >
                        Create Room
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowCreateDialog(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Join Room */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Link className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl text-slate-900 dark:text-white">Join Existing Room</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300">
                Enter a room ID to join an existing conversation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
                  <User className="w-4 h-4" />
                  <span>No account required</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
                  <Shield className="w-4 h-4" />
                  <span>Secure & private</span>
                </div>
              </div>
              
              <Dialog open={showJoinDialog} onOpenChange={setShowJoinDialog}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Join Room
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Join Room</DialogTitle>
                    <DialogDescription>
                      Enter the room ID and your name to join
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="room-id">Room ID</Label>
                      <Input
                        id="room-id"
                        value={roomIdToJoin}
                        onChange={(e) => setRoomIdToJoin(e.target.value)}
                        placeholder="Enter room ID"
                        className="mt-1 uppercase"
                      />
                    </div>
                    <div>
                      <Label htmlFor="join-name">Your Name</Label>
                      <Input
                        id="join-name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter your name"
                        className="mt-1"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        onClick={handleJoinRoom}
                        disabled={!userName.trim() || !roomIdToJoin.trim()}
                        className="flex-1"
                      >
                        Join Room
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowJoinDialog(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            All rooms are temporary and disappear after use. No data is stored.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomCreation;
