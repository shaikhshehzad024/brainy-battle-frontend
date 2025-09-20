import { useState, useEffect } from "react";
import { QuizWelcome } from "@/components/quiz/QuizWelcome";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizResults } from "@/components/quiz/QuizResults";
import { QuizLeaderboard } from "@/components/quiz/QuizLeaderboard";
import { questions, Question } from "@/data/questions";
import { useToast } from "@/hooks/use-toast";

type GameState = "welcome" | "playing" | "results" | "leaderboard";

const Index = () => {
  const [gameState, setGameState] = useState<GameState>("welcome");
  const [currentCategory, setCurrentCategory] = useState<string>("general");
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const { toast } = useToast();

  const startQuiz = (category: string) => {
    const categoryQuestions = questions[category] || questions.general;
    const shuffledQuestions = [...categoryQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
    
    setCurrentCategory(category);
    setCurrentQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setStartTime(Date.now());
    setGameState("playing");
  };

  const handleAnswer = (selectedAnswer: number, isCorrect: boolean) => {
    if (isCorrect) {
      const points = 100; // Base points for correct answer
      setScore(prev => prev + points);
      setCorrectAnswers(prev => prev + 1);
      
      toast({
        title: "Correct! 🎉",
        description: `+${points} points`,
        className: "bg-gradient-success text-white border-correct",
      });
    } else {
      toast({
        title: selectedAnswer === -1 ? "Time's up! ⏰" : "Incorrect ❌",
        description: selectedAnswer === -1 ? "No points awarded" : "Better luck next time!",
        variant: "destructive",
      });
    }

    setTimeout(() => {
      if (currentQuestionIndex < currentQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setEndTime(Date.now());
        setGameState("results");
      }
    }, 100);
  };

  const restartQuiz = () => {
    setGameState("welcome");
  };

  const viewLeaderboard = () => {
    setGameState("leaderboard");
  };

  const backToResults = () => {
    setGameState("results");
  };

  const getTimeElapsed = () => {
    return endTime > 0 ? Math.round((endTime - startTime) / 1000) : 0;
  };

  const getCurrentAccuracy = () => {
    return currentQuestions.length > 0 ? Math.round((correctAnswers / currentQuestions.length) * 100) : 0;
  };

  useEffect(() => {
    // Set page title based on game state
    const titles = {
      welcome: "QuizMaster - Ready to Play?",
      playing: `QuizMaster - Question ${currentQuestionIndex + 1}`,
      results: "QuizMaster - Results",
      leaderboard: "QuizMaster - Leaderboard"
    };
    document.title = titles[gameState];
  }, [gameState, currentQuestionIndex]);

  switch (gameState) {
    case "welcome":
      return <QuizWelcome onStart={startQuiz} />;
    
    case "playing":
      return (
        <QuizQuestion
          question={currentQuestions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={currentQuestions.length}
          score={score}
        />
      );
    
    case "results":
      return (
        <QuizResults
          score={score}
          totalQuestions={currentQuestions.length}
          correctAnswers={correctAnswers}
          timeElapsed={getTimeElapsed()}
          onRestart={restartQuiz}
          onViewLeaderboard={viewLeaderboard}
        />
      );
    
    case "leaderboard":
      return (
        <div>
          <QuizLeaderboard
            currentScore={score}
            currentAccuracy={getCurrentAccuracy()}
          />
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
            <button
              onClick={backToResults}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Back to Results
            </button>
          </div>
        </div>
      );
    
    default:
      return <QuizWelcome onStart={startQuiz} />;
  }
};

export default Index;
