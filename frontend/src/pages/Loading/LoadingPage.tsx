import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSampleData } from '@/contexts/SampleDataContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Globe, 
  Search, 
  BarChart3, 
  CheckCircle, 
  Loader2,
  Database,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

export function LoadingPage() {
  const location = useLocation();
  const companyDomain = location.state?.companyDomain || 'www.example.com';
  const navigate = useNavigate();
  const { setCompanyName } = useSampleData();
  const [currentPhase, setCurrentPhase] = useState<'scraping' | 'analyzing'>('scraping');
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const scrapingSteps = [
    { icon: Globe, text: 'Connecting to data sources...', duration: 2000 },
    { icon: Search, text: 'Scraping App Store reviews...', duration: 2000 },
    { icon: Search, text: 'Scraping Google Play reviews...', duration: 2000 },
    { icon: Search, text: 'Scraping social media mentions...', duration: 2000 },
    { icon: Database, text: 'Storing collected data...', duration: 2000 }
  ];

  const analyzingSteps = [
    { icon: BarChart3, text: 'Processing sentiment analysis...', duration: 2000 },
    { icon: TrendingUp, text: 'Identifying trending topics...', duration: 2000 },
    { icon: MessageSquare, text: 'Categorizing feedback...', duration: 2000 },
    { icon: BarChart3, text: 'Generating insights...', duration: 2000 },
    { icon: CheckCircle, text: 'Preparing your dashboard...', duration: 2000 }
  ];

  useEffect(() => {
    let totalProgress = 0;
    let stepIndex = 0;
    const allSteps = [...scrapingSteps, ...analyzingSteps];
    
    const interval = setInterval(() => {
      if (stepIndex < allSteps.length) {
        const stepProgress = (totalProgress % 100) + (100 / allSteps.length);
        
        setProgress(Math.min(stepProgress, 100));
        setCurrentStep(stepIndex);
        
        // Switch to analyzing phase after scraping steps
        if (stepIndex === scrapingSteps.length - 1) {
          setCurrentPhase('analyzing');
        }
        
        stepIndex++;
        totalProgress = stepProgress;
      } else {
        // Loading complete
        clearInterval(interval);
        
        // Extract company name from domain and generate sample data
        const companyName = companyDomain.replace(/^www\./, '').replace(/\.com$/, '');
        setCompanyName(companyName);
        
        // Navigate to dashboard after a brief delay
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      }
    }, 2000); // Each step takes 2 seconds (10 steps total = 20 seconds)

    return () => clearInterval(interval);
  }, [companyDomain, navigate, setCompanyName]);

  const currentSteps = currentPhase === 'scraping' ? scrapingSteps : analyzingSteps;
  const phaseProgress = ((currentStep % currentSteps.length) / currentSteps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Setting up your analytics dashboard
            </CardTitle>
            <CardDescription className="text-gray-600">
              We're analyzing data from {companyDomain}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Overall Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Overall Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>

            {/* Phase Indicator */}
            <div className="flex items-center justify-center space-x-4">
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                currentPhase === 'scraping' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'
              }`}>
                <Search className="w-4 h-4" />
                <span className="text-sm font-medium">Scraping Data</span>
              </div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                currentPhase === 'analyzing' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
              }`}>
                <BarChart3 className="w-4 h-4" />
                <span className="text-sm font-medium">Analyzing Reviews</span>
              </div>
            </div>

            {/* Current Step */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                {(() => {
                  const Icon = currentSteps[currentStep % currentSteps.length]?.icon || Loader2;
                  return <Icon className="w-5 h-5 text-blue-600" />;
                })()}
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {currentSteps[currentStep % currentSteps.length]?.text || 'Processing...'}
                  </p>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Step {currentStep + 1} of {scrapingSteps.length + analyzingSteps.length}</span>
                    <span>{Math.round(phaseProgress)}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimated Time */}
            <div className="text-center text-sm text-gray-500">
              Estimated time remaining: {Math.max(0, Math.ceil((100 - progress) / 5))} seconds
            </div>

            {/* Tips */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-blue-900 mb-2">What we're doing:</h4>
              <ul className="text-xs text-blue-800 space-y-1">
                <li>• Collecting reviews from multiple sources</li>
                <li>• Analyzing sentiment and user feedback</li>
                <li>• Identifying key trends and patterns</li>
                <li>• Preparing personalized insights for your business</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
