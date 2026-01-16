import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { Calendar } from '../components/ui/calendar';
import { Star, Video, Phone, MessageSquare, CheckCircle2, Award } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ConsultationPageProps {
  onNavigate: (page: string) => void;
}

export function ConsultationPage({ onNavigate }: ConsultationPageProps) {
  const [selectedExpert, setSelectedExpert] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [consultationType, setConsultationType] = useState<'video' | 'phone' | 'chat'>('video');

  const experts = [
    {
      id: 1,
      name: 'Dr. Emily Carter',
      specialization: 'Urban Organic Farming',
      rating: 4.9,
      reviews: 127,
      experience: '15+ years',
      price: 49,
      image: 'https://images.unsplash.com/photo-1758524054106-06b11aec385c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGV4cGVydCUyMGFkdmlzb3J8ZW58MXx8fHwxNzY4MTQwODY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      certifications: ['Certified Organic Specialist', 'Master Gardener'],
      available: true,
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      specialization: 'Hydroponic Systems',
      rating: 4.8,
      reviews: 94,
      experience: '12+ years',
      price: 45,
      image: 'https://images.unsplash.com/photo-1758524054106-06b11aec385c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGV4cGVydCUyMGFkdmlzb3J8ZW58MXx8fHwxNzY4MTQwODY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      certifications: ['Hydroponic Expert', 'Urban Agriculture'],
      available: true,
    },
    {
      id: 3,
      name: 'Sarah Thompson',
      specialization: 'Balcony & Container Gardening',
      rating: 5.0,
      reviews: 156,
      experience: '10+ years',
      price: 39,
      image: 'https://images.unsplash.com/photo-1758524054106-06b11aec385c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGV4cGVydCUyMGFkdmlzb3J8ZW58MXx8fHwxNzY4MTQwODY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      certifications: ['Container Garden Specialist', 'Organic Certified'],
      available: true,
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialization: 'Pest Management & Soil Health',
      rating: 4.7,
      reviews: 83,
      experience: '18+ years',
      price: 55,
      image: 'https://images.unsplash.com/photo-1758524054106-06b11aec385c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGV4cGVydCUyMGFkdmlzb3J8ZW58MXx8fHwxNzY4MTQwODY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      certifications: ['PhD Agriculture', 'Soil Science Expert'],
      available: false,
    },
  ];

  const availableTimeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleBooking = () => {
    if (!selectedTime) {
      toast.error('Please select a time slot');
      return;
    }
    toast.success('Consultation booked successfully!');
    setSelectedExpert(null);
    setSelectedTime(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Expert Consultation
          </h1>
          <p className="text-muted-foreground">
            Connect with certified organic farming experts for personalized guidance
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Expert Consultants</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">5,000+</div>
              <div className="text-sm text-muted-foreground">Sessions Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">4.9</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Experts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experts.map((expert) => (
            <Card key={expert.id} className={!expert.available ? 'opacity-60' : ''}>
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {expert.available ? (
                    <Badge className="absolute top-2 right-2 bg-green-500">
                      Available
                    </Badge>
                  ) : (
                    <Badge className="absolute top-2 right-2" variant="secondary">
                      Busy
                    </Badge>
                  )}
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold mb-1">{expert.name}</h3>
                    <p className="text-sm text-muted-foreground">{expert.specialization}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-medium">{expert.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({expert.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{expert.experience} experience</span>
                  </div>

                  <div className="space-y-1">
                    {expert.certifications.map((cert, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-border">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-muted-foreground">Starting at</span>
                      <span className="text-2xl font-bold text-primary">${expert.price}</span>
                    </div>
                    <Button
                      className="w-full"
                      onClick={() => setSelectedExpert(expert.id)}
                      disabled={!expert.available}
                    >
                      {expert.available ? 'Book Consultation' : 'Not Available'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Booking Dialog */}
      <Dialog open={selectedExpert !== null} onOpenChange={() => setSelectedExpert(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Book Consultation</DialogTitle>
            <DialogDescription>
              Choose your preferred consultation type, date, and time
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Consultation Type */}
            <div>
              <h4 className="font-semibold mb-3">Consultation Type</h4>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant={consultationType === 'video' ? 'default' : 'outline'}
                  onClick={() => setConsultationType('video')}
                  className="flex flex-col items-center gap-2 h-auto py-4"
                >
                  <Video className="w-5 h-5" />
                  <span>Video Call</span>
                </Button>
                <Button
                  variant={consultationType === 'phone' ? 'default' : 'outline'}
                  onClick={() => setConsultationType('phone')}
                  className="flex flex-col items-center gap-2 h-auto py-4"
                >
                  <Phone className="w-5 h-5" />
                  <span>Phone Call</span>
                </Button>
                <Button
                  variant={consultationType === 'chat' ? 'default' : 'outline'}
                  onClick={() => setConsultationType('chat')}
                  className="flex flex-col items-center gap-2 h-auto py-4"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat</span>
                </Button>
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <h4 className="font-semibold mb-3">Select Date</h4>
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                  disabled={(date) => date < new Date()}
                />
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <h4 className="font-semibold mb-3">Select Time Slot</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {availableTimeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? 'default' : 'outline'}
                    onClick={() => setSelectedTime(time)}
                    size="sm"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Consultation Fee</span>
                <span className="font-semibold">
                  ${experts.find(e => e.id === selectedExpert)?.price}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Duration</span>
                <span>60 minutes</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setSelectedExpert(null)} className="flex-1">
                Cancel
              </Button>
              <Button onClick={handleBooking} className="flex-1">
                Confirm Booking
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
