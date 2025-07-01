
import React from 'react';
import { Card } from '@/components/ui/card';
import { Monitor } from 'lucide-react';

const ScreenShare = () => {
  return (
    <Card className="w-full h-full bg-slate-900 dark:bg-slate-800 flex items-center justify-center">
      <div className="text-center">
        <Monitor className="w-16 h-16 text-slate-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Screen Sharing</h3>
        <p className="text-slate-400">Your screen is being shared with participants</p>
      </div>
    </Card>
  );
};

export default ScreenShare;
