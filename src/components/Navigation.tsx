import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/cards', label: 'Карты', icon: 'CreditCard' },
    { path: '/loans', label: 'Кредиты', icon: 'Wallet' },
    { path: '/deposits', label: 'Вклады', icon: 'PiggyBank' },
    { path: '/mortgage', label: 'Ипотека', icon: 'House' },
    { path: '/investments', label: 'Инвестиции', icon: 'TrendingUp' },
    { path: '/about', label: 'О банке', icon: 'Info' },
    { path: '/contacts', label: 'Контакты', icon: 'Phone' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <span className="text-3xl">💖</span>
            <span className="font-montserrat font-extrabold bg-gradient-to-r from-primary to-[#FFC0E5] bg-clip-text text-transparent">
              Барби Банк
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all hover:bg-secondary/50 flex items-center gap-2 ${
                  isActive(link.path)
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'text-foreground'
                }`}
              >
                <Icon name={link.icon as any} size={18} />
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/settings/installations"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button variant="outline" className="border-primary text-primary hover:bg-secondary gap-2">
                <Icon name="Download" size={18} />
                Скачать код
              </Button>
            </a>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="text-center mb-4">
                  <span className="text-4xl">💖</span>
                  <h2 className="text-2xl font-bold text-primary mt-2 font-montserrat">
                    Барби Банк
                  </h2>
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                      isActive(link.path)
                        ? 'bg-primary text-white'
                        : 'hover:bg-secondary/50 text-foreground'
                    }`}
                  >
                    <Icon name={link.icon as any} size={20} />
                    <span>{link.label}</span>
                  </Link>
                ))}
                <a
                  href="https://github.com/settings/installations"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all bg-primary text-white hover:bg-primary/90"
                >
                  <Icon name="Download" size={20} />
                  <span>Скачать код</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;