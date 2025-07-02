import Icon from "@/components/ui/icon";

export default function MerchHeader() {
  return (
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
        Лимитированная коллекция мерча нового поколения. Где физические вещи
        встречаются с цифровым искусством 🎭
      </p>

      {/* Статистика */}
      <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">47+</div>
          <div className="text-sm text-gray-400">Уникальных дизайнов</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
          <div className="text-sm text-gray-400">Вайбов спокойствия</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
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
  );
}
