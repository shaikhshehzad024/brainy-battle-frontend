import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award, Star } from "lucide-react";

interface LeaderboardEntry {
  id: number;
  name: string;
  score: number;
  accuracy: number;
  timeCompleted: string;
}

interface QuizLeaderboardProps {
  currentScore: number;
  currentAccuracy: number;
}

// Mock leaderboard data
const mockLeaderboard: LeaderboardEntry[] = [
  { id: 1, name: "QuizMaster Pro", score: 950, accuracy: 95, timeCompleted: "2:45" },
  { id: 2, name: "BrainStorm", score: 920, accuracy: 92, timeCompleted: "3:12" },
  { id: 3, name: "TriviaKing", score: 890, accuracy: 89, timeCompleted: "2:58" },
  { id: 4, name: "SmartCookie", score: 860, accuracy: 86, timeCompleted: "3:45" },
  { id: 5, name: "WisdomSeeker", score: 840, accuracy: 84, timeCompleted: "4:02" },
  { id: 6, name: "KnowledgeNinja", score: 820, accuracy: 82, timeCompleted: "3:33" },
  { id: 7, name: "FactFinder", score: 800, accuracy: 80, timeCompleted: "4:15" },
  { id: 8, name: "QuizWhiz", score: 780, accuracy: 78, timeCompleted: "4:28" },
];

export const QuizLeaderboard = ({ currentScore, currentAccuracy }: QuizLeaderboardProps) => {
  const getRankIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <Star className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getRankStyle = (position: number) => {
    switch (position) {
      case 1:
        return "bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-yellow-500/50";
      case 2:
        return "bg-gradient-to-r from-gray-400/20 to-slate-400/20 border-gray-400/50";
      case 3:
        return "bg-gradient-to-r from-amber-600/20 to-orange-500/20 border-amber-600/50";
      default:
        return "bg-card border-border";
    }
  };

  // Create a temporary leaderboard with current user
  const currentUser = {
    id: 999,
    name: "You",
    score: currentScore,
    accuracy: currentAccuracy,
    timeCompleted: "Just now"
  };

  const fullLeaderboard = [...mockLeaderboard, currentUser]
    .sort((a, b) => b.score - a.score)
    .map((entry, index) => ({ ...entry, position: index + 1 }));

  const currentUserRank = fullLeaderboard.find(entry => entry.id === 999);

  return (
    <div className="min-h-screen bg-gradient-bg p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Leaderboard
          </h1>
          <p className="text-muted-foreground">
            See how you rank against other quiz masters!
          </p>
        </div>

        {/* Current User Highlight */}
        {currentUserRank && (
          <Card className={`p-6 mb-6 ${getRankStyle(currentUserRank.position)} shadow-glow`}>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                {getRankIcon(currentUserRank.position)}
                <span className="text-2xl font-bold text-primary">#{currentUserRank.position}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">Your Score</h3>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>{currentUserRank.score} points</span>
                  <span>{currentUserRank.accuracy}% accuracy</span>
                  <span>{currentUserRank.timeCompleted}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">{currentUserRank.score}</div>
                <div className="text-sm text-muted-foreground">points</div>
              </div>
            </div>
          </Card>
        )}

        {/* Top Players */}
        <div className="space-y-3">
          {fullLeaderboard.slice(0, 10).map((entry) => (
            <Card
              key={entry.id}
              className={`p-4 transition-all duration-300 hover:scale-102 ${
                entry.id === 999 ? "opacity-60" : getRankStyle(entry.position)
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  {getRankIcon(entry.position)}
                  <span className="text-lg font-bold text-muted-foreground">#{entry.position}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{entry.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{entry.accuracy}% accuracy</span>
                    <span>Completed in {entry.timeCompleted}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-primary">{entry.score}</div>
                  <div className="text-xs text-muted-foreground">points</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};