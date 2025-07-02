import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Merch() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    items: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заказ отправлен:", formData);
    alert("Спасибо за заказ! Мы свяжемся с вами в ближайшее время 🐹");
    setShowOrderForm(false);
    setFormData({ name: "", email: "", phone: "", items: "", message: "" });
  };

  const merchCollections = [
    {
      id: "clothing",
      title: "Капи-гардероб",
      subtitle: "Одежда для тех, кто живет в ритме капибары",
      gradient: "from-purple-400 via-pink-400 to-red-400",
      bgPattern: "🌈",
      items: [
        {
          name: "Худи «Zen Mode»",
          price: "2990₽",
          emoji: "🤗",
          vibe: "расслабон",
          colors: ["Lavender", "Sage", "Cream"],
          description: "Oversize-худи из органического хлопка",
        },
        {
          name: "Футболка «No Rush»",
          price: "1690₽",
          emoji: "😌",
          vibe: "чилл",
          colors: ["Sand", "Forest", "Cloud"],
          description: "Минималистичный дизайн для максималистов спокойствия",
        },
        {
          name: "Свитшот «Capybara Vibes»",
          price: "2490₽",
          emoji: "✨",
          vibe: "вайб",
          colors: ["Sunset", "Ocean", "Earth"],
          description: "Трендовый оверсайз с 3D-вышивкой",
        },
      ],
    },
    {
      id: "lifestyle",
      title: "Лайфстайл",
      subtitle: "Предметы для создания атмосферы дзена",
      gradient: "from-emerald-400 via-teal-400 to-cyan-400",
      bgPattern: "🧘",
      items: [
        {
          name: "Термокружка «Mindful»",
          price: "1290₽",
          emoji: "🫖",
          vibe: "осознанность",
          colors: ["Matcha", "Rose Gold", "Black"],
          description: "Двойные стенки + минималистичная гравировка",
        },
        {
          name: "Планнер «Slow Living»",
          price: "890₽",
          emoji: "📖",
          vibe: "планирование",
          colors: ["Natural", "Sage"],
          description: "Недатированный планнер для осознанной жизни",
        },
        {
          name: "Эко-сумка «Less Stuff»",
          price: "990₽",
          emoji: "🌱",
          vibe: "эко",
          colors: ["Natural", "Charcoal"],
          description: "Из переработанного материала",
        },
      ],
    },
    {
      id: "digital",
      title: "Цифровая коllection",
      subtitle: "NFT и цифровые артобъекты от капибар",
      gradient: "from-violet-400 via-purple-400 to-indigo-400",
      bgPattern: "🎨",
      items: [
        {
          name: "Стикерпак «Капи-эмоции 2.0»",
          price: "390₽",
          emoji: "😊",
          vibe: "эмоции",
          colors: ["Digital"],
          description: "24 анимированных стикера для Telegram",
        },
        {
          name: "Wallpaper Pack «Zen Spaces»",
          price: "190₽",
          emoji: "🖼️",
          vibe: "эстетика",
          colors: ["4K"],
          description: "12 обоев высокого разрешения",
        },
        {
          name: "Подписка «Капи-медитации»",
          price: "490₽/мес",
          emoji: "🎧",
          vibe: "медитация",
          colors: ["Audio"],
          description: "Еженедельные аудио-медитации",
        },
      ],
    },
  ];

  return (
    <section
      id="merch"
      className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Анимированный фон */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Футуристичный заголовок */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-8 shadow-2xl relative">
              <span className="text-4xl">🚀</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75 animate-pulse"></div>
            </div>

            <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-6 animate-pulse">
              КАПИ × МЕРЧ 2.0
            </h2>

            <div className="w-40 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mx-auto mb-8 rounded-full shadow-lg"></div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Лимитированная коллекция мерча нового поколения. Где физические
              вещи встречаются с цифровым искусством 🎭
            </p>

            {/* Статистика */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  47+
                </div>
                <div className="text-sm text-gray-400">Уникальных дизайнов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
                <div className="text-sm text-gray-400">Вайбов спокойствия</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-400">Eco-friendly</div>
              </div>
            </div>

            {/* Призыв к сбору идей */}
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mr-4">
                  <Icon name="Lightbulb" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Community Driven Design
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ваши идеи формируют следующую коллекцию! Через полгода выпустим
                <span className="text-purple-400 font-semibold">
                  {" "}
                  новую волну мерча
                </span>{" "}
                на основе ваших предложений.
              </p>
            </div>
          </div>

          {/* Коллекции */}
          <div className="space-y-16">
            {merchCollections.map((collection, collectionIndex) => (
              <div key={collection.id} className="relative">
                {/* Заголовок коллекции */}
                <div className="text-center mb-12">
                  <div
                    className={`inline-block text-6xl mb-4 animate-bounce`}
                    style={{ animationDelay: `${collectionIndex * 200}ms` }}
                  >
                    {collection.bgPattern}
                  </div>
                  <h3
                    className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${collection.gradient} mb-3`}
                  >
                    {collection.title}
                  </h3>
                  <p className="text-gray-400 text-lg">{collection.subtitle}</p>
                </div>

                {/* Сетка товаров */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {collection.items.map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border-2 border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer overflow-hidden ${
                        hoveredItem === `${collection.id}-${itemIndex}`
                          ? "shadow-2xl shadow-purple-500/20"
                          : ""
                      }`}
                      onMouseEnter={() =>
                        setHoveredItem(`${collection.id}-${itemIndex}`)
                      }
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() =>
                        setSelectedItem(`${collection.id}-${itemIndex}`)
                      }
                    >
                      {/* Анимированный фон карточки */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>

                      {/* Голографический эффект */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                      <CardContent className="p-8 relative z-10">
                        <div className="flex items-start justify-between mb-6">
                          <div
                            className={`text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                          >
                            {item.emoji}
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-white mb-1">
                              {item.price}
                            </div>
                            <Badge
                              className={`bg-gradient-to-r ${collection.gradient} text-white border-0 text-xs px-3 py-1`}
                            >
                              #{item.vibe}
                            </Badge>
                          </div>
                        </div>

                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                          {item.name}
                        </h4>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Цветовая палитра */}
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            {item.colors.map((color, colorIndex) => (
                              <div
                                key={colorIndex}
                                className="w-6 h-6 rounded-full border-2 border-white/30 flex items-center justify-center text-xs text-white font-bold"
                                style={{
                                  background:
                                    color === "Digital"
                                      ? "linear-gradient(45deg, #8B5CF6, #EC4899)"
                                      : color === "4K"
                                        ? "linear-gradient(45deg, #06B6D4, #3B82F6)"
                                        : color === "Audio"
                                          ? "linear-gradient(45deg, #F59E0B, #EF4444)"
                                          : `var(--${color.toLowerCase()}, #6B7280)`,
                                }}
                                title={color}
                              >
                                {color.length <= 2 ? color : color[0]}
                              </div>
                            ))}
                          </div>

                          <Button
                            size="sm"
                            className={`bg-gradient-to-r ${collection.gradient} hover:shadow-lg transition-all duration-300`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setFormData({ ...formData, items: item.name });
                              setShowOrderForm(true);
                            }}
                          >
                            <Icon name="Plus" size={16} className="mr-1" />
                            Add
                          </Button>
                        </div>

                        {/* Индикатор популярности */}
                        <div className="mt-4 pt-4 border-t border-slate-700/50">
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>🔥 Trending</span>
                            <span>⭐ 4.9/5</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Футуристичный CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30 relative overflow-hidden">
              {/* Анимированные частицы */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                  ></div>
                ))}
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-white mb-6">
                  Ready to join the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Capybara Revolution
                  </span>
                  ?
                </h3>

                <div className="flex flex-wrap gap-6 justify-center">
                  <Button
                    onClick={() => setShowOrderForm(true)}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <Icon name="Zap" size={24} className="mr-3" />
                    Заказать сейчас
                  </Button>

                  <Button
                    onClick={() =>
                      window.open(
                        "mailto:team@CapiCoffee.com?subject=Идея для мерча",
                        "_blank",
                      )
                    }
                    variant="outline"
                    className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 px-12 py-4 text-lg rounded-2xl transition-all duration-300"
                  >
                    <Icon name="Lightbulb" size={24} className="mr-3" />
                    Предложить идею
                  </Button>

                  <Button
                    onClick={() => window.open("tel:89995535494", "_blank")}
                    variant="outline"
                    className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-12 py-4 text-lg rounded-2xl transition-all duration-300"
                  >
                    <Icon name="Phone" size={24} className="mr-3" />
                    Связаться
                  </Button>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
                  <div className="flex items-center justify-center">
                    <Icon
                      name="Truck"
                      size={16}
                      className="mr-2 text-green-400"
                    />
                    Доставка по всей России
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon
                      name="Shield"
                      size={16}
                      className="mr-2 text-blue-400"
                    />
                    Гарантия качества
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon
                      name="Heart"
                      size={16}
                      className="mr-2 text-red-400"
                    />
                    5% на помощь капибарам
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Модернизированная форма заказа */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                  <Icon name="ShoppingCart" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    Future Order
                  </h3>
                  <p className="text-gray-400">Оформите заказ в стиле 2024</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowOrderForm(false)}
                className="text-gray-400 hover:text-white"
              >
                <Icon name="X" size={24} />
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-white font-medium flex items-center mb-2"
                  >
                    <Icon name="User" size={16} className="mr-2" />
                    Ваше имя
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-slate-700/50 border-slate-600 text-white focus:border-purple-500 rounded-xl"
                    placeholder="Как к вам обращаться?"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="text-white font-medium flex items-center mb-2"
                  >
                    <Icon name="Mail" size={16} className="mr-2" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-slate-700/50 border-slate-600 text-white focus:border-purple-500 rounded-xl"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="text-white font-medium flex items-center mb-2"
                >
                  <Icon name="Phone" size={16} className="mr-2" />
                  Телефон
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-slate-700/50 border-slate-600 text-white focus:border-purple-500 rounded-xl"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <Label
                  htmlFor="items"
                  className="text-white font-medium flex items-center mb-2"
                >
                  <Icon name="Package" size={16} className="mr-2" />
                  Что заказываем?
                </Label>
                <Textarea
                  id="items"
                  required
                  value={formData.items}
                  onChange={(e) =>
                    setFormData({ ...formData, items: e.target.value })
                  }
                  className="bg-slate-700/50 border-slate-600 text-white focus:border-purple-500 rounded-xl min-h-20"
                  placeholder="Например: Худи Zen Mode размер M, цвет Lavender"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-white font-medium flex items-center mb-2"
                >
                  <Icon name="MessageSquare" size={16} className="mr-2" />
                  Дополнительно
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-slate-700/50 border-slate-600 text-white focus:border-purple-500 rounded-xl min-h-16"
                  placeholder="Особые пожелания или вопросы?"
                />
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-500/30">
                <div className="flex items-start">
                  <Icon
                    name="Sparkles"
                    size={20}
                    className="text-purple-400 mr-3 mt-0.5 flex-shrink-0"
                  />
                  <div className="text-sm text-gray-300">
                    <p className="font-medium mb-2 text-white">
                      Процесс заказа:
                    </p>
                    <ul className="space-y-1 text-xs">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        Получаем заказ мгновенно
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                        Связываемся в течение 2 часов
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        Доставка или самовывоз из кафе
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-lg font-semibold"
                >
                  <Icon name="Zap" size={20} className="mr-2" />
                  Отправить в космос
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowOrderForm(false)}
                  className="px-8 py-4 border-2 border-slate-600 text-gray-400 hover:bg-slate-700/50 rounded-2xl"
                >
                  Отмена
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
