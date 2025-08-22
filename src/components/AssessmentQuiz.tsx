"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string; points: number }[];
}

const AssessmentQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState('');

  const questions: Question[] = [
    {
      id: 'erp_system',
      question: 'What is your current ERP system situation?',
      options: [
        { value: 'none', label: 'No ERP system in place', points: 10 },
        { value: 'outdated', label: 'Using an outdated ERP system', points: 8 },
        { value: 'partial', label: 'Partial ERP implementation', points: 6 },
        { value: 'satisfied', label: 'Satisfied with current ERP', points: 2 },
      ],
    },
    {
      id: 'business_size',
      question: 'What is your company size?',
      options: [
        { value: 'small', label: '1-50 employees', points: 4 },
        { value: 'medium', label: '51-200 employees', points: 8 },
        { value: 'large', label: '201-1000 employees', points: 10 },
        { value: 'enterprise', label: '1000+ employees', points: 10 },
      ],
    },
    {
      id: 'edi_needs',
      question: 'Do you need EDI (Electronic Data Interchange) solutions?',
      options: [
        { value: 'urgent', label: 'Yes, urgently needed', points: 10 },
        { value: 'future', label: 'Planning for the future', points: 6 },
        { value: 'maybe', label: 'Not sure what EDI is', points: 4 },
        { value: 'no', label: 'No EDI needs', points: 0 },
      ],
    },
    {
      id: 'ui_design',
      question: 'How would you rate your current website/UI design?',
      options: [
        { value: 'poor', label: 'Needs major improvement', points: 10 },
        { value: 'average', label: 'Could be better', points: 6 },
        { value: 'good', label: 'Good but could be updated', points: 4 },
        { value: 'excellent', label: 'Excellent, no changes needed', points: 1 },
      ],
    },
    {
      id: 'timeline',
      question: 'What is your timeline for implementation?',
      options: [
        { value: 'immediate', label: 'Immediate (1-3 months)', points: 10 },
        { value: 'soon', label: 'Soon (3-6 months)', points: 8 },
        { value: 'planned', label: 'Planned (6-12 months)', points: 6 },
        { value: 'future', label: 'Future consideration (12+ months)', points: 2 },
      ],
    },
  ];

  const handleAnswerChange = (value: string) => {
    setCurrentAnswer(value);
  };

  const handleNext = () => {
    if (currentAnswer) {
      setAnswers({ ...answers, [questions[currentQuestion].id]: currentAnswer });
      setCurrentAnswer('');
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach((question) => {
      const answer = answers[question.id];
      if (answer) {
        const option = question.options.find(opt => opt.value === answer);
        if (option) {
          totalScore += option.points;
        }
      }
    });
    return totalScore;
  };

  const getRecommendation = (score: number) => {
    if (score >= 35) {
      return {
        title: 'High Priority - Immediate Action Recommended',
        description: 'Your business would significantly benefit from our comprehensive technology solutions. We recommend scheduling a consultation immediately to discuss your specific needs.',
        action: 'Schedule Consultation',
        priority: 'high'
      };
    } else if (score >= 20) {
      return {
        title: 'Medium Priority - Strategic Planning Recommended',
        description: 'Your business has good potential for improvement with targeted technology solutions. Consider planning for upgrades in the near future.',
        action: 'Learn More',
        priority: 'medium'
      };
    } else {
      return {
        title: 'Low Priority - Future Consideration',
        description: 'Your current systems seem adequate, but keep us in mind for future technology needs and periodic assessments.',
        action: 'Stay Connected',
        priority: 'low'
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setCurrentAnswer('');
  };

  if (showResults) {
    const score = calculateScore();
    const recommendation = getRecommendation(score);
    
    return (
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4">
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                <CheckCircle className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                Assessment Complete
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {score}/50 Points
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {recommendation.title}
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {recommendation.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  {recommendation.action}
                </Button>
                <Button variant="outline" size="lg" onClick={resetQuiz}>
                  Retake Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Business Technology Assessment
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take our quick assessment to discover how Project X Innovation can transform your business operations
          </p>
        </div>

        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm text-primary font-medium">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <CardTitle className="text-xl font-semibold text-foreground mt-6">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup value={currentAnswer} onValueChange={handleAnswerChange}>
              {questions[currentQuestion].options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label 
                    htmlFor={option.value} 
                    className="flex-1 cursor-pointer text-foreground"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            
            <div className="flex justify-end">
              <Button 
                onClick={handleNext} 
                disabled={!currentAnswer}
                size="lg"
                className="px-8"
              >
                {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AssessmentQuiz;