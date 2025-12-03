import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Investments = () => {
  const investmentTypes = [
    {
      name: 'Акции',
      risk: 'Высокий',
      return: '15-30%',
      description: 'Покупка долей в компаниях с потенциалом роста',
      icon: 'TrendingUp',
      gradient: 'from-red-400 to-red-600',
    },
    {
      name: 'Облигации',
      risk: 'Низкий',
      return: '7-12%',
      description: 'Стабильный доход от государственных и корпоративных бумаг',
      icon: 'Shield',
      gradient: 'from-green-400 to-green-600',
    },
    {
      name: 'Фонды (ПИФ)',
      risk: 'Средний',
      return: '10-20%',
      description: 'Диверсифицированный портфель под управлением профессионалов',
      icon: 'Briefcase',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Валюта',
      risk: 'Средний',
      return: '5-15%',
      description: 'Торговля валютными парами и хеджирование рисков',
      icon: 'DollarSign',
      gradient: 'from-yellow-400 to-orange-600',
    },
  ];

  const strategies = [
    {
      name: 'Консервативная',
      risk: 'Минимальный',
      allocation: '80% облигации, 20% акции',
      targetReturn: '8-10%',
      features: ['Минимальный риск', 'Стабильный доход', 'Защита капитала'],
      icon: 'Shield',
    },
    {
      name: 'Сбалансированная',
      risk: 'Умеренный',
      allocation: '50% облигации, 50% акции',
      targetReturn: '12-15%',
      features: ['Баланс риска и доходности', 'Диверсификация', 'Средний горизонт'],
      icon: 'Scale',
      popular: true,
    },
    {
      name: 'Агрессивная',
      risk: 'Высокий',
      allocation: '20% облигации, 80% акции',
      targetReturn: '20-30%',
      features: ['Максимальная доходность', 'Высокий риск', 'Долгосрочный рост'],
      icon: 'Zap',
    },
  ];

  const popularStocks = [
    { name: 'Сбербанк', ticker: 'SBER', change: '+2.5%', price: '285 ₽', positive: true },
    { name: 'Газпром', ticker: 'GAZP', change: '+1.2%', price: '174 ₽', positive: true },
    { name: 'Яндекс', ticker: 'YNDX', change: '-0.8%', price: '3245 ₽', positive: false },
    { name: 'Лукойл', ticker: 'LKOH', change: '+3.1%', price: '6820 ₽', positive: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white">
      <Navigation />

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-4">
            <span className="bg-gradient-to-r from-primary to-[#FFC0E5] bg-clip-text text-transparent">
              Инвестиции 📈
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Приумножай капитал с помощью профессиональных инвестиций
          </p>
        </div>

        <Card className="mb-16 border-2 border-primary shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-montserrat">
              Начни инвестировать с минимальных сумм
            </CardTitle>
            <CardDescription className="text-lg">
              Открой брокерский счёт и получи доступ к рынку ценных бумаг
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="barbie-gradient text-white">
              <Icon name="TrendingUp" size={20} className="mr-2" />
              Открыть счёт
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Инвестиционный гид
            </Button>
          </CardContent>
        </Card>

        <div className="mb-16">
          <h2 className="text-3xl font-bold font-montserrat mb-8 flex items-center gap-3">
            <Icon name="Wallet" size={32} className="text-primary" />
            Популярные акции
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {popularStocks.map((stock, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border-2 hover:border-primary transition-all hover-scale cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-bold text-lg">{stock.ticker}</p>
                        <p className="text-sm text-muted-foreground">{stock.name}</p>
                      </div>
                      <Badge
                        className={stock.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
                      >
                        {stock.change}
                      </Badge>
                    </div>
                    <p className="text-2xl font-bold text-primary">{stock.price}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold font-montserrat mb-8 flex items-center gap-3">
            <Icon name="BarChart3" size={32} className="text-primary" />
            Инвестиционные инструменты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentTypes.map((type, index) => (
              <Card key={index} className="hover-scale border-2 hover:border-primary transition-all">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.gradient} flex items-center justify-center mb-4`}>
                    <Icon name={type.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-montserrat">{type.name}</CardTitle>
                  <CardDescription>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Риск</p>
                        <p className="text-sm font-bold text-primary">{type.risk}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Доходность</p>
                        <p className="text-sm font-bold text-primary">{type.return}</p>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold font-montserrat mb-8 flex items-center gap-3">
            <Icon name="Target" size={32} className="text-primary" />
            Инвестиционные стратегии
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {strategies.map((strategy, index) => (
              <Card
                key={index}
                className={`hover-scale border-2 ${
                  strategy.popular ? 'border-primary shadow-lg' : 'hover:border-primary'
                }`}
              >
                {strategy.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">
                      <Icon name="Star" size={14} className="mr-1" />
                      Популярная
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 mx-auto">
                    <Icon name={strategy.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-montserrat text-center">{strategy.name}</CardTitle>
                  <CardDescription className="text-center">
                    <div className="mt-4 space-y-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Уровень риска</p>
                        <p className="text-sm font-bold text-primary">{strategy.risk}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Распределение</p>
                        <p className="text-sm font-bold text-foreground">{strategy.allocation}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Целевая доходность</p>
                        <p className="text-lg font-bold text-green-600">{strategy.targetReturn}</p>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {strategy.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full barbie-gradient text-white">
                    Выбрать стратегию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="barbie-gradient text-white mt-16">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <h3 className="text-2xl font-bold font-montserrat mb-4">
                ИИС — налоговый вычет до 52 000 ₽
              </h3>
              <p className="text-white/90 mb-6">
                Открой Индивидуальный инвестиционный счёт и получай налоговые льготы на взносы или доход
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Открыть ИИС
                <Icon name="Gift" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="space-y-4">
              {[
                'Вычет 13% от внесённой суммы',
                'Или освобождение от налога на прибыль',
                'Минимальный срок — 3 года',
                'Максимальный взнос — 1 млн ₽/год',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-0.5">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <span className="text-white/95">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Investments;
