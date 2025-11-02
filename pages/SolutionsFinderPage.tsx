import React, { useState, useMemo } from 'react';
import { Page, Solution, Product } from '../types';
import { solutions, productSuites } from '../data';
import Card from '../components/Card';

interface SolutionsFinderPageProps {
  navigateTo: (page: Page, data?: any) => void;
}

const quizQuestions = [
  {
    id: 'role',
    question: 'What is your primary role?',
    options: [
      { value: 'property_manager', label: 'Property Manager' },
      { value: 'asset_manager', label: 'Asset Manager' },
      { value: 'owner_investor', label: 'Owner / Investor' },
      { value: 'leasing_agent', label: 'Leasing Agent' },
    ],
  },
  {
    id: 'portfolio',
    question: 'What type of properties do you primarily manage?',
    options: [
      { value: 'residential', label: 'Residential' },
      { value: 'commercial', label: 'Commercial' },
      { value: 'senior_living', label: 'Senior Living' },
      { value: 'coworking', label: 'Coworking / Flex' },
    ],
  },
  {
    id: 'challenge',
    question: 'What is your biggest challenge right now?',
    options: [
      { value: 'marketing_leasing', label: 'Attracting & Converting Tenants' },
      { value: 'operations', label: 'Reducing Operating Costs' },
      { value: 'investment', label: 'Investor Reporting & Analytics' },
      { value: 'maintenance', label: 'Managing Maintenance & Facilities' },
    ],
  },
];

const allProducts = productSuites.flatMap(suite => suite.products);

const SolutionsFinderPage: React.FC<SolutionsFinderPageProps> = ({ navigateTo }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, answerValue: string) => {
    const newAnswers = { ...answers, [questionId]: answerValue };
    setAnswers(newAnswers);

    if (step < quizQuestions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const handleRestart = () => {
    setStep(0);
    setAnswers({});
    setShowResults(false);
  }

  const recommendations = useMemo(() => {
    if (!showResults) return { topSolution: null, recommendedProducts: [] };

    let topSolution: Solution | null = null;
    let recommendedProducts: Product[] = [];
    const productIds = new Set<string>();

    // Logic for recommendations
    const { role, portfolio, challenge } = answers;

    // Determine Top Solution
    if (portfolio === 'senior_living') topSolution = solutions.find(s => s.id === 'senior-care') ?? null;
    else if (portfolio === 'coworking') topSolution = solutions.find(s => s.id === 'coworking-flexible-space') ?? null;
    else if (challenge === 'investment') topSolution = solutions.find(s => s.id === 'asset-performance') ?? null;
    else if (challenge === 'marketing_leasing') topSolution = solutions.find(s => s.id === 'marketing') ?? null;
    else topSolution = solutions.find(s => s.id === 'property-management') ?? null;

    // Add related products based on top solution
    if (topSolution?.id === 'property-management') {
        productIds.add('indra-horizon').add('indra-flow');
    }
    if (topSolution?.id === 'asset-performance') {
        productIds.add('indra-investment-manager').add('indra-asset-iq');
    }

    // Add products based on challenges
    if (challenge === 'marketing_leasing') {
        productIds.add('skyline-portal-suite').add('skyline-crm-iq').add('skyline-reach');
    }
    if (challenge === 'operations') {
        productIds.add('skyline-bill-pay').add('skyline-bluepoint');
    }
     if (challenge === 'maintenance') {
        productIds.add('skyline-maintenance-iq').add('skyline-construction-manager');
    }

    // Add products based on role
     if (role === 'asset_manager' || role === 'owner_investor') {
        productIds.add('indra-investment-manager').add('indra-acquisition-manager').add('indra-asset-iq');
    }
    
    recommendedProducts = allProducts.filter(p => productIds.has(p.id));

    return { topSolution, recommendedProducts };
  }, [showResults, answers]);


  const progress = ((step + (showResults ? 1 : 0)) / quizQuestions.length) * 100;

  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200/80 overflow-hidden">
          <div className="p-8 sm:p-12">
            {!showResults ? (
              <div>
                <div className="mb-8">
                   <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="primary-bg h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                  {quizQuestions[step].question}
                </h1>
                <p className="text-gray-500 mb-8">Step {step + 1} of {quizQuestions.length}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {quizQuestions[step].options.map(option => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(quizQuestions[step].id, option.value)}
                      className="text-left p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform hover:scale-105"
                    >
                      <span className="text-lg font-semibold text-gray-800">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Your Personalized Recommendations</h2>
                <p className="text-lg text-gray-600 mb-12">Based on your answers, here are the Skyline solutions we think are the best fit for you.</p>

                {recommendations.topSolution && (
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Top Recommended Solution</h3>
                        <Card
                            icon={recommendations.topSolution.icon}
                            title={recommendations.topSolution.title}
                            description={recommendations.topSolution.description}
                            linkText="Explore Solution"
                            onLinkClick={() => navigateTo('solution-detail', recommendations.topSolution)}
                        />
                    </div>
                )}
                
                {recommendations.recommendedProducts.length > 0 && (
                    <div>
                         <h3 className="text-2xl font-bold text-gray-900 mb-4">Recommended Products</h3>
                         <div className="grid md:grid-cols-2 gap-8 text-left">
                            {recommendations.recommendedProducts.map(product => (
                                <div key={product.id} className="bg-gray-50 rounded-xl border border-gray-200/80 p-6 flex items-start gap-4 group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <div className="flex-shrink-0 w-12 h-12 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                                        {product.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900">{product.title}</h4>
                                        <p className="mt-1 text-sm text-gray-600">{product.description}</p>
                                        <button onClick={() => navigateTo('product-detail', product)} className="mt-3 text-sm font-semibold primary-text">
                                            Learn More &rarr;
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                 <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button onClick={() => navigateTo('contact')} className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white primary-bg rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
                        Request a Demo
                    </button>
                    <button onClick={handleRestart} className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-blue-700 bg-white rounded-lg border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-all transform hover:scale-105">
                        Start Over
                    </button>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsFinderPage;