import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const products = [
    {
      title: 'Дебетовые карты',
      description: 'До 10% кэшбэка на любимые категории',
      icon: 'CreditCard',
      link: '/cards',
      gradient: 'from-pink-400 to-pink-600',
    },
    {
      title: 'Вклады',
      description: 'До 12% годовых на накопления',
      icon: 'PiggyBank',
      link: '/deposits',
      gradient: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Кредиты',
      description: 'От 7.9% на выгодных условиях',
      icon: 'Wallet',
      link: '/loans',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Ипотека',
      description: 'От 8% на квартиру мечты',
      icon: 'House',
      link: '/mortgage',
      gradient: 'from-fuchsia-400 to-pink-600',
    },
  ];

  const features = [
    {
      icon: 'Smartphone',
      title: 'Мобильное приложение',
      description: 'Управляй финансами в любое время',
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: '3D-secure и биометрия',
    },
    {
      icon: 'Zap',
      title: 'Быстрые переводы',
      description: 'Моментально и без комиссии',
    },
    {
      icon: 'Gift',
      title: 'Бонусная программа',
      description: 'Кэшбэк и скидки у партнёров',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white">
      <Navigation />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-montserrat">
              <span className="bg-gradient-to-r from-primary via-[#FF1493] to-[#FFC0E5] bg-clip-text text-transparent">
                Барби Банк
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Твой стильный банк для комфортной жизни 💖✨
            </p>
            <p className="text-lg text-muted-foreground">
              Современные финансовые решения с заботой о каждом клиенте. 
              Кредиты, вклады, карты и инвестиции — всё в одном месте!
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/cards">
                <Button size="lg" className="barbie-gradient text-white hover:opacity-90 transition-opacity text-lg px-8">
                  Открыть карту
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-secondary text-lg px-8">
                  Узнать больше
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-primary to-[#FF1493] rounded-2xl p-6 text-white shadow-lg">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <p className="text-sm opacity-90">Барби Банк</p>
                        <p className="text-xs opacity-75 mt-1">Premium Card</p>
                      </div>
                      <Icon name="Sparkles" size={24} />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs opacity-75">Номер карты</p>
                      <p className="text-lg font-mono tracking-wider">•••• •••• •••• 4321</p>
                    </div>
                    <div className="flex justify-between mt-6">
                      <div>
                        <p className="text-xs opacity-75">Владелец</p>
                        <p className="text-sm font-medium">BARBIE DOLL</p>
                      </div>
                      <div>
                        <p className="text-xs opacity-75">До</p>
                        <p className="text-sm font-medium">12/28</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Баланс</p>
                      <p className="text-2xl font-bold text-primary">125 450 ₽</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Кэшбэк</p>
                      <p className="text-2xl font-bold text-green-600">+1 254 ₽</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Популярные продукты
          </h2>
          <p className="text-lg text-muted-foreground">
            Выбери то, что подходит именно тебе
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              className="group"
            >
              <Card className="h-full hover-scale border-2 hover:border-primary transition-all">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={product.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-montserrat">{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Подробнее
                    <Icon name="ArrowRight" size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Почему выбирают нас
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-scale border-2 hover:border-secondary transition-all">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} size={28} className="text-primary" />
                </div>
                <CardTitle className="text-lg font-montserrat">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Card className="barbie-gradient text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <CardHeader className="relative z-10">
            <CardTitle className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-4">
              Начни свой путь с Барби Банком! 💖
            </CardTitle>
            <CardDescription className="text-white/90 text-center text-lg max-w-2xl mx-auto">
              Открой карту онлайн за 5 минут и получи приветственный бонус
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center relative z-10 pb-8">
            <Link to="/cards">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-10">
                Открыть карту
                <Icon name="Sparkles" size={20} className="ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Index;