import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Timer } from "./Timer";
import { Check, X } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

interface QuizQuestionProps {
  question: Question;
  onAnswer: (selectedAnswer: number, isCorrect: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
  score: number;
}

export const QuizQuestion = ({ 
  question, 
  onAnswer, 
  questionNumber, 
  totalQuestions, 
  score 
}: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setShowResult(false);
    setTimeUp(false);
  }, [question.id]);

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null || timeUp) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const isCorrect = answerIndex === question.correctAnswer;
    
    setTimeout(() => {
      onAnswer(answerIndex, isCorrect);
    }, 2000);
  };

  const handleTimeUp = () => {
    if (selectedAnswer !== null) return;
    
    setTimeUp(true);
    setShowResult(true);
    
    setTimeout(() => {
      onAnswer(-1, false);
    }, 2000);
  };

  const getButtonVariant = (index: number) => {
    if (!showResult) return "outline";
    
    if (index === question.correctAnswer) return "default";
    if (index === selectedAnswer && selectedAnswer !== question.correctAnswer) return "destructive";
    return "outline";
  };

  const getButtonStyle = (index: number) => {
    if (!showResult) return "";
    
    if (index === question.correctAnswer) return "shadow-correct";
    if (index === selectedAnswer && selectedAnswer !== question.correctAnswer) return "shadow-incorrect";
    return "";
  };

  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-muted-foreground">
              Question {questionNumber} of {totalQuestions}
            </span>
            <div className="bg-primary/20 px-3 py-1 rounded-full">
              <span className="text-sm font-bold text-primary">Score: {score}</span>
            </div>
          </div>
          <div className="w-1/3">
            <Timer 
              duration={30} 
              onTimeUp={handleTimeUp} 
              isActive={!showResult && !timeUp}
            />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2 mb-8">
          <div
            className="h-full bg-gradient-primary rounded-full transition-all duration-500"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>

        {/* Question Card */}
        <Card className="p-8 mb-8 shadow-card">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center leading-relaxed">
            {question.question}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant={getButtonVariant(index)}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null || timeUp}
                className={`h-auto p-6 text-left justify-start transition-all duration-300 ${getButtonStyle(index)}`}
              >
                <div className="flex items-center space-x-3 w-full">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                  <span className="text-base flex-1">{option}</span>
                  {showResult && index === question.correctAnswer && (
                    <Check className="w-5 h-5 text-correct" />
                  )}
                  {showResult && index === selectedAnswer && selectedAnswer !== question.correctAnswer && (
                    <X className="w-5 h-5 text-destructive" />
                  )}
                </div>
              </Button>
            ))}
          </div>

          {timeUp && (
            <div className="text-center mt-6">
              <p className="text-destructive font-semibold">Time's up!</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};