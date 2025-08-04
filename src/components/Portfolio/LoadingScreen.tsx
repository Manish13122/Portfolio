import { useEffect, useState } from 'react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 3;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-700 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center animate-scale-in">
        <div className="w-20 h-20 mb-8 mx-auto relative">
          <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center animate-pulse-glow">
            <span className="text-white font-bold text-2xl">PM</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl blur-lg opacity-50 animate-floating"></div>
        </div>
        
        <h2 className="text-3xl font-bold gradient-text mb-2 animate-slide-in-left">
          Pedimalla Manish
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 animate-slide-in-right">
          Frontend Developer Portfolio
        </p>
        
        <div className="w-80 h-3 bg-muted/30 rounded-full mx-auto mb-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-500 animate-gradient-shift"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-muted-foreground text-sm font-medium">
          {progress < 100 ? `Loading... ${progress}%` : 'Welcome!'}
        </p>
      </div>
    </div>
  );
};