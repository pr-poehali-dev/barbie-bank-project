import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Mortgage = () => {
  const [propertyPrice, setPropertyPrice] = useState(5000000);
  const [initialPayment, setInitialPayment] = useState(1000000);
  const [term, setTerm] = useState(240);
  const rate = 8.0;

  const loanAmount = propertyPrice - initialPayment;
  const monthlyRate = rate / 100 / 12;
  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, term)) /
    (Math.pow(1 + monthlyRate, term) - 1);
  const totalPayment = monthlyPayment * term;
  const overpayment = totalPayment - loanAmount;
  const initialPaymentPercent = ((initialPayment / propertyPrice) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white">
      <Navigation />

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-4">
            <span className="bg-gradient-to-r from-primary to-[#FFC0E5] bg-clip-text text-transparent">
              Ипотека 🏡
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Квартира мечты стала ближе с выгодной ипотекой
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-primary shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat flex items-center gap-2">
                <Icon name="Calculator" size={28} className="text-primary" />
                Ипотечный калькулятор
              </CardTitle>
              <CardDescription>Рассчитай ежемесячный платёж</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-medium">Стоимость недвижимости</label>
                  <span className="text-primary font-bold text-lg">
                    {propertyPrice.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Slider
                  value={[propertyPrice]}
                  onValueChange={(value) => {
                    setPropertyPrice(value[0]);
                    if (initialPayment > value[0] * 0.9) {
                      setInitialPayment(Math.floor(value[0] * 0.2));
                    }
                  }}
                  min={1000000}
                  max={30000000}
                  step={100000}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>1 млн ₽</span>
                  <span>30 млн ₽</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-medium">Первоначальный взнос</label>
                  <div className="text-right">
                    <div className="text-primary font-bold text-lg">
                      {initialPayment.toLocaleString('ru-RU')} ₽
                    </div>
                    <div className="text-xs text-muted-foreground">
                      ({initialPaymentPercent}%)
                    </div>
                  </div>
                </div>
                <Slider
                  value={[initialPayment]}
                  onValueChange={(value) => setInitialPayment(value[0])}
                  min={Math.floor(propertyPrice * 0.1)}
                  max={Math.floor(propertyPrice * 0.9)}
                  step={50000}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>10% ({Math.floor(propertyPrice * 0.1).toLocaleString('ru-RU')} ₽)</span>
                  <span>90%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-medium">Срок кредита</label>
                  <span className="text-primary font-bold text-lg">
                    {Math.floor(term / 12)} {term === 12 ? 'год' : term < 60 ? 'года' : 'лет'}
                  </span>
                </div>
                <Slider
                  value={[term]}
                  onValueChange={(value) => setTerm(value[0])}
                  min={60}
                  max={360}
                  step={12}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>5 лет</span>
                  <span>30 лет</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-pink-100 rounded-xl p-6 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Сумма кредита:</span>
                  <span className="font-semibold">
                    {loanAmount.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
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
                  <span className="text-muted-foreground">Общая сумма выплат:</span>
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
                  <Icon name="Home" size={24} className="text-primary" />
                  Преимущества ипотеки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    'Ставка от 8% годовых',
                    'Срок до 30 лет',
                    'Первый взнос от 10%',
                    'Одобрение за 1 день',
                    'Господдержка',
                    'Без скрытых комиссий',
                    'Досрочное погашение',
                    'Онлайн-оформление',
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
                  🏠 Семейная ипотека
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4">
                  Специальная программа для семей с детьми: ставка от 6% и увеличенный срок кредитования!
                </p>
                <Button className="bg-white text-primary hover:bg-white/90 w-full">
                  Узнать условия
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all">
              <CardHeader>
                <CardTitle className="font-montserrat flex items-center gap-2">
                  <Icon name="FileText" size={24} className="text-primary" />
                  Необходимые документы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Circle" size={8} className="text-primary" />
                    Паспорт РФ
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Circle" size={8} className="text-primary" />
                    СНИЛС
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Circle" size={8} className="text-primary" />
                    Справка о доходах (2-НДФЛ или по форме банка)
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Circle" size={8} className="text-primary" />
                    Трудовая книжка / договор
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Новостройка',
              description: 'Квартиры в строящихся домах от застройщика',
              icon: 'Building',
              gradient: 'from-blue-400 to-blue-600',
            },
            {
              title: 'Вторичка',
              description: 'Готовое жильё с быстрым заселением',
              icon: 'Home',
              gradient: 'from-green-400 to-green-600',
            },
            {
              title: 'Загородная',
              description: 'Дома и участки за городом',
              icon: 'TreePine',
              gradient: 'from-purple-400 to-purple-600',
            },
          ].map((type, index) => (
            <Card key={index} className="hover-scale border-2 hover:border-primary transition-all">
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.gradient} flex items-center justify-center mb-4 mx-auto`}>
                  <Icon name={type.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl font-montserrat text-center">{type.title}</CardTitle>
                <CardDescription className="text-center">{type.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mortgage;
