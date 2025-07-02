import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface MerchCTAProps {
  onOrderClick: () => void;
}

export default function MerchCTA({ onOrderClick }: MerchCTAProps) {
  const handleIdeaSubmit = () => {
    window.open("mailto:team@CapiCoffee.com?subject=Идея для мерча", "_blank");
  };

  const handlePhoneCall = () => {
    window.open("tel:89995535494", "_blank");
  };

  return (
    <div className="mt-16 text-center">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 border border-green-100 shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-3xl font-semibold text-slate-700 mb-6">
            Готовы создать{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              уютную атмосферу
            </span>
            ?
          </h3>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={onOrderClick}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-10 py-3 text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Заказать сейчас
            </Button>

            <Button
              onClick={handleIdeaSubmit}
              variant="outline"
              className="border-2 border-green-300 text-green-600 hover:bg-green-50 px-10 py-3 text-base rounded-xl transition-all duration-300"
            >
              <Icon name="Heart" size={20} className="mr-2" />
              Предложить идею
            </Button>

            <Button
              onClick={handlePhoneCall}
              variant="outline"
              className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 px-10 py-3 text-base rounded-xl transition-all duration-300"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-500">
            <div className="flex items-center justify-center">
              <Icon name="Truck" size={16} className="mr-2 text-green-500" />
              Доставка по всей России
            </div>
            <div className="flex items-center justify-center">
              <Icon name="Shield" size={16} className="mr-2 text-blue-500" />
              Гарантия качества
            </div>
            <div className="flex items-center justify-center">
              <Icon name="Heart" size={16} className="mr-2 text-teal-500" />
              5% на помощь капибарам
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
