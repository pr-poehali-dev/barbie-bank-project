import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const values = [
    {
      icon: 'Heart',
      title: 'Забота о клиентах',
      description: 'Каждый клиент для нас особенный. Мы создаём продукты, которые делают жизнь комфортнее',
    },
    {
      icon: 'Sparkles',
      title: 'Инновации',
      description: 'Используем передовые технологии для создания удобных финансовых сервисов',
    },
    {
      icon: 'Shield',
      title: 'Надёжность',
      description: 'Безопасность средств клиентов — наш главный приоритет',
    },
    {
      icon: 'Zap',
      title: 'Скорость',
      description: 'Быстрое принятие решений и моментальные операции',
    },
  ];

  const milestones = [
    { year: '2020', event: 'Основание Барби Банка' },
    { year: '2021', event: 'Запуск мобильного приложения' },
    { year: '2022', event: '100 000 довольных клиентов' },
    { year: '2023', event: 'Лучший розовый банк года' },
    { year: '2024', event: 'Открытие 50 отделений по России' },
  ];

  const stats = [
    { value: '500K+', label: 'Клиентов', icon: 'Users' },
    { value: '50+', label: 'Отделений', icon: 'Building' },
    { value: '24/7', label: 'Поддержка', icon: 'Headphones' },
    { value: '99.9%', label: 'Uptime', icon: 'Zap' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white">
      <Navigation />

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-4">
            <span className="bg-gradient-to-r from-primary to-[#FFC0E5] bg-clip-text text-transparent">
              О банке ℹ️
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Современный банк с душой и стилем
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold font-montserrat">
              Барби Банк — это больше, чем банк 💖
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы создали пространство, где финансы встречаются со стилем. Наша миссия — сделать банковские услуги 
              простыми, понятными и красивыми.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              С 2020 года мы помогаем людям достигать финансовых целей, предоставляя инновационные продукты 
              и заботливый сервис. Более 500 000 клиентов уже доверяют нам свои мечты.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all">
                  <CardContent className="p-6 text-center">
                    <Icon name={stat.icon as any} size={32} className="text-primary mx-auto mb-2" />
                    <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-pink-300/20 rounded-full blur-3xl"></div>
            <Card className="relative barbie-gradient text-white p-8 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl font-montserrat text-center mb-6">
                  Наша миссия
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-lg text-white/95 leading-relaxed">
                  Делать финансовый мир доступным, понятным и красивым для каждого клиента
                </p>
                <div className="pt-6 flex justify-center gap-4">
                  <Icon name="Heart" size={40} className="text-white/80" />
                  <Icon name="Sparkles" size={40} className="text-white/80" />
                  <Icon name="Star" size={40} className="text-white/80" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold font-montserrat mb-8 text-center">
            Наши ценности
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover-scale border-2 hover:border-primary transition-all">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-montserrat">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold font-montserrat mb-8 text-center">
            Наша история
          </h2>
          <Card className="border-2 border-primary shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-6 items-start group">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-pink-400 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-1 pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Sparkles" size={20} className="text-primary" />
                        <h3 className="text-xl font-semibold">{milestone.event}</h3>
                      </div>
                      <div className="h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="barbie-gradient text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold font-montserrat mb-6">
              Присоединяйся к нашей команде! 💼
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Мы всегда ищем талантливых людей, которые разделяют наши ценности
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:career@barbiebank.ru">
                <button className="bg-white text-primary hover:bg-white/90 transition-colors px-8 py-3 rounded-lg font-semibold text-lg">
                  <Icon name="Mail" size={20} className="inline mr-2" />
                  Отправить резюме
                </button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default About;
