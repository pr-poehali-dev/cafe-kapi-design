import Icon from "@/components/ui/icon";

const Interesting = () => {
  return (
    <section
      id="interesting"
      className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-forest-800 mb-4">
            Интересное о капибарах
          </h2>
          <p className="text-forest-600 max-w-2xl mx-auto">
            Удивительные факты о самых спокойных грызунах в мире
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 rounded-full p-3 mr-4">
                <Icon name="Users" size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-forest-800">
                Социальные животные
              </h3>
            </div>
            <p className="text-forest-600 leading-relaxed">
              Капибары — очень социальные животные. Они живут группами по 10—30
              особей и имеют структуру в стае, миролюбиво взаимодействуя друг с
              другом. Грызуны особым образом показывают внимание: обнимаются и
              даже спят друг на друге.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100">
            <div className="flex items-center mb-4">
              <div className="bg-cyan-100 rounded-full p-3 mr-4">
                <Icon name="Waves" size={24} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-forest-800">
                Любители воды
              </h3>
            </div>
            <p className="text-forest-600 leading-relaxed">
              Капибары славятся своей любовью к водоёмам, именно поэтому их
              часто называют водяными свинками. У них даже на лапах есть
              специальные перепонки для плавания. В Японии в Izu Shaboten Park
              есть специальный водоём для купания капибар в стиле японских
              купален «Онсэн» с лимонами и мандаринами.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-100 rounded-full p-3 mr-4">
                <Icon
                  name="MessageCircle"
                  size={24}
                  className="text-emerald-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-forest-800">
                Свой язык общения
              </h3>
            </div>
            <p className="text-forest-600 leading-relaxed">
              Грызуны общаются между собой при помощи своего собственного языка,
              используя различные звуки: свист, лай, кудахтанье и щелчки. Эти
              звуки позволяют им передавать информацию о своем положении, об
              опасности или о других важных событиях.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interesting;
