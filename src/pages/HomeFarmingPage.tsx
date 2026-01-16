import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { CheckCircle2, Home, Building2, Trees, Package, Calendar, Leaf, Droplets } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface HomeFarmingPageProps {
  onNavigate: (page: string) => void;
}

export function HomeFarmingPage({ onNavigate }: HomeFarmingPageProps) {
  const [selectedSpace, setSelectedSpace] = useState<'balcony' | 'terrace' | 'backyard' | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const spaces = [
    {
      id: 'balcony',
      icon: Home,
      title: 'Balcony',
      description: 'Perfect for apartments with 50-100 sq ft',
      suitability: ['Container gardening', '5-8 crop varieties', 'Vertical growing'],
    },
    {
      id: 'terrace',
      icon: Building2,
      title: 'Terrace',
      description: 'Ideal for 100-300 sq ft rooftop spaces',
      suitability: ['Raised beds', '10-15 crop varieties', 'Advanced setup'],
    },
    {
      id: 'backyard',
      icon: Trees,
      title: 'Backyard',
      description: 'Best for 300+ sq ft outdoor areas',
      suitability: ['Ground beds', '15-20+ varieties', 'Full garden setup'],
    },
  ];

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 99,
      period: 'one-time',
      features: [
        'Initial consultation (1 hour)',
        'Basic garden setup guide',
        'Seed starter kit (3 varieties)',
        'Soil preparation guide',
        'Email support for 1 month',
      ],
      popular: false,
    },
    {
      id: 'essentials',
      name: 'Essentials',
      price: 49,
      period: 'month',
      features: [
        'Complete garden setup',
        'Seed kit (5-8 varieties)',
        'Organic soil & fertilizers',
        'Monthly expert check-in',
        'Weather alerts',
        'Priority email support',
      ],
      popular: true,
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 89,
      period: 'month',
      features: [
        'Everything in Essentials',
        'On-site installation',
        'Seed kit (10-15 varieties)',
        'Bi-weekly expert visits',
        'Pest management kit',
        '24/7 chat support',
        'Harvest optimization tips',
      ],
      popular: false,
    },
  ];

  const setupTimeline = [
    {
      step: 1,
      title: 'Consultation & Planning',
      duration: 'Day 1-2',
      description: 'Expert visits your space, assesses conditions, and creates custom plan',
      icon: Calendar,
    },
    {
      step: 2,
      title: 'Space Preparation',
      duration: 'Day 3-5',
      description: 'Setup containers, soil preparation, and irrigation system installation',
      icon: Package,
    },
    {
      step: 3,
      title: 'Planting & Training',
      duration: 'Day 6-7',
      description: 'Seed planting, initial care training, and maintenance schedule setup',
      icon: Leaf,
    },
    {
      step: 4,
      title: 'Ongoing Support',
      duration: 'Ongoing',
      description: 'Regular monitoring, expert guidance, and harvest optimization',
      icon: Droplets,
    },
  ];

  const handleSubscribe = (planId: string) => {
    if (!selectedSpace) {
      toast.error('Please select your garden space type first');
      return;
    }
    toast.success(`Subscribed to ${planId} plan successfully!`);
    setSelectedPlan(planId);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Home-Based Organic Farming
          </h1>
          <p className="text-muted-foreground">
            Transform your space into a thriving organic garden with expert support
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-12 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559681125-bb99bd424b63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwZ2FyZGVuJTIwdXJiYW58ZW58MXx8fHwxNzY4MDY5MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Urban garden"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Start Growing Your Own Food Today
              </h2>
              <p className="text-white/90 max-w-2xl">
                Join thousands of urban farmers growing fresh, organic vegetables at home
              </p>
            </div>
          </div>
        </div>

        {/* Space Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Step 1: Choose Your Garden Space
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {spaces.map((space) => {
              const Icon = space.icon;
              const isSelected = selectedSpace === space.id;
              return (
                <Card
                  key={space.id}
                  className={`cursor-pointer transition-all ${
                    isSelected
                      ? 'border-primary shadow-lg ring-2 ring-primary/20'
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedSpace(space.id as any)}
                >
                  <CardContent className="p-6">
                    <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="mb-2">{space.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {space.description}
                    </p>
                    <div className="space-y-2">
                      {space.suitability.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    {isSelected && (
                      <Badge className="mt-4 w-full justify-center">Selected</Badge>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Subscription Plans */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Step 2: Select Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative ${
                  plan.popular ? 'border-primary shadow-lg' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex flex-col gap-2">
                    <span>{plan.name}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-primary">${plan.price}</span>
                      <span className="text-sm text-muted-foreground">/{plan.period}</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => handleSubscribe(plan.id)}
                    disabled={!selectedSpace}
                  >
                    {selectedPlan === plan.id ? 'Current Plan' : 'Subscribe Now'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Setup Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Garden Setup Timeline
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {setupTimeline.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.step}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                        {item.step}
                      </div>
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <Badge variant="outline" className="mb-3 text-xs">
                      {item.duration}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Maintenance Schedule Preview */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>What's Included in Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="weekly" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
                </TabsList>
                <TabsContent value="weekly" className="space-y-4 pt-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                      <Droplets className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium mb-1">Watering Schedule</div>
                        <p className="text-sm text-muted-foreground">
                          Customized watering plan based on crop needs and weather
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                      <Leaf className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium mb-1">Growth Monitoring</div>
                        <p className="text-sm text-muted-foreground">
                          Track plant health and receive growth optimization tips
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="monthly" className="space-y-4 pt-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                      <Package className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium mb-1">Fertilizer Application</div>
                        <p className="text-sm text-muted-foreground">
                          Organic fertilizer delivery and application guidance
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium mb-1">Expert Check-in</div>
                        <p className="text-sm text-muted-foreground">
                          Monthly consultation to address concerns and optimize yield
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="seasonal" className="space-y-4 pt-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                      <Leaf className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium mb-1">Crop Rotation</div>
                        <p className="text-sm text-muted-foreground">
                          Seasonal planting plan for year-round production
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                      <Package className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium mb-1">Soil Renewal</div>
                        <p className="text-sm text-muted-foreground">
                          Seasonal soil testing and nutrient replenishment
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
