import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const Interesting = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentFact, setCurrentFact] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const facts = [
    {
      emoji: "🤝",
      title: "Социальные животные",
      description: "Капибары — самые дружелюбные животные в мире",
      fullText:
        "Капибары — очень социальные животные. Они живут группами по 10—30 особей и имеют структуру в стае, миролюбиво взаимодействуя друг с другом. Грызуны особым образом показывают внимание: обнимаются и даже спят друг на друге.",
      funFact: "Капибары никогда не дерутся между собой!",
      color: "from-pink-100 to-rose-100",
      borderColor: "border-pink-200",
      textColor: "text-pink-700",
      iconBg: "bg-pink-200",
      hoverColor: "hover:from-pink-200 hover:to-rose-200",
    },
    {
      emoji: "🏊‍♀️",
      title: "Любители воды",
      description: "Могут задерживать дыхание под водой до 5 минут",
      fullText:
        "Капибары славятся своей любовью к водоёмам, именно поэтому их часто называют водяными свинками. У них даже на лапах есть специальные перепонки для плавания. В Японии в Izu Shaboten Park есть специальный водоём для купания капибар в стиле японских купален «Онсэн» с лимонами и мандаринами.",
      funFact: "Они любят горячие ванны так же, как японцы!",
      color: "from-blue-100 to-cyan-100",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      iconBg: "bg-blue-200",
      hoverColor: "hover:from-blue-200 hover:to-cyan-200",
    },
    {
      emoji: "🎵",
      title: "Свой язык общения",
      description: "Используют более 10 различных звуков для общения",
      fullText:
        "Грызуны общаются между собой при помощи своего собственного языка, используя различные звуки: свист, лай, кудахтанье и щелчки. Эти звуки позволяют им передавать информацию о своем положении, об опасности или о других важных событиях.",
      funFact: "Они мурлыкают от удовольствия, как кошки!",
      color: "from-green-100 to-emerald-100",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      iconBg: "bg-green-200",
      hoverColor: "hover:from-green-200 hover:to-emerald-200",
    },
    {
      emoji: "🍃",
      title: "Веганы по природе",
      description: "Едят только растения и могут весить до 65 кг",
      fullText:
        "Капибары — строгие вегетарианцы. Они питаются травой, водными растениями, корой и фруктами. Интересно, что они часто едят собственные экскременты, чтобы получить максимум питательных веществ — это называется копрофагия.",
      funFact: "Они едят до 8 кг растений в день!",
      color: "from-orange-100 to-amber-100",
      borderColor: "border-orange-200",
      textColor: "text-orange-700",
      iconBg: "bg-orange-200",
      hoverColor: "hover:from-orange-200 hover:to-amber-200",
    },
    {
      emoji: "👑",
      title: "Самые крупные грызуны",
      description:
        "Размером с большую собаку, но характером как у дзен-мастера",
      fullText:
        "Капибары — самые крупные грызуны в мире. Взрослые особи могут достигать 1.3 метра в длину и весить до 65 кг. Несмотря на внушительные размеры, они невероятно спокойные и миролюбивые.",
      funFact: "Их называют 'дзен-мастерами' животного мира!",
      color: "from-purple-100 to-violet-100",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
      iconBg: "bg-purple-200",
      hoverColor: "hover:from-purple-200 hover:to-violet-200",
    },
    {
      emoji: "🌍",
      title: "Жители Южной Америки",
      description: "Обитают от Венесуэлы до Аргентины",
      fullText:
        "В дикой природе капибары встречаются только в Южной Америке. Они предпочитают жить возле водоёмов в саваннах, тропических лесах и болотах. К сожалению, из-за охоты и разрушения среды обитания их популяция сокращается.",
      funFact: "В некоторых странах их считают деликатесом!",
      color: "from-teal-100 to-cyan-100",
      borderColor: "border-teal-200",
      textColor: "text-teal-700",
      iconBg: "bg-teal-200",
      hoverColor: "hover:from-teal-200 hover:to-cyan-200",
    },
  ];

  // Автоматическая смена фактов каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentFact((prev) => (prev + 1) % facts.length);
        setIsFlipping(false);
      }, 250);
    }, 5000);

    return () => clearInterval(interval);
  }, [facts.length]);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleFactNavigation = (direction: "prev" | "next") => {
    setIsFlipping(true);
    setTimeout(() => {
      if (direction === "next") {
        setCurrentFact((prev) => (prev + 1) % facts.length);
      } else {
        setCurrentFact((prev) => (prev - 1 + facts.length) % facts.length);
      }
      setIsFlipping(false);
    }, 250);
  };

  return (
    <section
      id="interesting"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Плавающие декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-8xl opacity-10 animate-bounce">
          🐹
        </div>
        <div className="absolute top-60 right-20 text-6xl opacity-10 animate-pulse delay-1000">
          💫
        </div>
        <div className="absolute bottom-20 left-20 text-7xl opacity-10 animate-bounce delay-2000">
          🌊
        </div>
        <div className="absolute bottom-60 right-10 text-5xl opacity-10 animate-pulse delay-500">
          🎵
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full mb-6 shadow-lg">
            <span className="text-4xl animate-bounce">🤓</span>
          </div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 mb-4">
            Удивительные капибары
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-purple-300 via-blue-300 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Познакомьтесь поближе с самыми спокойными и дружелюбными существами
            на планете! 🌍
          </p>
        </div>

        {/* Интерактивная карусель фактов */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200 relative">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => handleFactNavigation("prev")}
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>

              <div className="text-center flex-1">
                <div className="flex justify-center space-x-2 mb-4">
                  {facts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsFlipping(true);
                        setTimeout(() => {
                          setCurrentFact(index);
                          setIsFlipping(false);
                        }, 250);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentFact
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 scale-125"
                          : "bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
                <div
                  className={`transition-all duration-250 ${isFlipping ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
                >
                  <div className="text-6xl mb-4 animate-pulse">
                    {facts[currentFact].emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-700 mb-2">
                    {facts[currentFact].title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {facts[currentFact].description}
                  </p>
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4 border border-purple-100">
                    <div className="flex items-center justify-center mb-2">
                      <Icon
                        name="Lightbulb"
                        size={16}
                        className="text-purple-600 mr-2"
                      />
                      <span className="text-sm font-medium text-purple-700">
                        Интересный факт
                      </span>
                    </div>
                    <p className="text-purple-600 text-sm font-medium">
                      {facts[currentFact].funFact}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleFactNavigation("next")}
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white hover:from-blue-600 hover:to-teal-600 transition-all duration-300 hover:scale-110"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Интерактивные карточки */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {facts.map((fact, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${fact.color} ${fact.hoverColor} rounded-3xl p-6 shadow-lg border ${fact.borderColor} hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group relative overflow-hidden`}
              onClick={() => handleCardClick(index)}
            >
              {/* Анимированный фон */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`${fact.iconBg} rounded-2xl p-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  >
                    <span className="text-2xl">{fact.emoji}</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name={activeCard === index ? "ChevronUp" : "ChevronDown"}
                      size={16}
                      className={`${fact.textColor} transition-transform duration-300`}
                    />
                  </div>
                </div>

                <h3 className={`text-lg font-bold ${fact.textColor} mb-2`}>
                  {fact.title}
                </h3>

                <p className={`${fact.textColor} text-sm opacity-80 mb-3`}>
                  {fact.description}
                </p>

                <div
                  className={`transition-all duration-500 ${
                    activeCard === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="bg-white/50 rounded-xl p-4 border border-white/30">
                    <p
                      className={`${fact.textColor} text-sm leading-relaxed mb-3`}
                    >
                      {fact.fullText}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${fact.textColor} font-medium`}>
                        💡 А знали ли вы?
                      </span>
                      <Icon
                        name="Heart"
                        size={14}
                        className={`${fact.textColor}`}
                      />
                    </div>
                    <p className={`text-xs ${fact.textColor} mt-2 font-medium`}>
                      {fact.funFact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Призыв к действию */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-teal-100 rounded-3xl p-8 border border-purple-200 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl mr-3 animate-bounce">🥰</span>
              <h3 className="text-2xl font-bold text-slate-700">
                Теперь вы знаете капибар лучше!
              </h3>
            </div>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Приходите к нам в кафе, чтобы узнать еще больше удивительных
              фактов и поддержать этих невероятных животных! 🐹☕
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-slate-500">
              <div className="flex items-center">
                <Icon
                  name="BookOpen"
                  size={16}
                  className="mr-1 text-purple-500"
                />
                Узнаем факты
              </div>
              <div className="text-purple-300">→</div>
              <div className="flex items-center">
                <Icon name="Coffee" size={16} className="mr-1 text-blue-500" />
                Пьем кофе
              </div>
              <div className="text-blue-300">→</div>
              <div className="flex items-center">
                <Icon name="Heart" size={16} className="mr-1 text-teal-500" />
                Помогаем капибарам
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interesting;
