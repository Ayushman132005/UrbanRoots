import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  CloudSun, 
  Sprout, 
  Calendar, 
  TrendingUp, 
  User,
  LogOut,
  ArrowRight,
  CheckCircle2,
  Clock,
  Droplets,
  Wind,
  Sun
} from 'lucide-react';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function DashboardPage({ onNavigate, onLogout }: DashboardPageProps) {
  const userName = 'Ayushman';
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

  const activeServices = [
    {
      id: 1,
      title: 'Balcony Garden Setup',
      type: 'Home Farming',
      status: 'In Progress',
      progress: 65,
      nextAction: 'Installation scheduled for Jan 15',
    },
    {
      id: 2,
      title: 'Monthly Consultation',
      type: 'Expert Support',
      status: 'Active',
      nextAction: 'Next session: Jan 18, 2:00 PM',
    },
  ];

  const recommendedCrops = [
    { name: 'Cherry Tomatoes', difficulty: 'Easy', season: 'Current', icon: '🍅' },
    { name: 'Basil', difficulty: 'Easy', season: 'Current', icon: '🌿' },
    { name: 'Lettuce', difficulty: 'Easy', season: 'Current', icon: '🥬' },
    { name: 'Bell Peppers', difficulty: 'Medium', season: 'Current', icon: '🫑' },
  ];

  const recentActivity = [
    { action: 'Garden setup consultation completed', time: '2 days ago', icon: CheckCircle2 },
    { action: 'Weather alert: Light rain expected', time: '3 days ago', icon: CloudSun },
    { action: 'Subscription plan upgraded', time: '1 week ago', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">
              {greeting}, {userName}! 👋
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your garden today
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => onLogout()}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Weather Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CloudSun className="w-5 h-5 text-primary" />
                  Today's Weather & Garden Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Urban City, UC</p>
                        <div className="text-4xl font-bold">24°C</div>
                        <p className="text-muted-foreground mt-1">Partly Cloudy</p>
                      </div>
                      <Sun className="w-12 h-12 text-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Droplets className="w-4 h-4 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Humidity</p>
                          <p className="font-medium">68%</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wind className="w-4 h-4 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Wind</p>
                          <p className="font-medium">12 km/h</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex items-start gap-3 mb-3">
                      <Sprout className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Garden Recommendation</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Perfect conditions for planting! Temperature and humidity are ideal.
                        </p>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => onNavigate('crops')}
                    >
                      View Crop Suggestions
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Crop Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Sprout className="w-5 h-5 text-primary" />
                    Recommended Crops for You
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => onNavigate('crops')}
                  >
                    View All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3">
                  {recommendedCrops.map((crop, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                      onClick={() => onNavigate('crops')}
                    >
                      <div className="text-3xl">{crop.icon}</div>
                      <div className="flex-1">
                        <div className="font-medium">{crop.name}</div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {crop.difficulty}
                          </Badge>
                          <span>Best Season</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Active Services */}
            <Card>
              <CardHeader>
                <CardTitle>Active Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeServices.map((service) => (
                  <div
                    key={service.id}
                    className="p-4 border border-border rounded-lg space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold mb-1">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.type}</p>
                      </div>
                      <Badge variant={service.status === 'Active' ? 'default' : 'secondary'}>
                        {service.status}
                      </Badge>
                    </div>
                    {service.progress && (
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{service.progress}%</span>
                        </div>
                        <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-primary h-full rounded-full transition-all"
                            style={{ width: `${service.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {service.nextAction}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  className="w-full justify-start" 
                  variant="outline"
                  onClick={() => onNavigate('consultation')}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
                <Button 
                  className="w-full justify-start" 
                  variant="outline"
                  onClick={() => onNavigate('home-farming')}
                >
                  <Sprout className="w-4 h-4 mr-2" />
                  Start Home Farming
                </Button>
                <Button 
                  className="w-full justify-start" 
                  variant="outline"
                  onClick={() => onNavigate('resale')}
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Sell Your Produce
                </Button>
              </CardContent>
            </Card>

            {/* Profile Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Your Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 pb-3 border-b border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{userName} Johnson</div>
                    <div className="text-sm text-muted-foreground">Member since Jan 2026</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Plan</span>
                    <span className="font-medium">Premium</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Garden Space</span>
                    <span className="font-medium">Balcony</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Crops</span>
                    <span className="font-medium">3 varieties</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-2">
                  View Full Profile
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div key={index} className="flex gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg h-fit">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">{activity.action}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
