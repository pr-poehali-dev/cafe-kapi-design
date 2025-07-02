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
              onClick={onOrderClick}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="Zap" size={24} className="mr-3" />
              Заказать сейчас
            </Button>

            <Button
              onClick={handleIdeaSubmit}
              variant="outline"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 px-12 py-4 text-lg rounded-2xl transition-all duration-300"
            >
              <Icon name="Lightbulb" size={24} className="mr-3" />
              Предложить идею
            </Button>

            <Button
              onClick={handlePhoneCall}
              variant="outline"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-12 py-4 text-lg rounded-2xl transition-all duration-300"
            >
              <Icon name="Phone" size={24} className="mr-3" />
              Связаться
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
            <div className="flex items-center justify-center">
              <Icon name="Truck" size={16} className="mr-2 text-green-400" />
              Доставка по всей России
            </div>
            <div className="flex items-center justify-center">
              <Icon name="Shield" size={16} className="mr-2 text-blue-400" />
              Гарантия качества
            </div>
            <div className="flex items-center justify-center">
              <Icon name="Heart" size={16} className="mr-2 text-red-400" />
              5% на помощь капибарам
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
