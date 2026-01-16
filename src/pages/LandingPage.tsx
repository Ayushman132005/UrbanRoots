import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Sprout, 
  Users, 
  Home, 
  TrendingUp, 
  CloudSun, 
  Star,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const services = [
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Connect with certified organic farming experts for personalized guidance and support.',
    },
    {
      icon: Home,
      title: 'Home-Based Organic Farming',
      description: 'Transform your balcony, terrace, or backyard into a thriving organic garden.',
    },
    {
      icon: CloudSun,
      title: 'Crop & Weather Recommendations',
      description: 'Get real-time weather data and intelligent crop suggestions for optimal yield.',
    },
    {
      icon: TrendingUp,
      title: 'Surplus Produce Resale',
      description: 'Sell your extra harvest through our marketplace and earn additional income.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Urban Gardener',
      content: 'UrbanRoot transformed my small balcony into a productive garden. Fresh tomatoes and herbs every week!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Health Enthusiast',
      content: 'Finally, 100% trusted organic vegetables. The expert consultation helped me get started easily.',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      role: 'Busy Professional',
      content: 'The maintenance support is excellent. I grow my own food without spending hours on gardening.',
      rating: 5,
    },
  ];

  const features = [
    '100% Certified Organic',
    'Expert-Guided Setup',
    'Weather-Smart Recommendations',
    'Flexible Subscription Plans',
    'Community Marketplace',
    'Ongoing Support',
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary to-primary/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                🌱 Sustainable Urban Farming
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Grow Trust.<br />Eat Organic.
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Access 100% trusted organic vegetables through technology-enabled urban farming. 
                Expert guidance, home-based growing, and surplus resale—all in one ecosystem.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" onClick={() => onNavigate('signup')}>
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => onNavigate('consultation')}>
                  Book Consultation
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                <div>
                  <div className="text-2xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Expert Consultants</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1657288089316-c0350003ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdmVnZXRhYmxlcyUyMGZhcm18ZW58MXx8fHwxNzY4MDc5NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Organic vegetables"
                className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Sprout className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Fresh Daily</div>
                    <div className="text-sm text-muted-foreground">Harvest to Table</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete ecosystem for urban organic farming, from consultation to harvest
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                onClick={() => {
                  if (service.title.includes('Consultation')) onNavigate('consultation');
                  if (service.title.includes('Home-Based')) onNavigate('home-farming');
                  if (service.title.includes('Crop')) onNavigate('crops');
                  if (service.title.includes('Resale')) onNavigate('resale');
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Weather Preview */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 mb-4">
                Smart Technology
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Weather-Smart Crop Recommendations
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our intelligent system analyzes real-time weather data, soil conditions, and seasonal patterns 
                to recommend the best crops for your location and space.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Real-time weather monitoring and alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Seasonal crop recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Expected yield and profit estimations</span>
                </li>
              </ul>
              <Button onClick={() => onNavigate('crops')}>
                Explore Recommendations
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="mb-1">Current Weather</h3>
                  <p className="text-sm text-muted-foreground">Urban City, UC</p>
                </div>
                <CloudSun className="w-10 h-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-6">24°C</div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm text-muted-foreground">Humidity</div>
                  <div className="font-semibold">68%</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Wind</div>
                  <div className="font-semibold">12 km/h</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">UV Index</div>
                  <div className="font-semibold">Moderate</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Precipitation</div>
                  <div className="font-semibold">10%</div>
                </div>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Sprout className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Recommended Crops</div>
                    <div className="text-sm text-muted-foreground">
                      Tomatoes, Lettuce, Herbs, Bell Peppers
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose UrbanRoot?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for successful urban organic farming
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Trusted by Urban Farmers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our community has to say about their UrbanRoot experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Growing?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of urban farmers who are growing fresh, organic vegetables at home. 
            Get started today with expert guidance.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onNavigate('signup')}
            >
              Create Free Account
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => onNavigate('consultation')}
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
