import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Спасибо за обращение! 💖',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const offices = [
    {
      city: 'Москва',
      address: 'ул. Розовая, д. 1',
      phone: '8 (800) 555-35-35',
      hours: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00',
      icon: 'Building',
    },
    {
      city: 'Санкт-Петербург',
      address: 'Невский проспект, д. 100',
      phone: '8 (800) 555-35-36',
      hours: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00',
      icon: 'Building',
    },
    {
      city: 'Казань',
      address: 'ул. Баумана, д. 50',
      phone: '8 (800) 555-35-37',
      hours: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00',
      icon: 'Building',
    },
  ];

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '8 (800) 555-35-35',
      description: 'Бесплатно по России',
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@barbiebank.ru',
      description: 'Ответим в течение 24 часов',
    },
    {
      icon: 'MessageCircle',
      title: 'Онлайн-чат',
      value: 'Чат в приложении',
      description: 'Доступен 24/7',
    },
    {
      icon: 'MapPin',
      title: 'Офисы',
      value: '50+ отделений',
      description: 'По всей России',
    },
  ];

  const faq = [
    {
      question: 'Как открыть счёт?',
      answer: 'Вы можете открыть счёт онлайн на нашем сайте или в мобильном приложении. Процесс занимает всего 5 минут. Вам понадобится паспорт РФ и СНИЛС.',
    },
    {
      question: 'Какие комиссии за обслуживание?',
      answer: 'Обслуживание дебетовых карт Барби Classic — бесплатное. Премиальные карты — 990 ₽/год. Переводы внутри банка всегда бесплатные.',
    },
    {
      question: 'Как получить кредит?',
      answer: 'Заполните онлайн-заявку на сайте. Решение принимается автоматически в течение 1 часа. При одобрении деньги поступят на счёт в тот же день.',
    },
    {
      question: 'Есть ли мобильное приложение?',
      answer: 'Да! Наше приложение доступно для iOS и Android. В нём можно управлять всеми продуктами, переводить деньги и следить за расходами.',
    },
    {
      question: 'Как связаться с поддержкой?',
      answer: 'Круглосуточная поддержка доступна по телефону 8 (800) 555-35-35, в чате приложения, или напишите нам на info@barbiebank.ru',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white">
      <Navigation />

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-4">
            <span className="bg-gradient-to-r from-primary to-[#FFC0E5] bg-clip-text text-transparent">
              Контакты 📞
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы всегда на связи и готовы помочь
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="hover-scale border-2 hover:border-primary transition-all">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Icon name={method.icon as any} size={28} className="text-primary" />
                </div>
                <CardTitle className="text-lg font-montserrat">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-bold text-primary mb-1">{method.value}</p>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="border-2 border-primary shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat flex items-center gap-2">
                <Icon name="MessageSquare" size={28} className="text-primary" />
                Форма обратной связи
              </CardTitle>
              <CardDescription>Оставьте сообщение, и мы свяжемся с вами</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    placeholder="Опишите ваш вопрос или предложение..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="mt-2"
                  />
                </div>

                <Button type="submit" className="w-full barbie-gradient text-white text-lg py-6">
                  Отправить сообщение
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="barbie-gradient text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat">
                  💬 Круглосуточная поддержка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-6">
                  Наша команда всегда готова помочь вам с любыми вопросами. Свяжитесь с нами удобным способом!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={20} className="text-white/80" />
                    <span className="text-white/95">24/7 — всегда на связи</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Headphones" size={20} className="text-white/80" />
                    <span className="text-white/95">Среднее время ответа — 2 минуты</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Star" size={20} className="text-white/80" />
                    <span className="text-white/95">Рейтинг поддержки — 4.9/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat flex items-center gap-2">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  Наши офисы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="pb-4 border-b last:border-b-0">
                    <div className="flex items-start gap-3 mb-2">
                      <Icon name={office.icon as any} size={20} className="text-primary mt-1" />
                      <div>
                        <h4 className="font-bold text-lg">{office.city}</h4>
                        <p className="text-sm text-muted-foreground">{office.address}</p>
                      </div>
                    </div>
                    <div className="ml-8 space-y-1 text-sm">
                      <p className="flex items-center gap-2">
                        <Icon name="Phone" size={14} className="text-primary" />
                        {office.phone}
                      </p>
                      <p className="flex items-center gap-2">
                        <Icon name="Clock" size={14} className="text-primary" />
                        {office.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="border-2 border-primary shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-montserrat flex items-center gap-2">
              <Icon name="HelpCircle" size={28} className="text-primary" />
              Часто задаваемые вопросы
            </CardTitle>
            <CardDescription>Ответы на популярные вопросы</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
