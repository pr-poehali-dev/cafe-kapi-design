import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-cream-50 border-b border-forest-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl">🌿</div>
          <h1 className="text-xl font-bold text-forest-700">Кофе с Капи</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#about"
            className="text-forest-600 hover:text-forest-800 transition-colors"
          >
            О нас
          </a>
          <a
            href="#menu"
            className="text-forest-600 hover:text-forest-800 transition-colors"
          >
            Меню
          </a>
          <a
            href="#games"
            className="text-forest-600 hover:text-forest-800 transition-colors"
          >
            Игры и фильмы
          </a>
          <a
            href="#charity"
            className="text-forest-600 hover:text-forest-800 transition-colors"
          >
            Помощь капибарам
          </a>
          <a
            href="#gallery"
            className="text-forest-600 hover:text-forest-800 transition-colors"
          >
            Галерея
          </a>
          <a
            href="#contacts"
            className="text-forest-600 hover:text-forest-800 transition-colors"
          >
            Контакты
          </a>
        </nav>

        <Button
          variant="outline"
          className="md:hidden border-forest-300 text-forest-600"
        >
          <Icon name="Menu" size={20} />
        </Button>
      </div>
    </header>
  );
}
