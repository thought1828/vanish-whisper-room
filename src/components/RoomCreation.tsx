
import React, { useState, useEffect, useRef } from 'react';
import { Plus, Link, User, Shield, Clock, Video, VideoOff, Mic, MicOff, Copy, Share2, MessageCircle, Send, Key, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

interface RoomCreationProps {
  onCreateRoom: (roomId: string, userName: string) => void;
  onJoinRoom: (roomId: string, userName: string) => void;
}

const RoomCreation = ({ onCreateRoom, onJoinRoom }: RoomCreationProps) => {
  console.log('RoomCreation component is rendering with new features');
  const [userName, setUserName] = useState('');
  const [roomIdToJoin, setRoomIdToJoin] = useState('');
  const [roomPassword, setRoomPassword] = useState('');
  const [joinPassword, setJoinPassword] = useState('');
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showJoinDialog, setShowJoinDialog] = useState(false);
  const [showPermissionsDialog, setShowPermissionsDialog] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showJoinPassword, setShowJoinPassword] = useState(false);
  
  // Permissions state
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [hasVideoPermission, setHasVideoPermission] = useState(false);
  const [hasAudioPermission, setHasAudioPermission] = useState(false);
  
  // Generated room details
  const [generatedRoomId, setGeneratedRoomId] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();

  const generateRoomId = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const generatePassword = () => {
    return Math.random().toString(36).substring(2, 10).toLowerCase();
  };

  const checkPermissions = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: videoEnabled, 
        audio: audioEnabled 
      });
      
      if (videoRef.current && videoEnabled) {
        videoRef.current.srcObject = stream;
      }
      
      setHasVideoPermission(videoEnabled);
      setHasAudioPermission(audioEnabled);
      
      toast({
        title: "Permissions granted",
        description: "Camera and microphone permissions are ready",
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Permission denied",
        description: "Please allow camera and microphone access",
        variant: "destructive",
      });
      return false;
    }
  };

  const handleCreateRoom = async () => {
    if (userName.trim()) {
      const hasPermissions = await checkPermissions();
      if (hasPermissions) {
        const roomId = generateRoomId();
        const password = generatePassword();
        setGeneratedRoomId(roomId);
        setGeneratedPassword(password);
        onCreateRoom(roomId, userName.trim());
        setShowCreateDialog(false);
      }
    }
  };

  const handleJoinRoom = async () => {
    if (userName.trim() && roomIdToJoin.trim() && joinPassword.trim()) {
      const hasPermissions = await checkPermissions();
      if (hasPermissions) {
        onJoinRoom(roomIdToJoin.trim().toUpperCase(), userName.trim());
        setShowJoinDialog(false);
      }
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Room details copied successfully",
    });
  };

  const shareToWhatsApp = () => {
    const roomLink = `${window.location.origin}/room/${generatedRoomId}`;
    const message = `Join my VanishRoom meeting:\n\nRoom ID: ${generatedRoomId}\nPassword: ${generatedPassword}\nLink: ${roomLink}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const shareToTelegram = () => {
    const roomLink = `${window.location.origin}/room/${generatedRoomId}`;
    const message = `Join my VanishRoom meeting:\n\nRoom ID: ${generatedRoomId}\nPassword: ${generatedPassword}\nLink: ${roomLink}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(roomLink)}&text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  };

  const shareViaEmail = () => {
    const roomLink = `${window.location.origin}/room/${generatedRoomId}`;
    const subject = "Join my VanishRoom meeting";
    const body = `Hi,\n\nYou're invited to join my secure video meeting on VanishRoom.\n\nRoom ID: ${generatedRoomId}\nPassword: ${generatedPassword}\nDirect Link: ${roomLink}\n\nSee you there!`;
    const emailUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(emailUrl);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 dark:bg-blue-600 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            VanishRoom
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Secure video meetings with end-to-end encryption
          </p>
        </div>

        {/* Permissions Section */}
        <Card className="mb-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-slate-900 dark:text-white">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              Camera & Microphone Settings
            </CardTitle>
            <CardDescription>
              Configure your audio and video settings before joining a meeting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Video Preview */}
              <div className="space-y-4">
                <div className="relative aspect-video bg-slate-900 dark:bg-slate-700 rounded-xl overflow-hidden">
                  {videoEnabled && hasVideoPermission ? (
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <User className="w-8 h-8 text-slate-300" />
                        </div>
                        <p className="text-slate-300 text-sm">Camera is off</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <Button
                      size="sm"
                      variant={videoEnabled ? "default" : "destructive"}
                      className="rounded-full"
                      onClick={() => setVideoEnabled(!videoEnabled)}
                    >
                      {videoEnabled ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                    </Button>
                    <Button
                      size="sm"
                      variant={audioEnabled ? "default" : "destructive"}
                      className="rounded-full"
                      onClick={() => setAudioEnabled(!audioEnabled)}
                    >
                      {audioEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Video className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      <span className="text-slate-900 dark:text-white font-medium">Camera</span>
                    </div>
                    <Switch
                      checked={videoEnabled}
                      onCheckedChange={setVideoEnabled}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mic className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      <span className="text-slate-900 dark:text-white font-medium">Microphone</span>
                    </div>
                    <Switch
                      checked={audioEnabled}
                      onCheckedChange={setAudioEnabled}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Permission Status</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className={`w-2 h-2 rounded-full ${hasVideoPermission ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span className="text-slate-600 dark:text-slate-400">
                        Camera {hasVideoPermission ? 'Allowed' : 'Not Allowed'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className={`w-2 h-2 rounded-full ${hasAudioPermission ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span className="text-slate-600 dark:text-slate-400">
                        Microphone {hasAudioPermission ? 'Allowed' : 'Not Allowed'}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={checkPermissions}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Test Permissions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Create Room */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Plus className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-2xl text-slate-900 dark:text-white">Create New Meeting</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300">
                Start an instant meeting with secure room ID and password
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
                <DialogTrigger asChild>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
                    <Plus className="w-4 h-4 mr-2" />
                    New Meeting
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Create New Meeting</DialogTitle>
                    <DialogDescription>
                      Enter your name to create a secure meeting room
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="create-name">Your Display Name</Label>
                      <Input
                        id="create-name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter your name"
                        className="mt-2"
                      />
                    </div>

                    {generatedRoomId && (
                      <div className="space-y-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <h3 className="font-semibold text-slate-900 dark:text-white">Meeting Details</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Room ID:</span>
                            <div className="flex items-center gap-2">
                              <code className="text-sm font-mono bg-white dark:bg-slate-700 px-2 py-1 rounded">
                                {generatedRoomId}
                              </code>
                              <Button size="sm" variant="ghost" onClick={() => copyToClipboard(generatedRoomId)}>
                                <Copy className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Password:</span>
                            <div className="flex items-center gap-2">
                              <code className="text-sm font-mono bg-white dark:bg-slate-700 px-2 py-1 rounded">
                                {generatedPassword}
                              </code>
                              <Button size="sm" variant="ghost" onClick={() => copyToClipboard(generatedPassword)}>
                                <Copy className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div className="space-y-2">
                          <p className="text-sm font-medium text-slate-900 dark:text-white">Share Meeting</p>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={shareToWhatsApp} className="flex-1">
                              <MessageCircle className="w-3 h-3 mr-1" />
                              WhatsApp
                            </Button>
                            <Button size="sm" variant="outline" onClick={shareToTelegram} className="flex-1">
                              <Send className="w-3 h-3 mr-1" />
                              Telegram
                            </Button>
                            <Button size="sm" variant="outline" onClick={shareViaEmail} className="flex-1">
                              <Share2 className="w-3 h-3 mr-1" />
                              Email
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <Button
                        onClick={handleCreateRoom}
                        disabled={!userName.trim()}
                        className="flex-1"
                        size="lg"
                      >
                        Create Meeting
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowCreateDialog(false)}
                        size="lg"
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
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Link className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl text-slate-900 dark:text-white">Join Meeting</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300">
                Enter room ID and password to join an existing meeting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog open={showJoinDialog} onOpenChange={setShowJoinDialog}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full" size="lg">
                    <Link className="w-4 h-4 mr-2" />
                    Join Meeting
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Join Meeting</DialogTitle>
                    <DialogDescription>
                      Enter the meeting details to join
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="join-name">Your Display Name</Label>
                      <Input
                        id="join-name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter your name"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="room-id">Room ID</Label>
                      <Input
                        id="room-id"
                        value={roomIdToJoin}
                        onChange={(e) => setRoomIdToJoin(e.target.value.toUpperCase())}
                        placeholder="Enter room ID"
                        className="mt-2 font-mono uppercase"
                      />
                    </div>
                    <div>
                      <Label htmlFor="join-password">Meeting Password</Label>
                      <div className="relative mt-2">
                        <Input
                          id="join-password"
                          type={showJoinPassword ? "text" : "password"}
                          value={joinPassword}
                          onChange={(e) => setJoinPassword(e.target.value)}
                          placeholder="Enter password"
                          className="pr-10 font-mono"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowJoinPassword(!showJoinPassword)}
                        >
                          {showJoinPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        onClick={handleJoinRoom}
                        disabled={!userName.trim() || !roomIdToJoin.trim() || !joinPassword.trim()}
                        className="flex-1"
                        size="lg"
                      >
                        Join Meeting
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowJoinDialog(false)}
                        size="lg"
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

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            🔒 All meetings are end-to-end encrypted and disappear after use
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomCreation;
