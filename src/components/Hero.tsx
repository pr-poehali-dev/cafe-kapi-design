import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { value: "2,500+", label: "Чашек кофе", icon: "Coffee" },
    { value: "150+", label: "Счастливых гостей", icon: "Heart" },
    { value: "42", label: "Спасенных капибар", icon: "Shield" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Главная секция */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Левая колонка - текст */}
            <div className="text-left">

              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-forest-800">
                  Кофе с Капи
                </h1>

                <div className="w-24 h-1 bg-forest-600 mb-8"></div>

                <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                  Уютная кофейня с капибарами, где каждая чашка кофе помогает защищать дикую природу
                </p>

                <p className="text-lg text-nature-600 mb-8">
                  🌱 5% с каждой покупки идет в фонды защиты капибар
                </p>
              </div>

              {/* Кнопки действий */}
              <div
                className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <Button
                  size="lg"
                  className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon name="Coffee" size={20} className="mr-2" />
                  Посмотреть меню
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-nature-300 text-nature-600 hover:bg-nature-50 px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon name="Heart" size={20} className="mr-2" />
                  Поддержать капибар
                </Button>
              </div>
            </div>

            {/* Правая колонка - изображение */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/img/53babed2-af65-4af7-99db-f0c0a7cec5ec.jpg"
                  alt="Капибара в кофейне"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Декоративные элементы */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cream-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-nature-200 rounded-full opacity-40"></div>
              <div className="absolute top-1/2 -left-12 w-16 h-16 bg-aqua-200 rounded-full opacity-50"></div>
            </div>
          </div>



          {/* Статистика */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-forest-100 rounded-full p-3">
                    <Icon
                      name={stat.icon as any}
                      size={24}
                      className="text-forest-600"
                    />
                  </div>
                </div>
                <div className="text-2xl font-bold text-forest-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Особенности */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="bg-cream-50 rounded-xl p-6 shadow-sm border border-cream-200 hover:shadow-md transition-all duration-300">
              <div className="text-4xl mb-4 text-center">
                ☕
              </div>
              <h3 className="text-xl font-semibold text-earth-700 mb-3 text-center">
                Премиальный кофе
              </h3>
              <p className="text-earth-600 leading-relaxed text-center">
                Отборные зерна из лучших регионов мира. Каждая чашка — это путешествие вкуса
              </p>
              <div className="mt-4 flex items-center justify-center text-sm text-earth-500">
                <Icon name="Star" size={16} className="mr-1" />
                Рейтинг 4.9/5
              </div>
            </div>

            <div className="bg-nature-50 rounded-xl p-6 shadow-sm border border-nature-200 hover:shadow-md transition-all duration-300">
              <div className="text-4xl mb-4 text-center">
                🏡
              </div>
              <h3 className="text-xl font-semibold text-forest-700 mb-3 text-center">
                Уютная атмосфера
              </h3>
              <p className="text-forest-600 leading-relaxed text-center">
                Игры, фильмы и знакомства с единомышленниками. Место, где рождаются дружбы
              </p>
              <div className="mt-4 flex items-center justify-center text-sm text-forest-500">
                <Icon name="Users" size={16} className="mr-1" />
                Сообщество 150+ человек
              </div>
            </div>

            <div className="bg-aqua-50 rounded-xl p-6 shadow-sm border border-aqua-200 hover:shadow-md transition-all duration-300">
              <div className="text-4xl mb-4 text-center">
                🌱
              </div>
              <h3 className="text-xl font-semibold text-nature-700 mb-3 text-center">
                Помощь природе
              </h3>
              <p className="text-nature-600 leading-relaxed text-center">
                5% с каждой покупки идет в фонды защиты капибар. Пьешь кофе — спасаешь планету
              </p>
              <div className="mt-4 flex items-center justify-center text-sm text-nature-500">
                <Icon name="Leaf" size={16} className="mr-1" />
                Уже помогли 42 капибарам
              </div>
            </div>
          </div>

          {/* Призыв к действию */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl mr-3">🐹</span>
                <h3 className="text-2xl font-bold text-forest-700">
                  Готовы к знакомству с капибарами?
                </h3>
              </div>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Присоединяйтесь к нашему уютному сообществу! Каждый день — новые открытия, новые вкусы и новые друзья
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={16}
                    className="mr-2 text-forest-500"
                  />
                  Найти нас
                </div>
                <div className="text-gray-300">→</div>
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-2 text-nature-500" />
                  Открыто 8:00-22:00
                </div>
                <div className="text-gray-300">→</div>
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2 text-aqua-500" />
                  Забронировать стол
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}