import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Deposits = () => {
  const [amount, setAmount] = useState(100000);
  const [term, setTerm] = useState(12);
  const [selectedRate, setSelectedRate] = useState<'standard' | 'promo'>('promo');

  const rates = {
    standard: 8.5,
    promo: 12.0,
  };

  const rate = rates[selectedRate];
  const income = (amount * rate * term) / 100 / 12;
  const total = amount + income;

  const depositTypes = [
    {
      name: 'Накопительный',
      rate: 'До 12%',
      term: 'От 3 месяцев',
      features: ['Пополнение в любое время', 'Частичное снятие', 'Капитализация процентов'],
      icon: 'PiggyBank',
      gradient: 'from-green-400 to-emerald-600',
      popular: true,
    },
    {
      name: 'Срочный',
      rate: 'До 10%',
      term: 'От 6 месяцев',
      features: ['Фиксированная ставка', 'Гарантия доходности', 'Страхование АСВ'],
      icon: 'Clock',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Пенсионный',
      rate: 'До 13%',
      term: 'От 12 месяцев',
      features: ['Повышенная ставка', 'Для пенсионеров', 'Ежемесячные выплаты'],
      icon: 'Heart',
      gradient: 'from-purple-400 to-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white">
      <Navigation />

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-4">
            <span className="bg-gradient-to-r from-primary to-[#FFC0E5] bg-clip-text text-transparent">
              Вклады 🏦
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Сохраняй и приумножай свои сбережения
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-primary shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat flex items-center gap-2">
                <Icon name="Calculator" size={28} className="text-primary" />
                Калькулятор вклада
              </CardTitle>
              <CardDescription>Рассчитай доходность вклада</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-medium">Сумма вклада</label>
                  <span className="text-primary font-bold text-lg">
                    {amount.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Slider
                  value={[amount]}
                  onValueChange={(value) => setAmount(value[0])}
                  min={10000}
                  max={5000000}
                  step={10000}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>10 000 ₽</span>
                  <span>5 000 000 ₽</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-medium">Срок вклада</label>
                  <span className="text-primary font-bold text-lg">
                    {term} {term === 1 ? 'месяц' : term < 5 ? 'месяца' : 'месяцев'}
                  </span>
                </div>
                <Slider
                  value={[term]}
                  onValueChange={(value) => setTerm(value[0])}
                  min={3}
                  max={36}
                  step={3}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>3 мес</span>
                  <span>36 мес (3 года)</span>
                </div>
              </div>

              <div>
                <label className="font-medium mb-3 block">Процентная ставка</label>
                <RadioGroup value={selectedRate} onValueChange={(value) => setSelectedRate(value as any)}>
                  <div className="flex items-center space-x-2 mb-2 p-3 rounded-lg hover:bg-secondary/50 cursor-pointer">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="cursor-pointer flex-1">
                      <div className="flex justify-between">
                        <span>Стандартная</span>
                        <span className="font-bold text-primary">8.5%</span>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-secondary/50 cursor-pointer border-2 border-primary/20">
                    <RadioGroupItem value="promo" id="promo" />
                    <Label htmlFor="promo" className="cursor-pointer flex-1">
                      <div className="flex justify-between">
                        <span className="flex items-center gap-2">
                          Акция 
                          <Icon name="Sparkles" size={14} className="text-primary" />
                        </span>
                        <span className="font-bold text-primary">12.0%</span>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-pink-100 rounded-xl p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Процентная ставка:</span>
                  <span className="text-xl font-bold text-primary">{rate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Начисленные проценты:</span>
                  <span className="text-2xl font-bold text-green-600">
                    +{Math.round(income).toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Итого к выплате:</span>
                  <span className="text-2xl font-bold text-primary">
                    {Math.round(total).toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              </div>

              <Button className="w-full barbie-gradient text-white text-lg py-6">
                Открыть вклад
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2 hover:border-primary transition-all">
              <CardHeader>
                <CardTitle className="font-montserrat flex items-center gap-2">
                  <Icon name="Shield" size={24} className="text-primary" />
                  Гарантии
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    'Страхование АСВ до 1,4 млн ₽',
                    'Капитализация процентов',
                    'Пополнение без ограничений',
                    'Досрочное расторжение',
                    'Онлайн-управление',
                    'Автоматическая пролонгация',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                        <Icon name="Check" size={16} className="text-primary" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="barbie-gradient text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat">
                  💎 Акция до конца месяца
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4">
                  Открой вклад от 100 000 ₽ на срок от 6 месяцев и получи повышенную ставку 12% годовых!
                </p>
                <Button className="bg-white text-primary hover:bg-white/90 w-full">
                  Воспользоваться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold font-montserrat mb-8 flex items-center gap-3">
            <Icon name="Wallet" size={32} className="text-primary" />
            Виды вкладов
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {depositTypes.map((deposit, index) => (
              <Card
                key={index}
                className={`hover-scale border-2 ${
                  deposit.popular ? 'border-primary shadow-lg' : 'hover:border-primary'
                }`}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${deposit.gradient} flex items-center justify-center mb-4`}>
                    <Icon name={deposit.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-montserrat">{deposit.name}</CardTitle>
                  <CardDescription>
                    <div className="grid grid-cols-2 gap-4 mt-4 text-foreground">
                      <div>
                        <p className="text-xs text-muted-foreground">Ставка</p>
                        <p className="text-lg font-bold text-primary">{deposit.rate}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Срок</p>
                        <p className="text-lg font-bold text-primary">{deposit.term}</p>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {deposit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline">
                    Подробнее
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

export default Deposits;
