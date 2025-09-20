import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface TimerProps {
  duration: number;
  onTimeUp: () => void;
  isActive: boolean;
}

export const Timer = ({ duration, onTimeUp, isActive }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, onTimeUp]);

  const percentage = (timeLeft / duration) * 100;
  const isLow = timeLeft <= 5;

  return (
    <div className="flex items-center space-x-3">
      <Clock className={`w-5 h-5 ${isLow ? 'text-destructive' : 'text-timer'}`} />
      <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ${
            isLow ? 'bg-destructive' : 'bg-timer'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className={`text-lg font-mono font-bold ${isLow ? 'text-destructive' : 'text-timer'}`}>
        {timeLeft}s
      </span>
    </div>
  );
};