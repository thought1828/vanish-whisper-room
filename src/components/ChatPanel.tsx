
import React, { useState, useRef, useEffect } from 'react';
import { Send, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  isMe: boolean;
}

interface ChatPanelProps {
  roomId: string;
  userName: string;
}

const ChatPanel = ({ roomId, userName }: ChatPanelProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'System',
      content: `Welcome to room ${roomId}`,
      timestamp: new Date(),
      isMe: false
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        sender: userName,
        content: newMessage.trim(),
        timestamp: new Date(),
        isMe: true
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="h-full flex flex-col bg-white dark:bg-slate-800">
      {/* Chat Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-700">
        <h3 className="font-semibold text-slate-900 dark:text-white">Chat</h3>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] ${message.sender === 'System' ? 'w-full' : ''}`}>
              {message.sender === 'System' ? (
                <div className="text-center">
                  <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                    {message.content}
                  </span>
                </div>
              ) : (
                <Card className={`p-3 ${
                  message.isMe 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white'
                }`}>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      {!message.isMe && (
                        <p className="text-xs font-medium mb-1 text-slate-600 dark:text-slate-300">
                          {message.sender}
                        </p>
                      )}
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    <span className={`text-xs flex-shrink-0 ${
                      message.isMe ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                    }`}>
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                </Card>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-end space-x-2">
          <div className="flex-1">
            <Textarea
              ref={textareaRef}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="min-h-[40px] max-h-32 resize-none"
              rows={1}
            />
          </div>
          <Button
            onClick={sendMessage}
            disabled={!newMessage.trim()}
            size="sm"
            className="rounded-full w-10 h-10 p-0"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
