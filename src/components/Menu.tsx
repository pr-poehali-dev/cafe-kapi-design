import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Menu() {
  const coffeeMenu = [
    { name: "Эспрессо", price: 100, icon: "☕" },
    { name: "Американо", price: 160, icon: "☕" },
    { name: "Фильтр", price: 180, icon: "☕" },
    { name: "Воронка", price: 180, icon: "☕" },
    { name: "Капучино", price: 200, icon: "☕" },
    { name: "Латте", price: 200, icon: "☕" },
    { name: "Раф классический", price: 280, icon: "☕" },
    { name: "Раф от Капи с апельсином", price: 300, icon: "🍊", special: true },
  ];

  const nonCoffeeMenu = [
    { name: "Бразильский горячий шоколад", price: 220, icon: "🍫" },
    {
      name: "Традиционный китайский зеленый чай",
      price: 370,
      unit: "чайник 0,5л",
      icon: "🍃",
    },
    {
      name: "Зеленый чай с жасмином",
      price: 380,
      unit: "чайник 0,5л",
      icon: "🌸",
    },
    {
      name: "Черный чай классический",
      price: 370,
      unit: "чайник 0,5л",
      icon: "🍃",
    },
    {
      name: "Фирменный чай от Капи с апельсином, мятой и медом",
      price: 450,
      unit: "чайник 0,5л",
      icon: "🍯",
      special: true,
    },
  ];

  const dessertMenu = [
    { name: "Чизкейк классический", price: 220, icon: "🍰" },
    { name: "Чизкейк от Капи", price: 260, icon: "🍰", special: true },
    { name: "Бразильский морковный пирог", price: 220, icon: "🥕" },
    {
      name: "Бейжиньо (бразильский маленький поцелуй)",
      price: 120,
      unit: "шарик",
      icon: "🍬",
    },
    {
      name: "Брауни с бразильским шоколадом и специями",
      price: 230,
      icon: "🍫",
    },
  ];

  const MenuItem = ({ item, category }) => (
    <div className="flex items-center justify-between p-4 rounded-lg bg-white/70 backdrop-blur-sm border border-forest-200 hover:border-forest-300 transition-all duration-300">
      <div className="flex items-center space-x-3">
        <div className="text-2xl">{item.icon}</div>
        <div>
          <h4
            className={`font-medium ${item.special ? "text-nature-700" : "text-forest-700"}`}
          >
            {item.name}
            {item.special && (
              <Badge
                variant="outline"
                className="ml-2 text-xs bg-nature-100 text-nature-700 border-nature-300"
              >
                от Капи
              </Badge>
            )}
          </h4>
          {item.unit && <p className="text-sm text-forest-500">{item.unit}</p>}
        </div>
      </div>
      <div
        className={`font-bold ${item.special ? "text-nature-600" : "text-forest-600"}`}
      >
        {item.price}₽
      </div>
    </div>
  );

  return (
    <section
      id="menu"
      className="py-16 bg-gradient-to-br from-cream-50 to-forest-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-800 mb-4">
              Наше меню
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-forest-500 via-nature-500 to-aqua-500 mx-auto mb-6"></div>
            <p className="text-lg text-forest-600">
              Каждый напиток и десерт приготовлен с любовью к кофе и заботой о
              капибарах
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Кофе */}
            <Card className="bg-gradient-to-br from-forest-50 to-forest-100 border-forest-300 border-2">
              <CardHeader className="text-center">
                <div className="text-4xl mb-3">☕</div>
                <CardTitle className="text-2xl text-forest-800">Кофе</CardTitle>
                <CardDescription className="text-forest-600">
                  Отборные зерна из лучших регионов мира
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {coffeeMenu.map((item, index) => (
                  <MenuItem key={index} item={item} category="coffee" />
                ))}

                <div className="mt-6 p-4 bg-nature-50 rounded-lg border border-nature-200">
                  <div className="text-sm text-nature-700 space-y-1">
                    <div className="flex items-center">
                      <Icon name="Plus" size={14} className="mr-2" />
                      Любой кофе декаф вариант +40₽
                    </div>
                    <div className="flex items-center">
                      <Icon name="Plus" size={14} className="mr-2" />
                      Альтернативное молоко +20₽
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Не кофе */}
            <Card className="bg-gradient-to-br from-nature-50 to-aqua-100 border-nature-300 border-2">
              <CardHeader className="text-center">
                <div className="text-4xl mb-3">🍃</div>
                <CardTitle className="text-2xl text-nature-800">
                  Не кофе
                </CardTitle>
                <CardDescription className="text-nature-600">
                  Чай, шоколад и другие согревающие напитки
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {nonCoffeeMenu.map((item, index) => (
                  <MenuItem key={index} item={item} category="noncoffee" />
                ))}
              </CardContent>
            </Card>

            {/* Десерты */}
            <Card className="bg-gradient-to-br from-cream-100 to-cream-200 border-cream-400 border-2 md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center">
                <div className="text-4xl mb-3">🍰</div>
                <CardTitle className="text-2xl text-earth-800">
                  Десерты
                </CardTitle>
                <CardDescription className="text-earth-600">
                  Домашние сладости с бразильскими нотками
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {dessertMenu.map((item, index) => (
                  <MenuItem key={index} item={item} category="dessert" />
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-br from-forest-100 via-nature-100 to-aqua-100 rounded-2xl p-8 max-w-4xl mx-auto border-2 border-forest-300">
              <div className="text-4xl mb-4">🐾</div>
              <h3 className="text-2xl font-semibold text-forest-700 mb-4">
                Каждая покупка помогает капибарам!
              </h3>
              <p className="text-forest-600 leading-relaxed mb-4">
                5% с каждого заказа мы отправляем в фонды защиты капибар. Ваш
                кофе не только согревает вас, но и помогает создавать водоемы,
                высаживать деревья и защищать естественную среду обитания этих
                удивительных животных.
              </p>
              <Badge
                variant="outline"
                className="bg-white/70 text-forest-700 border-forest-400 px-4 py-2"
              >
                <Icon name="Heart" size={16} className="mr-2" />
                Прозрачная отчетность в нашей книге благотворительности
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
