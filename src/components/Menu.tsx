import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("coffee");

  const menuData = {
    coffee: {
      title: "Кофейные заряды",
      subtitle: "Как капибары любят солнышко, так мы любим идеальный кофе",
      emoji: "☕",
      bgGradient: "from-amber-50 via-orange-50 to-amber-100",
      borderColor: "border-amber-300",
      textColor: "text-amber-800",
      items: [
        {
          name: "Эспрессо «Утреннее солнце»",
          price: 100,
          description: "Чистый, как душа капибары",
          icon: "☀️",
        },
        {
          name: "Американо «Речные просторы»",
          price: 160,
          description: "Длинный и спокойный",
          icon: "🌊",
        },
        {
          name: "Фильтр «Тропическое утро»",
          price: 180,
          description: "Медленно и вдумчиво",
          icon: "🌱",
        },
        {
          name: "Воронка «Капельки росы»",
          price: 180,
          description: "Каждая капля важна",
          icon: "💧",
        },
        {
          name: "Капучино «Пышная шубка»",
          price: 200,
          description: "Мягкий как мех капибары",
          icon: "☁️",
        },
        {
          name: "Латте «Молочная река»",
          price: 200,
          description: "Течет медленно и нежно",
          icon: "🥛",
        },
        {
          name: "Раф «Классическое спокойствие»",
          price: 280,
          description: "Проверенная временем гармония",
          icon: "✨",
        },
        {
          name: "Раф от Капи «Апельсиновое настроение»",
          price: 300,
          description: "Наш фирменный секрет!",
          icon: "🍊",
          special: true,
        },
      ],
    },
    drinks: {
      title: "Теплые объятия",
      subtitle: "Для тех, кто предпочитает спокойствие без кофеина",
      emoji: "🫖",
      bgGradient: "from-emerald-50 via-teal-50 to-cyan-100",
      borderColor: "border-emerald-300",
      textColor: "text-emerald-800",
      items: [
        {
          name: "Горячий шоколад «Бразильское тепло»",
          price: 220,
          description: "Густой как дружба",
          icon: "🍫",
        },
        {
          name: "Зеленый чай «Лесная тишина»",
          price: 370,
          description: "Чайник 0,5л",
          icon: "🍃",
          unit: true,
        },
        {
          name: "Жасминовый чай «Цветочный берег»",
          price: 380,
          description: "Чайник 0,5л",
          icon: "🌸",
          unit: true,
        },
        {
          name: "Черный чай «Классика жанра»",
          price: 370,
          description: "Чайник 0,5л",
          icon: "🫖",
          unit: true,
        },
        {
          name: "Чай от Капи «Медовый рассвет»",
          price: 450,
          description: "Апельсин, мята, мед — чайник 0,5л",
          icon: "🍯",
          special: true,
          unit: true,
        },
      ],
    },
    desserts: {
      title: "Сладкие мечты",
      subtitle: "Десерты, которые заставят вас улыбнуться как капибару",
      emoji: "🧁",
      bgGradient: "from-pink-50 via-rose-50 to-pink-100",
      borderColor: "border-pink-300",
      textColor: "text-pink-800",
      items: [
        {
          name: "Чизкейк «Нежность»",
          price: 220,
          description: "Классический и воздушный",
          icon: "🍰",
        },
        {
          name: "Чизкейк от Капи «Особенный»",
          price: 260,
          description: "Наш секретный рецепт!",
          icon: "🎂",
          special: true,
        },
        {
          name: "Морковный пирог «Бразильский»",
          price: 220,
          description: "Сочный и ароматный",
          icon: "🥕",
        },
        {
          name: "Бейжиньо «Маленький поцелуй»",
          price: 120,
          description: "Один шарик счастья",
          icon: "😘",
          unit: true,
        },
        {
          name: "Брауни «Шоколадное блаженство»",
          price: 230,
          description: "С бразильскими специями",
          icon: "🍫",
        },
      ],
    },
  };

  const categories = [
    { key: "coffee", label: "Кофе", icon: "☕" },
    { key: "drinks", label: "Напитки", icon: "🫖" },
    { key: "desserts", label: "Десерты", icon: "🧁" },
  ];

  const currentMenu = menuData[activeCategory];

  return (
    <section
      id="menu"
      className="py-20 bg-gradient-to-br from-cream-50 via-forest-50 to-nature-50 relative overflow-hidden"
    >
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 text-6xl opacity-10 animate-pulse">
        🐾
      </div>
      <div className="absolute top-32 right-20 text-4xl opacity-20 animate-bounce">
        🌿
      </div>
      <div className="absolute bottom-20 left-32 text-5xl opacity-15">💫</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-forest-200 to-nature-200 rounded-full mb-6 shadow-lg">
              <span className="text-3xl">🍽️</span>
            </div>
            <h2 className="text-5xl font-bold text-forest-800 mb-4">
              Меню от капибар
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-forest-500 via-nature-500 to-aqua-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-forest-600 max-w-2xl mx-auto leading-relaxed">
              Каждое блюдо и напиток создается с той же неспешностью и вниманием
              к деталям, с которой капибары наслаждаются жизнью 🐹
            </p>
          </div>

          {/* Навигация по категориям */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border-2 border-forest-200">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 mx-1 ${
                    activeCategory === category.key
                      ? "bg-gradient-to-r from-forest-500 to-nature-500 text-white shadow-lg transform scale-105"
                      : "text-forest-600 hover:bg-forest-100"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Контент категории */}
          <div
            className={`bg-gradient-to-br ${currentMenu.bgGradient} rounded-3xl p-8 ${currentMenu.borderColor} border-3 shadow-2xl`}
          >
            <div className="text-center mb-10">
              <div className="text-6xl mb-4">{currentMenu.emoji}</div>
              <h3
                className={`text-4xl font-bold ${currentMenu.textColor} mb-3`}
              >
                {currentMenu.title}
              </h3>
              <p className={`text-lg ${currentMenu.textColor} opacity-80`}>
                {currentMenu.subtitle}
              </p>
            </div>

            {/* Сетка товаров */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentMenu.items.map((item, index) => (
                <Card
                  key={index}
                  className="group bg-white/90 backdrop-blur-sm border-2 border-white/50 hover:border-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-2xl font-bold ${item.special ? "text-nature-600" : currentMenu.textColor}`}
                        >
                          {item.price}₽
                        </div>
                        {item.unit && (
                          <div className="text-sm text-gray-500">
                            за позицию
                          </div>
                        )}
                      </div>
                    </div>

                    <h4
                      className={`text-lg font-semibold mb-2 ${item.special ? "text-nature-700" : currentMenu.textColor} group-hover:text-forest-700 transition-colors duration-300`}
                    >
                      {item.name}
                      {item.special && (
                        <Badge className="ml-2 bg-gradient-to-r from-nature-400 to-aqua-400 text-white border-0 shadow-lg">
                          от Капи ✨
                        </Badge>
                      )}
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Дополнительные опции для кофе */}
            {activeCategory === "coffee" && (
              <div className="mt-8 bg-white/70 rounded-2xl p-6 border-2 border-amber-200">
                <h4 className="text-lg font-semibold text-amber-800 mb-4 flex items-center">
                  <Icon name="Settings" size={20} className="mr-2" />
                  Дополнительные опции
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-amber-700">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span>Декаф вариант любого кофе +40₽</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span>Альтернативное молоко +20₽</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Блок о благотворительности */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-br from-forest-100 via-nature-100 to-aqua-100 rounded-3xl p-10 border-3 border-forest-300 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 text-9xl opacity-5">
                🐹
              </div>
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-forest-400 to-nature-400 rounded-full mb-6 shadow-lg">
                  <Icon name="Heart" size={32} className="text-white" />
                </div>

                <h3 className="text-3xl font-bold text-forest-700 mb-6">
                  Каждый глоток помогает капибарам! 🐾
                </h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/60 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-3xl mb-3">🌊</div>
                    <h4 className="font-semibold text-forest-700 mb-2">
                      Чистые водоемы
                    </h4>
                    <p className="text-sm text-forest-600">
                      Создаем и поддерживаем места обитания
                    </p>
                  </div>
                  <div className="bg-white/60 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-3xl mb-3">🌳</div>
                    <h4 className="font-semibold text-forest-700 mb-2">
                      Посадка деревьев
                    </h4>
                    <p className="text-sm text-forest-600">
                      Восстанавливаем тропические леса
                    </p>
                  </div>
                  <div className="bg-white/60 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-3xl mb-3">📚</div>
                    <h4 className="font-semibold text-forest-700 mb-2">
                      Образование
                    </h4>
                    <p className="text-sm text-forest-600">
                      Рассказываем о важности сохранения природы
                    </p>
                  </div>
                </div>

                <p className="text-forest-600 leading-relaxed mb-6 text-lg">
                  <span className="font-semibold text-nature-600">
                    5% с каждого заказа
                  </span>{" "}
                  отправляется в фонды защиты капибар. Ваш кофе не только
                  согревает, но и делает мир лучше для этих удивительных
                  созданий.
                </p>

                <Badge
                  variant="outline"
                  className="bg-white/80 text-forest-700 border-forest-400 px-6 py-3 text-base hover:bg-white/90 transition-colors duration-300"
                >
                  <Icon name="FileText" size={18} className="mr-2" />
                  Прозрачная отчетность каждый месяц
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
