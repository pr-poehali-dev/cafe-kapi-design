import Icon from "@/components/ui/icon";

export default function MerchHeader() {
  return (
    <div className="text-center mb-20">
      <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-200 to-blue-200 rounded-2xl mb-8 shadow-lg relative">
        <span className="text-4xl">🧸</span>
      </div>

      <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 mb-6">
        Капи-Мерч
      </h2>

      <div className="w-32 h-1 bg-gradient-to-r from-green-300 via-blue-300 to-teal-300 mx-auto mb-8 rounded-full"></div>

      <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
        Уютная коллекция товаров с капибарами для создания спокойной атмосферы
        дома
      </p>

      {/* Статистика */}
      <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
        <div className="text-center">
          <div className="text-2xl font-semibold text-green-600 mb-2">20+</div>
          <div className="text-sm text-slate-500">Уютных товаров</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-blue-600 mb-2">100%</div>
          <div className="text-sm text-slate-500">Качественные материалы</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-teal-600 mb-2">∞</div>
          <div className="text-sm text-slate-500">Спокойствия</div>
        </div>
      </div>

      {/* Призыв к сбору идей */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-100 max-w-4xl mx-auto shadow-sm">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-green-200 to-blue-200 rounded-full flex items-center justify-center mr-4">
            <Icon name="Heart" size={24} className="text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-700">
            Создано с любовью
          </h3>
        </div>
        <p className="text-slate-600 leading-relaxed">
          Каждый товар создается с заботой о комфорте и качестве.
          <span className="text-green-600 font-medium">
            {" "}
            Идеальный подарок
          </span>{" "}
          для себя и близких.
        </p>
      </div>
    </div>
  );
}
