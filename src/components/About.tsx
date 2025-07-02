export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-white to-nature-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-800 mb-4">
              О нашем кафе
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-forest-500 to-nature-500 mx-auto mb-6"></div>
            <p className="text-lg text-forest-600">
              История о том, как родилась идея объединить кофе, капибар и заботу
              о природе
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-forest-50 to-forest-100 rounded-2xl p-8 border border-forest-200">
                <div className="text-4xl mb-4">🐹</div>
                <h3 className="text-xl font-semibold text-forest-700 mb-3">
                  Наша миссия
                </h3>
                <p className="text-forest-600 leading-relaxed">
                  «Кофе с Капи» — это больше чем кафе. Мы создали пространство,
                  где каждый глоток высококачественного кофе помогает защитить
                  удивительных капибар и их естественную среду обитания.
                </p>
              </div>

              <div className="bg-gradient-to-br from-nature-50 to-aqua-50 rounded-2xl p-8 border border-nature-200">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold text-nature-700 mb-3">
                  Прозрачность
                </h3>
                <p className="text-nature-600 leading-relaxed">
                  У нас есть специальная книга отчетности, где записываются все
                  переводы в фонды. Каждый посетитель может увидеть, как именно
                  его покупка помогает природе.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-aqua-50 to-nature-100 rounded-2xl p-8 border border-aqua-200">
                <div className="text-4xl mb-4">☕</div>
                <h3 className="text-xl font-semibold text-aqua-700 mb-3">
                  Атмосфера
                </h3>
                <p className="text-aqua-600 leading-relaxed">
                  Отдохните в перерыве рабочего дня, проведите вечер за
                  просмотром фильмов или игрой в настольные игры. Познакомьтесь
                  с людьми, которые разделяют вашу любовь к путешествиям и
                  животным.
                </p>
              </div>

              <div className="bg-gradient-to-br from-forest-100 via-nature-100 to-aqua-100 rounded-2xl p-8 border border-forest-300">
                <div className="text-4xl mb-4">💚</div>
                <h3 className="text-xl font-semibold text-forest-700 mb-3">
                  5% на благотворительность
                </h3>
                <p className="text-forest-600 leading-relaxed">
                  С каждой покупки мы отправляем 5% в фонды, которые высаживают
                  деревья, создают водоемы и помогают капибарам жить и
                  размножаться в дикой природе.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
