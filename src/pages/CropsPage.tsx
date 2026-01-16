import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  CloudSun, 
  Droplets, 
  Wind, 
  Sun, 
  Thermometer,
  TrendingUp,
  Calendar,
  Leaf,
  DollarSign
} from 'lucide-react';

interface CropsPageProps {
  onNavigate: (page: string) => void;
}

export function CropsPage({ onNavigate }: CropsPageProps) {
  const [selectedSeason, setSelectedSeason] = useState<'current' | 'spring' | 'summer' | 'fall' | 'winter'>('current');

  const weatherData = {
    temperature: 24,
    humidity: 68,
    wind: 12,
    uvIndex: 'Moderate',
    precipitation: 10,
    condition: 'Partly Cloudy',
    location: 'Urban City, UC',
  };

  const crops = [
    {
      name: 'Cherry Tomatoes',
      icon: '🍅',
      difficulty: 'Easy',
      growthTime: '60-80 days',
      season: ['spring', 'summer', 'current'],
      spaceNeeded: 'Medium',
      sunlight: 'Full Sun (6-8 hours)',
      water: 'Regular',
      expectedYield: '5-10 lbs/plant',
      profitPotential: 'High',
      price: '$3-5/lb',
      tips: ['Requires support/stakes', 'Water consistently', 'Harvest when fully colored'],
    },
    {
      name: 'Lettuce',
      icon: '🥬',
      difficulty: 'Easy',
      growthTime: '30-45 days',
      season: ['spring', 'fall', 'current'],
      spaceNeeded: 'Small',
      sunlight: 'Partial Shade (4-6 hours)',
      water: 'Frequent',
      expectedYield: '8-12 heads',
      profitPotential: 'Medium',
      price: '$2-3/head',
      tips: ['Harvest outer leaves first', 'Grows well in containers', 'Succession plant every 2 weeks'],
    },
    {
      name: 'Basil',
      icon: '🌿',
      difficulty: 'Easy',
      growthTime: '20-30 days',
      season: ['spring', 'summer', 'current'],
      spaceNeeded: 'Small',
      sunlight: 'Full Sun (6-8 hours)',
      water: 'Regular',
      expectedYield: 'Continuous harvest',
      profitPotential: 'High',
      price: '$3-4/bunch',
      tips: ['Pinch flowers to extend harvest', 'Harvest regularly for bushier plants', 'Easy to propagate'],
    },
    {
      name: 'Bell Peppers',
      icon: '🫑',
      difficulty: 'Medium',
      growthTime: '70-90 days',
      season: ['summer', 'current'],
      spaceNeeded: 'Medium',
      sunlight: 'Full Sun (6-8 hours)',
      water: 'Regular',
      expectedYield: '6-10 peppers/plant',
      profitPotential: 'High',
      price: '$4-6/lb',
      tips: ['Requires warm temperatures', 'Stake for support', 'Harvest when fully sized'],
    },
    {
      name: 'Carrots',
      icon: '🥕',
      difficulty: 'Medium',
      growthTime: '60-75 days',
      season: ['spring', 'fall'],
      spaceNeeded: 'Small',
      sunlight: 'Full Sun (6 hours)',
      water: 'Regular',
      expectedYield: '10-15 carrots',
      profitPotential: 'Medium',
      price: '$2-3/lb',
      tips: ['Needs deep, loose soil', 'Thin seedlings for spacing', 'Harvest based on size preference'],
    },
    {
      name: 'Cucumber',
      icon: '🥒',
      difficulty: 'Easy',
      growthTime: '50-70 days',
      season: ['summer'],
      spaceNeeded: 'Large',
      sunlight: 'Full Sun (6-8 hours)',
      water: 'Frequent',
      expectedYield: '10-15 cucumbers',
      profitPotential: 'Medium',
      price: '$1-2 each',
      tips: ['Provide trellis for vertical growth', 'Harvest frequently', 'Keep soil moist'],
    },
  ];

  const filteredCrops = crops.filter(crop => 
    selectedSeason === 'current' || crop.season.includes(selectedSeason)
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Hard':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Crop & Weather Recommendations
          </h1>
          <p className="text-muted-foreground">
            Smart crop suggestions based on real-time weather and seasonal patterns
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Season Filter */}
            <Card>
              <CardContent className="p-4">
                <Tabs value={selectedSeason} onValueChange={(v) => setSelectedSeason(v as any)}>
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="current">Current</TabsTrigger>
                    <TabsTrigger value="spring">Spring</TabsTrigger>
                    <TabsTrigger value="summer">Summer</TabsTrigger>
                    <TabsTrigger value="fall">Fall</TabsTrigger>
                    <TabsTrigger value="winter">Winter</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardContent>
            </Card>

            {/* Crops Grid */}
            <div className="grid gap-6">
              {filteredCrops.map((crop, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 bg-primary/5 rounded-xl flex items-center justify-center text-5xl">
                          {crop.icon}
                        </div>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div>
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="text-xl font-semibold">{crop.name}</h3>
                            <Badge className={getDifficultyColor(crop.difficulty)}>
                              {crop.difficulty}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {crop.growthTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <Leaf className="w-4 h-4" />
                              {crop.spaceNeeded}
                            </span>
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Sunlight</p>
                            <div className="flex items-center gap-2">
                              <Sun className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium">{crop.sunlight}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Water Needs</p>
                            <div className="flex items-center gap-2">
                              <Droplets className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium">{crop.water}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-muted/50 p-4 rounded-lg">
                          <div className="grid sm:grid-cols-3 gap-4 mb-3">
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Expected Yield</p>
                              <p className="font-semibold text-sm">{crop.expectedYield}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Market Price</p>
                              <p className="font-semibold text-sm text-primary">{crop.price}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Profit Potential</p>
                              <Badge variant={crop.profitPotential === 'High' ? 'default' : 'secondary'}>
                                {crop.profitPotential}
                              </Badge>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-2">Growing Tips:</p>
                            <ul className="space-y-1">
                              {crop.tips.map((tip, i) => (
                                <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                                  <span className="text-primary mt-0.5">•</span>
                                  <span>{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <Button className="w-full sm:w-auto">
                          Add to Garden Plan
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weather Widget */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CloudSun className="w-5 h-5 text-primary" />
                  Current Weather
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{weatherData.location}</p>
                  <div className="text-4xl font-bold">{weatherData.temperature}°C</div>
                  <p className="text-muted-foreground">{weatherData.condition}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Humidity</p>
                      <p className="font-medium">{weatherData.humidity}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Wind</p>
                      <p className="font-medium">{weatherData.wind} km/h</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">UV Index</p>
                      <p className="font-medium">{weatherData.uvIndex}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CloudSun className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Rain</p>
                      <p className="font-medium">{weatherData.precipitation}%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-3 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Thermometer className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-xs font-medium mb-1">Weather Insight</p>
                      <p className="text-xs text-muted-foreground">
                        Ideal conditions for planting. Temperature and humidity levels are perfect for most crops.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profit Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Profit Estimator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Estimated monthly income from a balanced garden:
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm">Fresh Produce</span>
                    <span className="font-semibold">$150-250</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm">Surplus Sales</span>
                    <span className="font-semibold">$80-120</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm">Cost Savings</span>
                    <span className="font-semibold text-primary">$100-180</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-semibold">Total Value</span>
                    <span className="text-xl font-bold text-primary">$330-550</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" onClick={() => onNavigate('home-farming')}>
                  Start Your Garden
                </Button>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle>This Month's Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Start indoor seedlings for summer crops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Droplets className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Check soil moisture daily during warm weather</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Harvest lettuce regularly for continuous growth</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
