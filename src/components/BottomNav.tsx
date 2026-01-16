import { Home, Calendar, Sprout, ShoppingBag, User } from 'lucide-react';

interface BottomNavProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function BottomNav({ onNavigate, currentPage }: BottomNavProps) {
  const navItems = [
    { icon: Home, label: 'Home', page: 'dashboard' },
    { icon: Calendar, label: 'Consult', page: 'consultation' },
    { icon: Sprout, label: 'Crops', page: 'crops' },
    { icon: ShoppingBag, label: 'Resale', page: 'resale' },
    { icon: User, label: 'Profile', page: 'profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.page;
          return (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                isActive 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'fill-primary/20' : ''}`} />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
