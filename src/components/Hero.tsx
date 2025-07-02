import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-cream-100 via-forest-50 to-cream-200 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-6xl mb-6 animate-bounce">🐾</div>

          <h1 className="text-5xl md:text-6xl font-bold text-forest-800 mb-6 leading-tight">
            Кофе с <span className="text-earth-600">Капи</span>
          </h1>

          <p className="text-xl text-forest-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Уникальная кофейня, где встречаются любовь к кофе, капибарам и
            путешествиям. Каждый глоток поддерживает защиту дикой природы 🌱
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-3"
            >
              <Icon name="Coffee" size={20} className="mr-2" />
              Посмотреть меню
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-earth-400 text-earth-600 hover:bg-earth-50 px-8 py-3"
            >
              <Icon name="Heart" size={20} className="mr-2" />
              Поддержать капибар
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-3">☕</div>
              <h3 className="font-semibold text-forest-700 mb-2">
                Качественный кофе
              </h3>
              <p className="text-forest-600 text-sm">
                Отборные зерна из лучших регионов мира
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-3">🎮</div>
              <h3 className="font-semibold text-forest-700 mb-2">
                Уютная атмосфера
              </h3>
              <p className="text-forest-600 text-sm">
                Игры, фильмы и знакомства с единомышленниками
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-semibold text-forest-700 mb-2">
                Помощь природе
              </h3>
              <p className="text-forest-600 text-sm">
                5% с каждой покупки идет в фонды защиты капибар
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
