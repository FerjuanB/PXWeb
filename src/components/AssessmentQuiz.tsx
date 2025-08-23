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
      id: 'business_growth_stage',
      question: 'What best describes your business growth stage?',
      options: [
        { value: 'startup', label: 'Startup scaling rapidly (0-2 years)', points: 6 },
        { value: 'growth', label: 'Established growth phase (3-10 years)', points: 8 },
        { value: 'mature', label: 'Mature company optimizing operations (10+ years)', points: 10 },
        { value: 'enterprise', label: 'Enterprise transformation phase', points: 10 },
      ],
    },
    {
      id: 'main_tech_challenge',
      question: 'What is your #1 technology-related business challenge?',
      options: [
        { value: 'manual_processes', label: 'Manual processes eating up productive time', points: 9 },
        { value: 'system_silos', label: 'Systems that don\'t talk to each other', points: 8 },
        { value: 'scaling_issues', label: 'Can\'t scale current infrastructure', points: 10 },
        { value: 'ai_opportunities', label: 'Missing AI/automation opportunities', points: 9 },
        { value: 'security_compliance', label: 'Security and compliance concerns', points: 7 },
        { value: 'not_sure', label: 'Not sure where to start', points: 5 },
      ],
    },
    {
      id: 'data_integration',
      question: 'How many critical business systems operate in silos?',
      options: [
        { value: 'most_disconnected', label: 'Most systems are disconnected (5+)', points: 10 },
        { value: 'some_gaps', label: 'Some integration gaps (3-4 systems)', points: 7 },
        { value: 'minor_needs', label: 'Minor integration needs (1-2 systems)', points: 4 },
        { value: 'well_integrated', label: 'Well-integrated ecosystem', points: 2 },
      ],
    },
    {
      id: 'ai_readiness',
      question: 'How would you describe your organization\'s AI readiness?',
      options: [
        { value: 'know_need_help', label: 'We know AI could help but don\'t know where to start', points: 8 },
        { value: 'identified_need_expertise', label: 'We\'ve identified AI opportunities but lack expertise', points: 9 },
        { value: 'experimenting', label: 'We\'re experimenting with AI tools', points: 6 },
        { value: 'strategy_need_implementation', label: 'We have AI strategy but need implementation help', points: 7 },
        { value: 'not_priority', label: 'AI is not a priority for us', points: 2 },
      ],
    },
    {
      id: 'automation_level',
      question: 'What percentage of your repetitive business processes are automated?',
      options: [
        { value: 'under_25', label: 'Less than 25%', points: 10 },
        { value: '25_to_50', label: '25-50%', points: 8 },
        { value: '50_to_75', label: '50-75%', points: 5 },
        { value: 'over_75', label: 'More than 75%', points: 2 },
      ],
    },
    {
      id: 'roi_measurement',
      question: 'How well can you measure ROI on technology investments?',
      options: [
        { value: 'struggle_prove_roi', label: 'We struggle to prove tech ROI to stakeholders', points: 9 },
        { value: 'some_metrics', label: 'We track some metrics but lack comprehensive view', points: 7 },
        { value: 'good_want_improve', label: 'We have good measurement but want to improve', points: 5 },
        { value: 'excel_tracking', label: 'We excel at ROI measurement and tracking', points: 2 },
      ],
    },
    {
      id: 'decision_authority',
      question: 'Who has decision-making authority for technology investments?',
      options: [
        { value: 'i_decide', label: 'I make the final decision', points: 10 },
        { value: 'part_of_team', label: 'I\'m part of the decision-making team', points: 9 },
        { value: 'i_influence', label: 'I influence but don\'t decide', points: 6 },
        { value: 'researching_for_others', label: 'I\'m researching for someone else', points: 3 },
      ],
    },
    {
      id: 'business_impact',
      question: 'How much revenue/productivity could you gain by solving your top tech challenge?',
      options: [
        { value: 'significant_100k', label: 'Significant impact ($100K+ annually)', points: 10 },
        { value: 'moderate_25k_100k', label: 'Moderate impact ($25K-$100K annually)', points: 8 },
        { value: 'some_10k_25k', label: 'Some impact ($10K-$25K annually)', points: 5 },
        { value: 'minimal', label: 'Minimal quantifiable impact', points: 2 },
      ],
    },
    {
      id: 'urgency_driver',
      question: 'What\'s driving your timeline for technology improvements?',
      options: [
        { value: 'immediate_crisis', label: 'Immediate business need/crisis', points: 10 },
        { value: 'upcoming_event', label: 'Upcoming business event (merger, audit, launch)', points: 9 },
        { value: 'budget_planning', label: 'Budget year planning', points: 7 },
        { value: 'general_improvement', label: 'General improvement goal', points: 4 },
        { value: 'just_exploring', label: 'Just exploring options', points: 2 },
      ],
    },
    {
      id: 'security_priority',
      question: 'How critical are security and compliance requirements for your solution?',
      options: [
        { value: 'mission_critical', label: 'Mission-critical (regulated industry)', points: 8 },
        { value: 'very_important', label: 'Very important (sensitive data)', points: 6 },
        { value: 'moderately_important', label: 'Moderately important', points: 4 },
        { value: 'basic_needs', label: 'Basic security needs', points: 2 },
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
    // Weighted scoring system based on business impact and urgency
    const categoryWeights = {
      businessImpact: 0.4, // 40% - Business Impact & Pain
      urgency: 0.3,        // 30% - Urgency & Timeline  
      strategic: 0.2,      // 20% - Strategic Readiness
      context: 0.1         // 10% - Company Context
    };

    const categories = {
      businessImpact: ['main_tech_challenge', 'data_integration', 'automation_level', 'business_impact'],
      urgency: ['decision_authority', 'urgency_driver'],
      strategic: ['ai_readiness', 'roi_measurement', 'security_priority'], 
      context: ['business_growth_stage']
    };

    let categoryScores = {
      businessImpact: 0,
      urgency: 0,
      strategic: 0,
      context: 0
    };

    let categoryCounts = {
      businessImpact: 0,
      urgency: 0,
      strategic: 0,
      context: 0
    };

    // Calculate average scores for each category
    questions.forEach((question) => {
      const answer = answers[question.id];
      if (answer) {
        const option = question.options.find(opt => opt.value === answer);
        if (option) {
          // Find which category this question belongs to
          for (const [category, questionIds] of Object.entries(categories)) {
            if (questionIds.includes(question.id)) {
              categoryScores[category as keyof typeof categoryScores] += option.points;
              categoryCounts[category as keyof typeof categoryCounts]++;
              break;
            }
          }
        }
      }
    });

    // Calculate weighted final score (0-100 scale)
    let finalScore = 0;
    for (const category of Object.keys(categoryWeights) as Array<keyof typeof categoryWeights>) {
      if (categoryCounts[category] > 0) {
        const avgCategoryScore = categoryScores[category] / categoryCounts[category];
        const normalizedScore = (avgCategoryScore / 10) * 100; // Normalize to 100
        finalScore += normalizedScore * categoryWeights[category];
      }
    }

    return Math.round(finalScore);
  };

  const getRecommendation = (score: number) => {
    if (score >= 75) {
      return {
        title: 'Critical Action Needed - Schedule Your Strategy Session Today',
        description: 'Your assessment reveals significant technology gaps that are likely costing your business substantial revenue and productivity. Our analysis shows you\'re an ideal candidate for immediate transformation.',
        action: 'Book Strategy Session',
        priority: 'critical',
        urgency: 'Schedule within 24 hours',
        benefits: 'Immediate 90-day action plan, ROI projections, priority roadmap'
      };
    } else if (score >= 55) {
      return {
        title: 'High Priority - Schedule Discovery Call This Week',
        description: 'Your business has significant opportunities for technology optimization. Based on your responses, we can help you achieve measurable improvements in efficiency and growth.',
        action: 'Book Discovery Call',
        priority: 'high',
        urgency: 'Schedule this week',
        benefits: 'Detailed gap analysis, phased implementation approach, custom solutions'
      };
    } else if (score >= 35) {
      return {
        title: 'Strategic Opportunity - Schedule Consultation This Month',
        description: 'Your assessment shows good potential for targeted technology improvements. A structured approach could deliver meaningful business value.',
        action: 'Schedule Consultation',
        priority: 'medium',
        urgency: 'Schedule this month',
        benefits: 'Technology audit, strategic recommendations, implementation timeline'
      };
    } else {
      return {
        title: 'Future Planning - Stay Connected for Emerging Opportunities',
        description: 'Your current technology foundation appears stable. We recommend periodic assessments to identify future optimization opportunities as your business evolves.',
        action: 'Stay Connected',
        priority: 'low',
        urgency: 'Quarterly check-ins',
        benefits: 'Industry insights, technology updates, future planning support'
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
                  {score}/100 Points
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  recommendation.priority === 'critical' ? 'bg-red-100 text-red-800' :
                  recommendation.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                  recommendation.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {recommendation.urgency}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {recommendation.title}
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {recommendation.description}
                </p>
                
                {recommendation.benefits && (
                  <div className="bg-muted/50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-foreground mb-2">What you'll get:</h4>
                    <p className="text-sm text-muted-foreground">{recommendation.benefits}</p>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className={`px-8 ${
                    recommendation.priority === 'critical' ? 'bg-red-600 hover:bg-red-700' :
                    recommendation.priority === 'high' ? 'bg-orange-600 hover:bg-orange-700' :
                    ''
                  }`}
                >
                  {recommendation.action}
                </Button>
                <Button variant="outline" size="lg" onClick={resetQuiz}>
                  Retake Assessment
                </Button>
              </div>

              {/* Score breakdown for transparency */}
              <div className="mt-8 pt-6 border-t border-border">
                <details className="text-sm">
                  <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                    View Score Breakdown
                  </summary>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-medium">Business Impact & Pain:</span> 40%
                    </div>
                    <div>
                      <span className="font-medium">Urgency & Authority:</span> 30%
                    </div>
                    <div>
                      <span className="font-medium">Strategic Readiness:</span> 20%
                    </div>
                    <div>
                      <span className="font-medium">Company Context:</span> 10%
                    </div>
                  </div>
                </details>
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