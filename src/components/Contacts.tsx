import Icon from "@/components/ui/icon";
import { useState } from "react";

const Contacts = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyPhone = () => {
    navigator.clipboard.writeText("+7 (999) 553-54-94");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("team@CapiCoffee.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contacts"
      className="py-20 bg-gradient-to-br from-orange-50 via-blue-50 to-green-50 relative overflow-hidden"
    >
      {/* Плавающие декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">
          🐾
        </div>
        <div className="absolute top-40 right-20 text-4xl opacity-20 animate-pulse">
          💌
        </div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-bounce delay-1000">
          📞
        </div>
        <div className="absolute bottom-40 right-10 text-3xl opacity-20 animate-pulse delay-500">
          🌿
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-200 to-green-200 rounded-full mb-6 shadow-lg">
            <span className="text-3xl">📍</span>
          </div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-blue-600 to-green-600 mb-4">
            Найдите нас
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Мы всегда рады гостям! Приходите за чашечкой кофе и порцией
            капибара-терапии 🐹☕
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Местоположение */}
            <div
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
              onMouseEnter={() => setHoveredCard("location")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl p-4 mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Icon name="MapPin" size={28} className="text-orange-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-800">Адрес</h3>
                  <p className="text-orange-600 text-sm">Где мы прячемся</p>
                </div>
              </div>
              <p className="text-slate-600 text-lg font-medium">
                г. Москва,
                <br />
                Никольская улица 8
              </p>
              <div className="mt-4 text-orange-500 text-sm">
                {hoveredCard === "location"
                  ? "📍 Кликните, чтобы открыть карту"
                  : "🗺️ Центр города"}
              </div>
            </div>

            {/* Время работы */}
            <div
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
              onMouseEnter={() => setHoveredCard("time")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl p-4 mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Icon name="Clock" size={28} className="text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800">
                    Режим работы
                  </h3>
                  <p className="text-blue-600 text-sm">Когда мы открыты</p>
                </div>
              </div>
              <p className="text-slate-600 text-lg font-medium">
                Ежедневно
                <br />с 10:00 до 22:00
              </p>
              <div className="mt-4 text-blue-500 text-sm">
                {hoveredCard === "time"
                  ? "⏰ Сейчас открыто!"
                  : "☕ 12 часов уюта"}
              </div>
            </div>

            {/* Контакты */}
            <div
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-green-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
              onMouseEnter={() => setHoveredCard("contact")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-2xl p-4 mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Icon name="Phone" size={28} className="text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800">
                    Связаться
                  </h3>
                  <p className="text-green-600 text-sm">Позвоните нам</p>
                </div>
              </div>
              <div className="space-y-3">
                <button
                  onClick={copyPhone}
                  className="block w-full text-left text-slate-600 text-lg font-medium hover:text-green-600 transition-colors"
                >
                  +7 (999) 553-54-94
                </button>
                <button
                  onClick={copyEmail}
                  className="block w-full text-left text-slate-600 text-sm hover:text-green-600 transition-colors"
                >
                  team@CapiCoffee.com
                </button>
              </div>
              <div className="mt-4 text-green-500 text-sm">
                {copiedPhone
                  ? "📋 Телефон скопирован!"
                  : copiedEmail
                    ? "📋 Email скопирован!"
                    : hoveredCard === "contact"
                      ? "📋 Кликните, чтобы скопировать"
                      : "📞 Быстрая связь"}
              </div>
            </div>
          </div>

          {/* Социальные сети с анимацией */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-700 mb-2">
                Следите за капибара-новостями
              </h3>
              <p className="text-slate-500">
                В социальных сетях всегда что-то интересное!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="#"
                className="group relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-xl">📘</span>
                    </div>
                    <div>
                      <h4 className="font-bold">ВКонтакте</h4>
                      <p className="text-blue-100 text-sm">@capicoffee</p>
                    </div>
                  </div>
                  <p className="text-blue-100 text-sm">
                    Фото милых капибар каждый день
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="group relative overflow-hidden bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-6 text-white hover:from-sky-600 hover:to-sky-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-sky-400 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-xl">✈️</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Telegram</h4>
                      <p className="text-sky-100 text-sm">@capicoffee_bot</p>
                    </div>
                  </div>
                  <p className="text-sky-100 text-sm">
                    Бронирование столиков и акции
                  </p>
                </div>
              </a>

              <a
                href="mailto:team@CapiCoffee.com"
                className="group relative overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-emerald-400 rounded-lg flex items-center justify-center mr-3">
                      <Icon name="Mail" size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-emerald-100 text-sm">Напишите нам</p>
                    </div>
                  </div>
                  <p className="text-emerald-100 text-sm">
                    Для деловых предложений
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
