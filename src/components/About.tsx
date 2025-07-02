import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function About() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const cards = [
    {
      emoji: "🐹",
      title: "Наша миссия",
      content:
        "«Кофе с Капи» — это больше чем кафе. Мы создали пространство, где каждый глоток высококачественного кофе помогает защитить удивительных капибار и их естественную среду обитания.",
      color: "from-orange-50 to-orange-100",
      textColor: "text-orange-700",
      borderColor: "border-orange-200",
      hoverColor: "hover:from-orange-100 hover:to-orange-200",
    },
    {
      emoji: "🌱",
      title: "Прозрачность",
      content:
        "У нас есть специальная книга отчетности, где записываются все переводы в фонды. Каждый посетитель может увидеть, как именно его покупка помогает природе.",
      color: "from-green-50 to-green-100",
      textColor: "text-green-700",
      borderColor: "border-green-200",
      hoverColor: "hover:from-green-100 hover:to-green-200",
    },
    {
      emoji: "☕",
      title: "Атмосфера",
      content:
        "Отдохните в перерыве рабочего дня, проведите вечер за просмотром фильмов или игрой в настольные игры. Познакомьтесь с людьми, которые разделяют вашу любовь к путешествиям и животным.",
      color: "from-blue-50 to-blue-100",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
      hoverColor: "hover:from-blue-100 hover:to-blue-200",
    },
    {
      emoji: "💚",
      title: "5% на благотворительность",
      content:
        "С каждой покупки мы отправляем 5% в фонды, которые высаживают деревья, создают водоемы и помогают капибарам жить и размножаться в дикой природе.",
      color: "from-teal-50 to-teal-100",
      textColor: "text-teal-700",
      borderColor: "border-teal-200",
      hoverColor: "hover:from-teal-100 hover:to-teal-200",
    },
  ];

  const stats = [
    { number: "2.5к", label: "Счастливых гостей", emoji: "😊" },
    { number: "120+", label: "Чашек кофе в день", emoji: "☕" },
    { number: "₽47к", label: "Передано в фонды", emoji: "💰" },
    { number: "15", label: "Спасенных гектаров", emoji: "🌳" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-cream-50 via-orange-50 to-green-50 relative overflow-hidden"
    >
      {/* Плавающие декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-8xl opacity-10 animate-bounce">
          🐹
        </div>
        <div className="absolute top-40 right-20 text-6xl opacity-10 animate-pulse delay-1000">
          ☕
        </div>
        <div className="absolute bottom-20 left-20 text-7xl opacity-10 animate-bounce delay-2000">
          🌿
        </div>
        <div className="absolute bottom-40 right-10 text-5xl opacity-10 animate-pulse delay-500">
          💚
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-200 to-green-200 rounded-full mb-6 shadow-lg">
              <span className="text-4xl animate-pulse">🐹</span>
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-green-600 to-blue-600 mb-4">
              Познакомьтесь с нами
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-300 via-green-300 to-blue-300 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              История о том, как родилась идея объединить кофе, капибар и заботу
              о природе 🌍
            </p>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="text-3xl mb-2 group-hover:animate-bounce">
                  {stat.emoji}
                </div>
                <div className="text-2xl font-bold text-slate-700 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
                {hoveredStat === index && (
                  <div className="mt-2 text-xs text-green-600 font-medium">
                    ✨ И это только начало!
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Карточки */}
          <div className="grid md:grid-cols-2 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${card.color} ${card.hoverColor} rounded-3xl p-8 border ${card.borderColor} hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group relative overflow-hidden`}
                onClick={() =>
                  setActiveCard(activeCard === index ? null : index)
                }
                onMouseEnter={() => setActiveCard(index)}
              >
                {/* Анимированный фон */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="text-5xl mr-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {card.emoji}
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold ${card.textColor} mb-1`}
                      >
                        {card.title}
                      </h3>
                      <div className="flex items-center">
                        <Icon
                          name={
                            activeCard === index ? "ChevronUp" : "ChevronDown"
                          }
                          size={16}
                          className={`${card.textColor} mr-1 transition-transform duration-300`}
                        />
                        <span
                          className={`text-sm ${card.textColor} opacity-70`}
                        >
                          {activeCard === index ? "Свернуть" : "Подробнее"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`transition-all duration-500 ${
                      activeCard === index
                        ? "max-h-96 opacity-100"
                        : "max-h-20 opacity-70"
                    } overflow-hidden`}
                  >
                    <p className={`${card.textColor} leading-relaxed text-sm`}>
                      {card.content}
                    </p>

                    {activeCard === index && (
                      <div
                        className={`mt-4 p-4 bg-white/50 rounded-xl border border-white/20 animate-fadeIn`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-xs ${card.textColor} font-medium`}
                          >
                            💡 Интересный факт
                          </span>
                          <Icon
                            name="Sparkles"
                            size={16}
                            className={`${card.textColor}`}
                          />
                        </div>
                        <p
                          className={`text-xs ${card.textColor} mt-2 opacity-80`}
                        >
                          {index === 0 &&
                            "Капибары — самые дружелюбные животные в мире!"}
                          {index === 1 &&
                            "Мы публикуем отчеты каждый месяц в наших соцсетях"}
                          {index === 2 &&
                            "У нас более 20 настольных игр для гостей"}
                          {index === 3 &&
                            "За год мы помогли высадить целый лес!"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Призыв к действию */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-orange-100 via-green-100 to-blue-100 rounded-3xl p-8 border border-orange-200 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl mr-3 animate-bounce">🤝</span>
                <h3 className="text-2xl font-bold text-slate-700">
                  Присоединяйтесь к нашей миссии
                </h3>
              </div>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Каждая чашка кофе — это шаг к сохранению природы и помощи
                капибарам. Вместе мы можем сделать мир лучше! 🌍
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-slate-500">
                <div className="flex items-center">
                  <Icon
                    name="Coffee"
                    size={16}
                    className="mr-1 text-orange-500"
                  />
                  Пьем кофе
                </div>
                <div className="text-orange-300">→</div>
                <div className="flex items-center">
                  <Icon
                    name="Heart"
                    size={16}
                    className="mr-1 text-green-500"
                  />
                  Помогаем природе
                </div>
                <div className="text-green-300">→</div>
                <div className="flex items-center">
                  <Icon name="Smile" size={16} className="mr-1 text-blue-500" />
                  Делаем мир лучше
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
