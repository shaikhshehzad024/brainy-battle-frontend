import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Brain, Zap, Users, LogOut, User, LogIn } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface QuizWelcomeProps {
  onStart: (category: string) => void;
}

const categories = [
  { id: "general", name: "General Knowledge", icon: Brain, color: "from-blue-500 to-purple-600" },
  { id: "science", name: "Science & Tech", icon: Zap, color: "from-green-500 to-teal-600" },
  { id: "sports", name: "Sports & Games", icon: Trophy, color: "from-orange-500 to-red-600" },
  { id: "history", name: "History & Culture", icon: Users, color: "from-purple-500 to-pink-600" }
];

export const QuizWelcome = ({ onStart }: QuizWelcomeProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("general");
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-bg flex flex-col">
      {/* Header with user info or login */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <div className="text-sm font-bold text-white">Q</div>
          </div>
          <span className="font-semibold text-foreground">QuizMaster</span>
        </div>
        
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">
                  Welcome, {user.name}!
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link to="/login" className="flex items-center space-x-2">
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              QuizMaster
            </h1>
            <p className="text-xl text-muted-foreground">
              {user 
                ? `Ready for another challenge, ${user.name}?`
                : "Test your knowledge in our fast-paced trivia challenge!"
              }
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                className={`p-6 cursor-pointer transition-all duration-300 border-2 ${
                  selectedCategory === category.id
                    ? "border-primary shadow-glow scale-105"
                    : "border-border hover:border-primary/50 hover:scale-102"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
              </Card>
            );
          })}
        </div>

          <div className="space-y-4">
            <Button
              onClick={() => onStart(selectedCategory)}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-3"
            >
              {user ? "Start Quiz" : "Play as Guest"}
            </Button>
            
            {!user && (
              <p className="text-sm text-muted-foreground">
                <Link to="/signup" className="text-primary hover:underline story-link">
                  Create an account
                </Link> to save your scores and compete on the leaderboard!
              </p>
            )}
            
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>10 Questions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-timer rounded-full"></div>
                <span>30s per question</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Instant scoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};