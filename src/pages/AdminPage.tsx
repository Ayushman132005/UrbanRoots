import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  Package,
  UserCheck,
  Video,
  LogOut,
  Search,
  MoreHorizontal,
  AlertCircle,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { Input } from '../components/ui/input';

interface AdminPageProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function AdminPage({ onNavigate, onLogout }: AdminPageProps) {
  const stats = [
    {
      title: 'Total Users',
      value: '10,247',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
    },
    {
      title: 'Active Consultations',
      value: '156',
      change: '+8.3%',
      trend: 'up',
      icon: Video,
    },
    {
      title: 'Monthly Revenue',
      value: '$45,890',
      change: '+15.2%',
      trend: 'up',
      icon: TrendingUp,
    },
    {
      title: 'Active Gardens',
      value: '3,428',
      change: '+9.1%',
      trend: 'up',
      icon: Package,
    },
  ];

  const recentUsers = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah.j@email.com', plan: 'Premium', status: 'Active', joined: '2026-01-10' },
    { id: 2, name: 'Michael Chen', email: 'mchen@email.com', plan: 'Essentials', status: 'Active', joined: '2026-01-09' },
    { id: 3, name: 'Emma Davis', email: 'emma.d@email.com', plan: 'Premium', status: 'Active', joined: '2026-01-08' },
    { id: 4, name: 'James Wilson', email: 'jwilson@email.com', plan: 'Starter', status: 'Pending', joined: '2026-01-08' },
    { id: 5, name: 'Lisa Anderson', email: 'lisa.a@email.com', plan: 'Essentials', status: 'Active', joined: '2026-01-07' },
  ];

  const experts = [
    { id: 1, name: 'Dr. Emily Carter', specialty: 'Urban Farming', rating: 4.9, sessions: 127, status: 'Active' },
    { id: 2, name: 'Michael Rodriguez', specialty: 'Hydroponics', rating: 4.8, sessions: 94, status: 'Active' },
    { id: 3, name: 'Sarah Thompson', specialty: 'Container Gardening', rating: 5.0, sessions: 156, status: 'Active' },
    { id: 4, name: 'Dr. James Wilson', specialty: 'Pest Management', rating: 4.7, sessions: 83, status: 'Busy' },
  ];

  const consultations = [
    { id: 1, user: 'Sarah Johnson', expert: 'Dr. Emily Carter', date: '2026-01-15', time: '2:00 PM', type: 'Video', status: 'Scheduled' },
    { id: 2, user: 'Michael Chen', expert: 'Sarah Thompson', date: '2026-01-14', time: '10:00 AM', type: 'Phone', status: 'Completed' },
    { id: 3, user: 'Emma Davis', expert: 'Michael Rodriguez', date: '2026-01-14', time: '4:00 PM', type: 'Video', status: 'Completed' },
    { id: 4, user: 'James Wilson', expert: 'Dr. Emily Carter', date: '2026-01-16', time: '11:00 AM', type: 'Chat', status: 'Scheduled' },
  ];

  const cropDemand = [
    { crop: 'Cherry Tomatoes', demand: 'High', listings: 45, avgPrice: '$4.20/lb' },
    { crop: 'Basil', demand: 'High', listings: 38, avgPrice: '$3.50/bunch' },
    { crop: 'Lettuce', demand: 'Medium', listings: 52, avgPrice: '$2.50/head' },
    { crop: 'Bell Peppers', demand: 'Medium', listings: 31, avgPrice: '$5.00/lb' },
    { crop: 'Cucumbers', demand: 'Low', listings: 28, avgPrice: '$1.50/each' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage users, experts, consultations, and platform analytics
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant={stat.trend === 'up' ? 'default' : 'secondary'}>
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="experts">Experts</TabsTrigger>
            <TabsTrigger value="consultations">Consultations</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    User Management
                  </CardTitle>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input placeholder="Search users..." className="pl-10" />
                    </div>
                    <Button>Add User</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Plan</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{user.plan}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-muted-foreground">{user.joined}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Experts Tab */}
          <TabsContent value="experts">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <CardTitle className="flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-primary" />
                    Expert Management
                  </CardTitle>
                  <Button>Add Expert</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Specialty</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Sessions</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {experts.map((expert) => (
                        <TableRow key={expert.id}>
                          <TableCell className="font-medium">{expert.name}</TableCell>
                          <TableCell>{expert.specialty}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <span className="font-medium">{expert.rating}</span>
                              <span className="text-muted-foreground">/ 5.0</span>
                            </div>
                          </TableCell>
                          <TableCell>{expert.sessions}</TableCell>
                          <TableCell>
                            <Badge variant={expert.status === 'Active' ? 'default' : 'secondary'}>
                              {expert.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Consultations Tab */}
          <TabsContent value="consultations">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Consultation Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Expert</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {consultations.map((consultation) => (
                        <TableRow key={consultation.id}>
                          <TableCell className="font-medium">{consultation.user}</TableCell>
                          <TableCell>{consultation.expert}</TableCell>
                          <TableCell>{consultation.date}</TableCell>
                          <TableCell>{consultation.time}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{consultation.type}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {consultation.status === 'Scheduled' ? (
                                <Clock className="w-4 h-4 text-yellow-500" />
                              ) : (
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                              )}
                              <span>{consultation.status}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Crop Demand */}
              <Card>
                <CardHeader>
                  <CardTitle>Crop Demand & Supply</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cropDemand.map((item, index) => (
                      <div key={index} className="flex items-center justify-between pb-3 border-b border-border last:border-0">
                        <div>
                          <div className="font-medium">{item.crop}</div>
                          <div className="text-sm text-muted-foreground">
                            {item.listings} active listings
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={
                              item.demand === 'High' ? 'default' : 
                              item.demand === 'Medium' ? 'secondary' : 
                              'outline'
                            }
                          >
                            {item.demand}
                          </Badge>
                          <div className="text-sm text-muted-foreground mt-1">
                            {item.avgPrice}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Platform Health */}
              <Card>
                <CardHeader>
                  <CardTitle>Platform Health</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">System Status</span>
                    </div>
                    <Badge variant="default" className="bg-green-500">Operational</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">API Response Time</span>
                    </div>
                    <span className="font-medium">142ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Active Sessions</span>
                    </div>
                    <span className="font-medium">1,234</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">Pending Reviews</span>
                    </div>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Success Rate</span>
                    </div>
                    <span className="font-medium">99.7%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Revenue Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>Revenue chart visualization</p>
                    <p className="text-sm mt-1">Connect analytics service for detailed insights</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
