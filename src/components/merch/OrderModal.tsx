import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { OrderFormData } from "@/types/merch";

interface OrderModalProps {
  isOpen: boolean;
  formData: OrderFormData;
  onClose: () => void;
  onFormChange: (data: OrderFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function OrderModal({
  isOpen,
  formData,
  onClose,
  onFormChange,
  onSubmit,
}: OrderModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
              <Icon name="ShoppingCart" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Future Order</h3>
              <p className="text-gray-400">Оформите заказ в стиле 2024</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <Icon name="X" size={24} />
          </Button>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
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
                  onFormChange({ ...formData, name: e.target.value })
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
                  onFormChange({ ...formData, email: e.target.value })
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
                onFormChange({ ...formData, phone: e.target.value })
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
                onFormChange({ ...formData, items: e.target.value })
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
                onFormChange({ ...formData, message: e.target.value })
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
                <p className="font-medium mb-2 text-white">Процесс заказа:</p>
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
              onClick={onClose}
              className="px-8 py-4 border-2 border-slate-600 text-gray-400 hover:bg-slate-700/50 rounded-2xl"
            >
              Отмена
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
