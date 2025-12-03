import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Loans = () => {
  const [amount, setAmount] = useState(500000);
  const [term, setTerm] = useState(24);
  const rate = 7.9;

  const monthlyPayment = (amount * (rate / 100 / 12) * Math.pow(1 + rate / 100 / 12, term)) / (Math.pow(1 + rate / 100 / 12, term) - 1);
  const totalPayment = monthlyPayment * term;
  const overpayment = totalPayment - amount;

  const loanPrograms = [
    {
      name: 'Потребительский',
      rate: 'От 7.9%',
      amount: 'До 5 млн ₽',
      term: 'До 7 лет',
      features: ['Без обеспечения', 'Решение за 1 час', 'Онлайн-оформление'],
      gradient: 'from-pink-400 to-pink-600',
      popular: true,
    },
    {
      name: 'На авто',
      rate: 'От 5.9%',
      amount: 'До 10 млн ₽',
      term: 'До 5 лет',
      features: ['Новые и б/у авто', 'Гос. субсидии', 'Каско в подарок'],
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Рефинансирование',
      rate: 'От 6.9%',
      amount: 'До 3 млн ₽',
      term: 'До 5 лет',
      features: ['Снижение ставки', 'Объединение кредитов', 'Без скрытых комиссий'],
      gradient: 'from-green-400 to-green-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white">
      <Navigation />

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-4">
            <span className="bg-gradient-to-r from-primary to-[#FFC0E5] bg-clip-text text-transparent">
              Кредиты 💰
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выгодные условия для воплощения твоих желаний
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-primary shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat flex items-center gap-2">
                <Icon name="Calculator" size={28} className="text-primary" />
                Калькулятор кредита
              </CardTitle>
              <CardDescription>Рассчитай ежемесячный платёж</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-medium">Сумма кредита</label>
                  <span className="text-primary font-bold text-lg">
                    {amount.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Slider
                  value={[amount]}
                  onValueChange={(value) => setAmount(value[0])}
                  min={50000}
                  max={5000000}
                  step={50000}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>50 000 ₽</span>
                  <span>5 000 000 ₽</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-medium">Срок кредита</label>
                  <span className="text-primary font-bold text-lg">
                    {term} {term === 1 ? 'месяц' : term < 5 ? 'месяца' : 'месяцев'}
                  </span>
                </div>
                <Slider
                  value={[term]}
                  onValueChange={(value) => setTerm(value[0])}
                  min={6}
                  max={84}
                  step={6}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>6 мес</span>
                  <span>84 мес (7 лет)</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-pink-100 rounded-xl p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Процентная ставка:</span>
                  <span className="text-xl font-bold text-primary">{rate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Ежемесячный платёж:</span>
                  <span className="text-2xl font-bold text-primary">
                    {Math.round(monthlyPayment).toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Переплата:</span>
                  <span className="font-semibold">
                    {Math.round(overpayment).toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Общая сумма:</span>
                  <span className="font-semibold">
                    {Math.round(totalPayment).toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              </div>

              <Button className="w-full barbie-gradient text-white text-lg py-6">
                Оформить заявку
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2 hover:border-primary transition-all">
              <CardHeader>
                <CardTitle className="font-montserrat flex items-center gap-2">
                  <Icon name="Gift" size={24} className="text-primary" />
                  Преимущества
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    'Одобрение за 1 час',
                    'Ставка от 7.9% годовых',
                    'Без скрытых комиссий',
                    'Онлайн-оформление',
                    'Досрочное погашение без штрафов',
                    'Индивидуальные условия',
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
                  💖 Специальное предложение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4">
                  При оформлении кредита на сумму от 500 000 ₽ — первый месяц без процентов!
                </p>
                <Button className="bg-white text-primary hover:bg-white/90 w-full">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold font-montserrat mb-8 flex items-center gap-3">
            <Icon name="FileText" size={32} className="text-primary" />
            Кредитные программы
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {loanPrograms.map((program, index) => (
              <Card
                key={index}
                className={`hover-scale border-2 ${
                  program.popular ? 'border-primary shadow-lg' : 'hover:border-primary'
                }`}
              >
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">
                      <Icon name="Star" size={14} className="mr-1" />
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center mb-4`}>
                    <Icon name="Wallet" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-montserrat">{program.name}</CardTitle>
                  <CardDescription>
                    <div className="grid grid-cols-2 gap-2 mt-4 text-foreground">
                      <div>
                        <p className="text-xs text-muted-foreground">Ставка</p>
                        <p className="text-sm font-bold text-primary">{program.rate}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Сумма</p>
                        <p className="text-sm font-bold text-primary">{program.amount}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs text-muted-foreground">Срок</p>
                        <p className="text-sm font-bold text-primary">{program.term}</p>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
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

export default Loans;
