import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  const [currentCapybara, setCurrentCapybara] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const capybaras = [
    { emoji: "🐹", name: "Чилл", action: "медитирует" },
    { emoji: "🏊‍♂️", name: "Сплэш", action: "плавает" },
    { emoji: "☕", name: "Кофеин", action: "пьет кофе" },
    { emoji: "🌱", name: "Экo", action: "защищает природу" },
    { emoji: "🎮", name: "Геймер", action: "играет" },
  ];

  const stats = [
    { value: "2,500+", label: "Чашек кофе", icon: "Coffee" },
    { value: "150+", label: "Счастливых гостей", icon: "Heart" },
    { value: "42", label: "Спасенных капибар", icon: "Shield" },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentCapybara((prev) => (prev + 1) % capybaras.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-40 h-40 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Плавающие элементы */}
        <div className="absolute top-20 right-1/4 text-4xl opacity-20 animate-bounce delay-500">
          🍃
        </div>
        <div className="absolute bottom-1/4 left-20 text-3xl opacity-20 animate-bounce delay-1000">
          💫
        </div>
        <div className="absolute top-1/3 left-1/3 text-2xl opacity-20 animate-bounce delay-1500">
          🌸
        </div>
        <div className="absolute bottom-1/3 right-1/3 text-3xl opacity-20 animate-bounce delay-2000">
          🦋
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Главная секция */}
          <div className="text-center mb-16">
            {/* Анимированный персонаж */}
            <div className="relative inline-block mb-8">
              <div className="text-9xl mb-4 transition-all duration-500 hover:scale-110">
                {capybaras[currentCapybara].emoji}
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-purple-200">
                <span className="text-sm font-medium text-purple-700">
                  {capybaras[currentCapybara].name}{" "}
                  {capybaras[currentCapybara].action}
                </span>
              </div>
              {/* Индикаторы */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {capybaras.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentCapybara
                        ? "bg-purple-500 scale-125"
                        : "bg-purple-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                  Кофе с
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-green-600">
                  Капи
                </span>
              </h1>

              <div className="w-48 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 mx-auto mb-8"></div>

              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                🌟 Уникальная кофейня, где встречаются любовь к кофе, капибарам
                и путешествиям
                <br />
                <span className="text-lg text-purple-600 font-medium">
                  Каждый глоток поддерживает защиту дикой природы 🌱
                </span>
              </p>
            </div>

            {/* Кнопки действий */}
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Icon name="Coffee" size={24} className="mr-3 relative z-10" />
                <span className="relative z-10">Посмотреть меню</span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-10 py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <Icon name="Heart" size={24} className="mr-3" />
                Поддержать капибар
              </Button>
            </div>

            {/* Статистика */}
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        name={stat.icon as any}
                        size={28}
                        className="text-purple-600"
                      />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Особенности */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="group bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 shadow-xl border border-pink-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  ☕
                </div>
                <h3 className="text-xl font-bold text-purple-700 mb-3">
                  Премиальный кофе
                </h3>
                <p className="text-purple-600 leading-relaxed">
                  Отборные зерна из лучших регионов мира. Каждая чашка — это
                  путешествие вкуса 🌍
                </p>
                <div className="mt-4 flex items-center text-sm text-purple-500">
                  <Icon name="Star" size={16} className="mr-1" />
                  Рейтинг 4.9/5
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 shadow-xl border border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  🎮
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Уютная атмосфера
                </h3>
                <p className="text-blue-600 leading-relaxed">
                  Игры, фильмы и знакомства с единомышленниками. Место, где
                  рождаются дружбы 🎯
                </p>
                <div className="mt-4 flex items-center text-sm text-blue-500">
                  <Icon name="Users" size={16} className="mr-1" />
                  Сообщество 150+ человек
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl p-8 shadow-xl border border-green-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  🌍
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-3">
                  Помощь природе
                </h3>
                <p className="text-green-600 leading-relaxed">
                  5% с каждой покупки идет в фонды защиты капибар. Пьешь кофе —
                  спасаешь планету 💚
                </p>
                <div className="mt-4 flex items-center text-sm text-green-500">
                  <Icon name="Leaf" size={16} className="mr-1" />
                  Уже помогли 42 капибарам
                </div>
              </div>
            </div>
          </div>

          {/* Призыв к действию */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100 rounded-3xl p-8 shadow-xl border border-purple-200 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl mr-3 animate-bounce">🚀</span>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Готовы к приключению?
                </h3>
              </div>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Присоединяйтесь к нашему космическому путешествию! Каждый день —
                новые открытия, новые вкусы и новые друзья 🌌
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-slate-500">
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={16}
                    className="mr-2 text-purple-500"
                  />
                  Найти нас
                </div>
                <div className="text-purple-300">→</div>
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-2 text-blue-500" />
                  Открыто 8:00-22:00
                </div>
                <div className="text-blue-300">→</div>
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2 text-cyan-500" />
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
