import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Merch() {
  const merchItems = [
    {
      name: "Футболка «Спокойствие капибары»",
      price: "от 1990₽",
      image: "/placeholder.svg",
      description: "Мягкая и уютная, как объятия капибары",
      colors: ["Бежевый", "Лесной зеленый", "Кремовый"],
      sizes: ["XS", "S", "M", "L", "XL"],
      icon: "👕",
    },
    {
      name: "Кружка «Утренний дзен»",
      price: "890₽",
      image: "/placeholder.svg",
      description: "Для кофе и созерцания жизни",
      colors: ["Белая с принтом", "Бежевая матовая"],
      icon: "☕",
    },
    {
      name: "Тотбэг «Ноу спешл»",
      price: "1290₽",
      image: "/placeholder.svg",
      description: "Прочная сумка для неспешных прогулок",
      colors: ["Натуральный", "Светло-зеленый"],
      icon: "👜",
    },
    {
      name: "Стикерпак «Капи-эмоции»",
      price: "290₽",
      image: "/placeholder.svg",
      description: "12 милых стикеров с капибарами",
      colors: ["Мульти"],
      icon: "🎨",
    },
    {
      name: "Шапка «Теплые мысли»",
      price: "1490₽",
      image: "/placeholder.svg",
      description: "Зимняя шапка с вышитой капибарой",
      colors: ["Бежевая", "Серая", "Зеленая"],
      icon: "🧢",
    },
    {
      name: "Значок «Клуб капибар»",
      price: "390₽",
      image: "/placeholder.svg",
      description: "Эмалированный значок для истинных фанов",
      colors: ["Золотой", "Серебряный"],
      icon: "🏷️",
    },
  ];

  return (
    <section
      id="merch"
      className="py-20 bg-gradient-to-br from-nature-50 via-cream-50 to-forest-50 relative overflow-hidden"
    >
      {/* Декоративные элементы */}
      <div className="absolute top-16 left-8 text-7xl opacity-10 animate-pulse">
        🛍️
      </div>
      <div className="absolute top-40 right-12 text-5xl opacity-15 animate-bounce">
        🎁
      </div>
      <div className="absolute bottom-32 left-20 text-6xl opacity-10">✨</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-nature-200 to-forest-200 rounded-full mb-6 shadow-lg">
              <span className="text-3xl">🐹</span>
            </div>
            <h2 className="text-5xl font-bold text-forest-800 mb-4">
              Мерч от капибар
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-nature-500 via-forest-500 to-aqua-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-forest-600 max-w-3xl mx-auto leading-relaxed mb-8">
              По вашим многочисленным просьбам мы выпустили небольшую коллекцию
              мерча с капибарами. Получилось очень здорово! 🎉
            </p>

            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 max-w-2xl mx-auto border-2 border-amber-200">
              <div className="flex items-center justify-center mb-3">
                <Icon
                  name="Lightbulb"
                  size={24}
                  className="text-amber-600 mr-2"
                />
                <span className="font-semibold text-amber-800">
                  Ваши идеи важны!
                </span>
              </div>
              <p className="text-amber-700 text-sm">
                Будем собирать ваши идеи и через полгода сделаем еще что-то
                новенькое в нашу коллекцию мерча
              </p>
            </div>
          </div>

          {/* Сетка товаров */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {merchItems.map((item, index) => (
              <Card
                key={index}
                className="group bg-white/90 backdrop-blur-sm border-2 border-white/60 hover:border-nature-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-cream-100 to-nature-100 flex items-center justify-center">
                    <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-nature-400 to-forest-400 text-white border-0 shadow-lg">
                        Новинка ✨
                      </Badge>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-forest-800 group-hover:text-nature-700 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="text-2xl font-bold text-nature-600">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-forest-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-forest-700">
                        Цвета:
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.colors.map((color, colorIndex) => (
                          <Badge
                            key={colorIndex}
                            variant="outline"
                            className="text-xs bg-forest-50 text-forest-600 border-forest-300"
                          >
                            {color}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {item.sizes && (
                      <div>
                        <span className="text-sm font-medium text-forest-700">
                          Размеры:
                        </span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.sizes.map((size, sizeIndex) => (
                            <Badge
                              key={sizeIndex}
                              variant="outline"
                              className="text-xs bg-nature-50 text-nature-600 border-nature-300"
                            >
                              {size}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Блок покупки */}
          <div className="bg-gradient-to-br from-forest-100 via-nature-100 to-aqua-100 rounded-3xl p-10 border-3 border-forest-300 shadow-2xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-forest-400 to-nature-400 rounded-full mb-6 shadow-lg">
                <Icon name="ShoppingBag" size={32} className="text-white" />
              </div>

              <h3 className="text-3xl font-bold text-forest-700 mb-6">
                Как приобрести мерч?
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/70 rounded-2xl p-6 backdrop-blur-sm border-2 border-white/50">
                  <div className="text-4xl mb-4">🏪</div>
                  <h4 className="text-xl font-semibold text-forest-700 mb-3">
                    Посетите наше кафе
                  </h4>
                  <p className="text-forest-600 leading-relaxed">
                    Посмотреть и приобрести мерч вы можете в нашем уютном кафе.
                    Приходите, выбирайте и забирайте сразу!
                  </p>
                </div>

                <div className="bg-white/70 rounded-2xl p-6 backdrop-blur-sm border-2 border-white/50">
                  <div className="text-4xl mb-4">📞</div>
                  <h4 className="text-xl font-semibold text-forest-700 mb-3">
                    Уточните наличие
                  </h4>
                  <p className="text-forest-600 leading-relaxed mb-4">
                    О товарах в наличии и размерах можно узнать заранее
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center">
                      <Icon
                        name="Mail"
                        size={16}
                        className="mr-2 text-nature-600"
                      />
                      <span className="text-forest-700">
                        team@CapiCoffee.com
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Icon
                        name="Phone"
                        size={16}
                        className="mr-2 text-nature-600"
                      />
                      <span className="text-forest-700">8 (999) 553-54-94</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-gradient-to-r from-forest-500 to-nature-500 hover:from-forest-600 hover:to-nature-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Написать на почту
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-forest-400 text-forest-700 hover:bg-forest-50 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200">
                <p className="text-amber-700 text-sm font-medium flex items-center justify-center">
                  <Icon name="Heart" size={16} className="mr-2" />
                  Часть прибыли от мерча также идет на помощь капибарам!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
