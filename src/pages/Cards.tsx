import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Cards = () => {
  const debitCards = [
    {
      name: 'Барби Classic',
      cashback: 'До 5%',
      annual: 'Бесплатно',
      features: ['Снятие без комиссии', 'Переводы бесплатно', 'Программа лояльности'],
      gradient: 'from-pink-400 to-pink-600',
    },
    {
      name: 'Барби Premium',
      cashback: 'До 10%',
      annual: '990 ₽/год',
      features: ['Приоритетная поддержка', 'VIP-зал в аэропорту', 'Консьерж-сервис'],
      gradient: 'from-purple-500 to-pink-600',
      popular: true,
    },
    {
      name: 'Барби Gold',
      cashback: 'До 15%',
      annual: '2 990 ₽/год',
      features: ['Личный менеджер', 'Страхование путешествий', 'Безлимитный кэшбэк'],
      gradient: 'from-yellow-400 to-pink-500',
    },
  ];

  const creditCards = [
    {
      name: 'Кредитка Барби',
      limit: 'До 500 000 ₽',
      grace: '120 дней',
      rate: 'От 19.9%',
      features: ['Льготный период', 'Кэшбэк 3%', 'Снятие наличных'],
      gradient: 'from-rose-400 to-pink-600',
    },
    {
      name: 'Кредитка VIP',
      limit: 'До 1 000 000 ₽',
      grace: '180 дней',
      rate: 'От 15.9%',
      features: ['Увеличенный лимит', 'Кэшбэк 5%', 'Travel-страховка'],
      gradient: 'from-fuchsia-500 to-purple-600',
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white">
      <Navigation />

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-4">
            <span className="bg-gradient-to-r from-primary to-[#FFC0E5] bg-clip-text text-transparent">
              Карты 💳
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выбери карту, которая подходит твоему стилю жизни
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold font-montserrat mb-8 flex items-center gap-3">
            <Icon name="CreditCard" size={32} className="text-primary" />
            Дебетовые карты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {debitCards.map((card, index) => (
              <Card
                key={index}
                className={`relative hover-scale border-2 ${
                  card.popular ? 'border-primary shadow-lg' : 'hover:border-primary'
                }`}
              >
                {card.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">
                      <Icon name="Star" size={14} className="mr-1" />
                      Популярная
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className={`w-full h-32 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                    <div className="text-white text-center">
                      <p className="text-sm opacity-90">Барби Банк</p>
                      <p className="text-2xl font-bold mt-2">{card.name}</p>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-montserrat">{card.name}</CardTitle>
                  <CardDescription>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Кэшбэк</p>
                        <p className="text-lg font-bold text-primary">{card.cashback}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Обслуживание</p>
                        <p className="text-lg font-bold text-primary">{card.annual}</p>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full barbie-gradient text-white">
                    Оформить карту
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold font-montserrat mb-8 flex items-center gap-3">
            <Icon name="Wallet" size={32} className="text-primary" />
            Кредитные карты
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {creditCards.map((card, index) => (
              <Card
                key={index}
                className={`relative hover-scale border-2 ${
                  card.popular ? 'border-primary shadow-lg' : 'hover:border-primary'
                }`}
              >
                {card.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">
                      <Icon name="Star" size={14} className="mr-1" />
                      Популярная
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className={`w-full h-32 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                    <div className="text-white text-center">
                      <p className="text-sm opacity-90">Барби Банк</p>
                      <p className="text-2xl font-bold mt-2">{card.name}</p>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-montserrat">{card.name}</CardTitle>
                  <CardDescription>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Лимит</p>
                        <p className="text-sm font-bold text-primary">{card.limit}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Льготный</p>
                        <p className="text-sm font-bold text-primary">{card.grace}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Ставка</p>
                        <p className="text-sm font-bold text-primary">{card.rate}</p>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full barbie-gradient text-white">
                    Оформить кредитку
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cards;
