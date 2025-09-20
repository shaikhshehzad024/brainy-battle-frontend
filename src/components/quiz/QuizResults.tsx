import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Target, Clock, RotateCcw, Eye } from "lucide-react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeElapsed: number;
  onRestart: () => void;
  onViewLeaderboard: () => void;
}

export const QuizResults = ({
  score,
  totalQuestions,
  correctAnswers,
  timeElapsed,
  onRestart,
  onViewLeaderboard
}: QuizResultsProps) => {
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
  const averageTime = Math.round(timeElapsed / totalQuestions);

  const getPerformanceMessage = () => {
    if (accuracy >= 90) return { message: "Outstanding Performance!", color: "text-yellow-500" };
    if (accuracy >= 80) return { message: "Great Job!", color: "text-green-500" };
    if (accuracy >= 70) return { message: "Good Work!", color: "text-blue-500" };
    if (accuracy >= 60) return { message: "Not Bad!", color: "text-orange-500" };
    return { message: "Keep Practicing!", color: "text-red-500" };
  };

  const performance = getPerformanceMessage();

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Quiz Complete!</h1>
          <p className={`text-xl font-semibold ${performance.color}`}>
            {performance.message}
          </p>
        </div>

        {/* Score Card */}
        <Card className="p-8 mb-6 text-center shadow-card">
          <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            {score}
          </div>
          <p className="text-lg text-muted-foreground mb-6">Total Score</p>
          
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-accent/20 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">{correctAnswers}/{totalQuestions}</div>
              <div className="text-sm text-muted-foreground">Correct</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary/20 rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">{accuracy}%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-timer/20 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-timer" />
              </div>
              <div className="text-2xl font-bold text-foreground">{formatTime(timeElapsed)}</div>
              <div className="text-sm text-muted-foreground">Total Time</div>
            </div>
          </div>
        </Card>

        {/* Performance Breakdown */}
        <Card className="p-6 mb-6 shadow-card">
          <h3 className="text-lg font-semibold text-foreground mb-4">Performance Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Average time per question</span>
              <span className="font-semibold text-foreground">{averageTime}s</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Questions attempted</span>
              <span className="font-semibold text-foreground">{totalQuestions}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Score per correct answer</span>
              <span className="font-semibold text-foreground">{correctAnswers > 0 ? Math.round(score / correctAnswers) : 0} pts</span>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={onRestart}
            size="lg"
            className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Play Again
          </Button>
          <Button
            onClick={onViewLeaderboard}
            variant="outline"
            size="lg"
            className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Eye className="w-5 h-5 mr-2" />
            View Leaderboard
          </Button>
        </div>
      </div>
    </div>
  );
};