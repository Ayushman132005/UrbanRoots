import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  Package,
  CheckCircle2,
  Clock,
  Leaf
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ResalePageProps {
  onNavigate: (page: string) => void;
}

export function ResalePage({ onNavigate }: ResalePageProps) {
  const [harvestData, setHarvestData] = useState({
    crop: '',
    quantity: '',
    unit: 'lbs',
    quality: 'premium',
    description: '',
  });

  const cropPrices = {
    'Tomatoes': { min: 3, max: 5, unit: 'lb' },
    'Lettuce': { min: 2, max: 3, unit: 'head' },
    'Basil': { min: 3, max: 4, unit: 'bunch' },
    'Bell Peppers': { min: 4, max: 6, unit: 'lb' },
    'Cucumbers': { min: 1, max: 2, unit: 'each' },
    'Carrots': { min: 2, max: 3, unit: 'lb' },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!harvestData.crop || !harvestData.quantity) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Harvest listing created successfully!');
    setHarvestData({
      crop: '',
      quantity: '',
      unit: 'lbs',
      quality: 'premium',
      description: '',
    });
  };

  const getSuggestedPrice = () => {
    const crop = harvestData.crop as keyof typeof cropPrices;
    if (crop && cropPrices[crop]) {
      const price = cropPrices[crop];
      const quantity = parseFloat(harvestData.quantity) || 0;
      const basePrice = harvestData.quality === 'premium' ? price.max : price.min;
      return (basePrice * quantity).toFixed(2);
    }
    return '0.00';
  };

  const recentSales = [
    { id: 1, crop: 'Cherry Tomatoes', quantity: '5 lbs', price: '$22.50', status: 'Sold', date: '2 days ago' },
    { id: 2, crop: 'Fresh Basil', quantity: '8 bunches', price: '$28.00', status: 'Sold', date: '5 days ago' },
    { id: 3, crop: 'Lettuce', quantity: '12 heads', price: '$30.00', status: 'Pending', date: '1 week ago' },
  ];

  const earningsSummary = {
    thisMonth: 420,
    lastMonth: 385,
    totalEarnings: 2150,
    pendingPayments: 85,
    activeListing: 3,
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Surplus Produce Resale
          </h1>
          <p className="text-muted-foreground">
            List your extra harvest and earn additional income from your garden
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Listing Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  List Your Harvest
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="crop">Crop Type *</Label>
                      <Select value={harvestData.crop} onValueChange={(v) => setHarvestData({ ...harvestData, crop: v })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select crop" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(cropPrices).map((crop) => (
                            <SelectItem key={crop} value={crop}>{crop}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity *</Label>
                      <div className="flex gap-2">
                        <Input
                          id="quantity"
                          type="number"
                          placeholder="0"
                          value={harvestData.quantity}
                          onChange={(e) => setHarvestData({ ...harvestData, quantity: e.target.value })}
                          className="flex-1"
                        />
                        <Select value={harvestData.unit} onValueChange={(v) => setHarvestData({ ...harvestData, unit: v })}>
                          <SelectTrigger className="w-24">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lbs">lbs</SelectItem>
                            <SelectItem value="kg">kg</SelectItem>
                            <SelectItem value="units">units</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quality">Quality Grade</Label>
                    <Select value={harvestData.quality} onValueChange={(v) => setHarvestData({ ...harvestData, quality: v })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="premium">Premium (Highest price)</SelectItem>
                        <SelectItem value="standard">Standard (Market price)</SelectItem>
                        <SelectItem value="economy">Economy (Lower price, quick sale)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description (Optional)</Label>
                    <Textarea
                      id="description"
                      placeholder="Add details about your harvest, growing methods, harvest date, etc."
                      value={harvestData.description}
                      onChange={(e) => setHarvestData({ ...harvestData, description: e.target.value })}
                      rows={3}
                    />
                  </div>

                  {harvestData.crop && harvestData.quantity && (
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Suggested Price</span>
                        <span className="text-2xl font-bold text-primary">${getSuggestedPrice()}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Based on current market rates and quality grade. Actual price may vary.
                      </p>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1">
                      Create Listing
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setHarvestData({
                      crop: '',
                      quantity: '',
                      unit: 'lbs',
                      quality: 'premium',
                      description: '',
                    })}>
                      Clear
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Recent Sales */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                  Recent Sales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="sold">Sold</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="space-y-3 mt-4">
                    {recentSales.map((sale) => (
                      <div key={sale.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <Leaf className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">{sale.crop}</div>
                            <div className="text-sm text-muted-foreground">{sale.quantity}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-primary">{sale.price}</div>
                          <Badge variant={sale.status === 'Sold' ? 'default' : 'secondary'} className="text-xs">
                            {sale.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="sold" className="mt-4">
                    <p className="text-center text-muted-foreground py-8">
                      Sold items will appear here
                    </p>
                  </TabsContent>
                  <TabsContent value="pending" className="mt-4">
                    <p className="text-center text-muted-foreground py-8">
                      Pending items will appear here
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Earnings Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Earnings Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-br from-primary to-primary/80 p-4 rounded-lg text-primary-foreground">
                  <p className="text-sm opacity-90 mb-1">This Month</p>
                  <div className="text-3xl font-bold">${earningsSummary.thisMonth}</div>
                  <div className="flex items-center gap-1 text-sm mt-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>+9% from last month</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">Last Month</span>
                    <span className="font-semibold">${earningsSummary.lastMonth}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">Total Earnings</span>
                    <span className="font-semibold">${earningsSummary.totalEarnings}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">Pending</span>
                    <span className="font-semibold text-yellow-600">${earningsSummary.pendingPayments}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Active Listings</span>
                    <span className="font-semibold">{earningsSummary.activeListing}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  View Full Report
                </Button>
              </CardContent>
            </Card>

            {/* Market Prices */}
            <Card>
              <CardHeader>
                <CardTitle>Current Market Prices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(cropPrices).map(([crop, price]) => (
                    <div key={crop} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{crop}</span>
                      <span className="font-medium">${price.min}-${price.max}/{price.unit}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Prices updated daily based on local market demand
                </p>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Selling Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Harvest produce at peak ripeness for best prices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>List within 24 hours of harvest for freshness guarantee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Package className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Include clear photos and descriptions for better sales</span>
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
