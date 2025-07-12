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
        return "bg-cream-50 border-earth-200";
      case "food":
        return "bg-nature-50 border-forest-200";
      case "merch":
        return "bg-aqua-50 border-nature-200";
      default:
        return "bg-gray-50 border-gray-200";
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
        className={`fixed top-6 right-6 z-40 bg-forest-600 hover:bg-forest-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-3 group ${cartAnimation ? "animate-pulse scale-110" : ""}`}
      >
        <div className="relative">
          <Icon
            name="ShoppingCart"
            size={20}
            className="group-hover:scale-110 transition-transform duration-300"
          />
          {itemCount > 0 && (
            <div className="absolute -top-2 -right-2 bg-nature-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
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
            className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Само окно корзины */}
          <div className="absolute right-0 top-0 h-full w-full max-w-lg bg-white shadow-2xl transform transition-transform duration-500 overflow-y-auto">
            <div className="p-6">
              {/* Заголовок */}
              <div className="flex items-center justify-between mb-8 sticky top-0 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center">
                  <div className="bg-forest-100 rounded-full p-3 mr-4">
                    <Icon
                      name="ShoppingBag"
                      size={24}
                      className="text-forest-600"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-forest-800">
                      Корзина
                    </h2>
                    <p className="text-forest-600 text-sm">
                      {itemCount}{" "}
                      {itemCount === 1
                        ? "товар"
                        : itemCount < 5
                          ? "товара"
                          : "товаров"}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-gray-100 rounded-full p-2"
                >
                  <Icon name="X" size={20} className="text-gray-600" />
                </Button>
              </div>

              {/* Товары */}
              <div className="space-y-4 mb-8">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className={`${getCategoryColor(item.category)} rounded-xl p-4 shadow-sm border hover:shadow-md transition-all duration-200`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="text-3xl bg-white/80 rounded-lg p-2 shadow-sm">
                          {item.emoji}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 text-lg mb-1">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {item.description}
                          </p>
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-semibold text-forest-700">
                              {item.price} ₽
                            </span>
                            <span className="text-xs bg-white/60 rounded-full px-2 py-1 text-gray-600">
                              за штуку
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Количество */}
                      <div className="flex items-center space-x-2 bg-white/80 rounded-lg p-2 shadow-sm">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="rounded-full w-8 h-8 p-0 hover:bg-red-100 text-red-600"
                        >
                          <Icon name="Minus" size={14} />
                        </Button>
                        <span className="font-semibold text-gray-800 min-w-[24px] text-center">
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
                          <Icon name="Plus" size={14} />
                        </Button>
                      </div>
                    </div>

                    {/* Итоговая стоимость товара */}
                    <div className="mt-3 text-right">
                      <span className="text-lg font-bold text-forest-700">
                        {item.price * item.quantity} ₽
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Промокод */}
              <div className="bg-cream-50 rounded-xl p-4 shadow-sm border border-cream-200 mb-6">
                <h3 className="font-semibold text-earth-700 mb-3 flex items-center">
                  <Icon name="Tag" size={18} className="mr-2" />
                  Промокод
                </h3>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Введите код..."
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 rounded-lg border border-cream-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-earth-300 transition-all duration-200"
                  />
                  <Button
                    onClick={applyPromo}
                    className="bg-earth-600 hover:bg-earth-700 text-white rounded-lg px-4 shadow-sm"
                    disabled={isPromoApplied}
                  >
                    {isPromoApplied ? (
                      <Icon name="Check" size={18} />
                    ) : (
                      <span className="text-sm">Применить</span>
                    )}
                  </Button>
                </div>
                {isPromoApplied && (
                  <div className="mt-2 text-green-600 text-sm flex items-center">
                    <Icon name="CheckCircle" size={16} className="mr-2" />
                    Промокод применен! Скидка 15%
                  </div>
                )}
              </div>

              {/* Итоги */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-200 mb-6">
                <h3 className="font-semibold text-gray-700 mb-4 text-lg">
                  Итоги заказа
                </h3>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Подытог:</span>
                    <span className="font-semibold text-gray-800">
                      {subtotal} ₽
                    </span>
                  </div>

                  {isPromoApplied && (
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 flex items-center">
                        <Icon name="Tag" size={16} className="mr-1" />
                        Скидка 15%:
                      </span>
                      <span className="font-semibold text-green-600">
                        -{discount} ₽
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-nature-600 flex items-center text-sm">
                      <Icon name="Heart" size={16} className="mr-1" />
                      Помощь капибарам (5%):
                    </span>
                    <span className="font-semibold text-nature-600 text-sm">
                      {donationAmount.toFixed(0)} ₽
                    </span>
                  </div>

                  <div className="border-t border-gray-200 pt-2 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-800">
                        К оплате:
                      </span>
                      <span className="text-xl font-bold text-forest-700">
                        {total} ₽
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Кнопки действий */}
              <div className="space-y-3">
                <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Icon name="CreditCard" size={20} className="mr-3" />
                  Оплатить заказ
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-2 border-nature-300 text-nature-600 hover:bg-nature-50 py-3 text-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-200 bg-white"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon name="ArrowLeft" size={20} className="mr-3" />
                  Продолжить покупки
                </Button>
              </div>

              {/* Информационная панель */}
              <div className="mt-6 bg-aqua-50 rounded-xl p-4 border border-aqua-200">
                <div className="text-center">
                  <div className="text-2xl mb-2">🐹</div>
                  <h4 className="font-semibold text-aqua-700 mb-2">
                    Спасибо за заботу!
                  </h4>
                  <p className="text-aqua-600 text-sm leading-relaxed">
                    За этот заказ {Math.floor(total / 100)} бонусов и помощь
                    капибарам на {donationAmount.toFixed(0)} ₽
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
