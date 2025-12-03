import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-[#C71585] to-primary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">💖</span>
              <h3 className="text-xl font-bold font-montserrat">Барби Банк</h3>
            </div>
            <p className="text-white/90 text-sm">
              Банк для тех, кто ценит стиль, удобство и современный подход к финансам
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-montserrat">Продукты</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/cards" className="hover:text-secondary transition-colors flex items-center gap-2">
                  <Icon name="CreditCard" size={14} />
                  Карты
                </Link>
              </li>
              <li>
                <Link to="/loans" className="hover:text-secondary transition-colors flex items-center gap-2">
                  <Icon name="Wallet" size={14} />
                  Кредиты
                </Link>
              </li>
              <li>
                <Link to="/deposits" className="hover:text-secondary transition-colors flex items-center gap-2">
                  <Icon name="PiggyBank" size={14} />
                  Вклады
                </Link>
              </li>
              <li>
                <Link to="/mortgage" className="hover:text-secondary transition-colors flex items-center gap-2">
                  <Icon name="House" size={14} />
                  Ипотека
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-montserrat">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors flex items-center gap-2">
                  <Icon name="Info" size={14} />
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-secondary transition-colors flex items-center gap-2">
                  <Icon name="Phone" size={14} />
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/investments" className="hover:text-secondary transition-colors flex items-center gap-2">
                  <Icon name="TrendingUp" size={14} />
                  Инвестиции
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/settings/installations" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <Icon name="Download" size={14} />
                  Скачать код
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-montserrat">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={14} />
                <span>8 (800) 555-35-35</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={14} />
                <span>info@barbiebank.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={14} />
                <span>Москва, ул. Розовая, 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/80">
            © 2024 Барби Банк. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition-colors">
              <Icon name="Facebook" size={20} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Icon name="Twitter" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;