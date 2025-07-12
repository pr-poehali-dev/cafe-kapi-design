import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  emoji: string;
  description: string;
  category: "coffee" | "food" | "merch";
}

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Капи-латте",
      price: 280,
      quantity: 2,
      emoji: "☕",
      description: "С корицей и любовью",
      category: "coffee",
    },
    {
      id: "2",
      name: "Круассан с шоколадом",
      price: 190,
      quantity: 1,
      emoji: "🥐",
      description: "Свежий французский",
      category: "food",
    },
    {
      id: "3",
      name: "Кружка Капи",
      price: 890,
      quantity: 1,
      emoji: "🏺",
      description: "Лимитированная серия",
      category: "merch",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [cartAnimation, setCartAnimation] = useState(false);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setItems(items.filter((item) => item.id !== id));
      return;
    }
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const applyPromo = () => {
    if (
      promoCode.toLowerCase() === "капи" ||
      promoCode.toLowerCase() === "kapi"
    ) {
      setIsPromoApplied(true);
      setCartAnimation(true);
      setTimeout(() => setCartAnimation(false), 500);
    }
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const discount = isPromoApplied ? subtotal * 0.15 : 0;
  const donationAmount = subtotal * 0.05;
  const total = subtotal - discount;

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "coffee":
        return "from-orange-100 to-yellow-100 border-orange-200";
      case "food":
        return "from-pink-100 to-red-100 border-pink-200";
      case "merch":
        return "from-purple-100 to-blue-100 border-purple-200";
      default:
        return "from-gray-100 to-gray-200 border-gray-200";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "coffee":
        return "Coffee";
      case "food":
        return "Cookie";
      case "merch":
        return "Gift";
      default:
        return "Package";
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Кнопка корзины */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed top-6 right-6 z-40 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full p-4 group ${cartAnimation ? "animate-pulse scale-110" : ""}`}
      >
        <div className="relative">
          <Icon
            name="ShoppingCart"
            size={24}
            className="group-hover:scale-110 transition-transform duration-300"
          />
          {itemCount > 0 && (
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce">
              {itemCount}
            </div>
          )}
        </div>
      </Button>

      {/* Оверлей и модальное окно корзины */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Затемненный фон с анимацией */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Само окно корзины */}
          <div className="absolute right-0 top-0 h-full w-full max-w-lg bg-gradient-to-br from-white via-purple-50 to-blue-50 shadow-2xl transform transition-transform duration-500 overflow-y-auto">
            {/* Анимированный фон */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-40 left-10 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-5 text-6xl opacity-5 animate-bounce delay-500">
                🛒
              </div>
              <div className="absolute bottom-1/4 left-5 text-4xl opacity-5 animate-bounce delay-1500">
                ✨
              </div>
            </div>

            <div className="relative z-10 p-6">
              {/* Заголовок */}
              <div className="flex items-center justify-between mb-8 sticky top-0 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-purple-200">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-full p-3 mr-4">
                    <Icon
                      name="ShoppingBag"
                      size={24}
                      className="text-purple-600"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                      Космическая корзина
                    </h2>
                    <p className="text-purple-500 text-sm">
                      {itemCount} товара для приключений
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-purple-100 rounded-full p-2"
                >
                  <Icon name="X" size={20} className="text-purple-600" />
                </Button>
              </div>

              {/* Товары */}
              <div className="space-y-4 mb-8">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className={`bg-gradient-to-r ${getCategoryColor(item.category)} rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Декоративные элементы */}
                    <div className="absolute top-2 right-2 opacity-10 text-2xl group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        name={getCategoryIcon(item.category) as any}
                        size={32}
                      />
                    </div>

                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="text-4xl bg-white/80 rounded-2xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          {item.emoji}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 text-lg mb-1">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {item.description}
                          </p>
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                              {item.price} ₽
                            </span>
                            <span className="text-xs bg-white/60 rounded-full px-2 py-1 text-gray-600">
                              за штуку
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Количество */}
                      <div className="flex items-center space-x-3 bg-white/80 rounded-2xl p-2 shadow-md">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="rounded-full w-8 h-8 p-0 hover:bg-red-100 text-red-600"
                        >
                          <Icon name="Minus" size={16} />
                        </Button>
                        <span className="font-bold text-gray-800 min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="rounded-full w-8 h-8 p-0 hover:bg-green-100 text-green-600"
                        >
                          <Icon name="Plus" size={16} />
                        </Button>
                      </div>
                    </div>

                    {/* Итоговая стоимость товара */}
                    <div className="mt-4 text-right">
                      <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                        {item.price * item.quantity} ₽
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Промокод */}
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-6 shadow-lg border border-yellow-200 mb-8 relative overflow-hidden">
                <div className="absolute top-2 right-2 text-3xl opacity-20">
                  🎁
                </div>
                <h3 className="font-bold text-orange-700 mb-4 flex items-center">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Есть промокод?
                </h3>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    placeholder="Введите код..."
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 rounded-2xl border border-orange-200 px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                  />
                  <Button
                    onClick={applyPromo}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-2xl px-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isPromoApplied}
                  >
                    {isPromoApplied ? (
                      <Icon name="Check" size={20} />
                    ) : (
                      <Icon name="Gift" size={20} />
                    )}
                  </Button>
                </div>
                {isPromoApplied && (
                  <div className="mt-3 text-green-600 text-sm flex items-center animate-fade-in">
                    <Icon name="CheckCircle" size={16} className="mr-2" />
                    Промокод применен! Скидка 15% 🎉
                  </div>
                )}
              </div>

              {/* Итоги */}
              <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100 rounded-3xl p-6 shadow-xl border border-purple-200 mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-50"></div>
                <div className="relative z-10">
                  <h3 className="font-bold text-purple-700 mb-4 text-xl flex items-center">
                    <Icon name="Calculator" size={24} className="mr-3" />
                    Итоги полета
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Подытог:</span>
                      <span className="font-semibold text-gray-800">
                        {subtotal} ₽
                      </span>
                    </div>

                    {isPromoApplied && (
                      <div className="flex justify-between items-center">
                        <span className="text-green-600 flex items-center">
                          <Icon name="Sparkles" size={16} className="mr-1" />
                          Скидка 15%:
                        </span>
                        <span className="font-semibold text-green-600">
                          -{discount} ₽
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <span className="text-teal-600 flex items-center text-sm">
                        <Icon name="Heart" size={16} className="mr-1" />
                        Помощь капибарам (5%):
                      </span>
                      <span className="font-semibold text-teal-600 text-sm">
                        {donationAmount.toFixed(0)} ₽
                      </span>
                    </div>

                    <div className="border-t border-purple-200 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                          К оплате:
                        </span>
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                          {total} ₽
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Кнопки действий */}
              <div className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white py-4 text-lg font-bold rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Icon
                    name="CreditCard"
                    size={24}
                    className="mr-3 relative z-10"
                  />
                  <span className="relative z-10">Оплатить заказ 🚀</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-2 border-purple-300 text-purple-600 hover:bg-purple-50 py-4 text-lg rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <Icon name="ShoppingCart" size={24} className="mr-3" />
                  Продолжить покупки
                </Button>
              </div>

              {/* Информационная панель */}
              <div className="mt-8 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-3xl p-6 shadow-lg border border-cyan-200">
                <div className="text-center">
                  <div className="text-3xl mb-3">🌌</div>
                  <h4 className="font-bold text-blue-700 mb-2">
                    Бонусы космонавта
                  </h4>
                  <p className="text-blue-600 text-sm leading-relaxed">
                    За этот заказ вы получите{" "}
                    <span className="font-bold text-teal-600">
                      {Math.floor(total / 100)} звезд
                    </span>{" "}
                    для следующих покупок! А еще поможете капибарам на сумму{" "}
                    <span className="font-bold text-green-600">
                      {donationAmount.toFixed(0)} ₽
                    </span>{" "}
                    💫
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
