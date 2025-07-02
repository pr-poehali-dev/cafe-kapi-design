import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="py-16 bg-gradient-to-br from-nature-100 to-aqua-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-nature-700 mb-4">Контакты</h2>
          <p className="text-nature-600">
            Приходите к нам в гости или свяжитесь удобным способом
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Контактная информация */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-nature-100">
              <h3 className="text-2xl font-semibold text-nature-800 mb-6">
                Как нас найти
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-nature-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-nature-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-nature-800 mb-1">Адрес</h4>
                    <p className="text-nature-600">
                      г. Москва, Никольская улица 8
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-nature-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-nature-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-nature-800 mb-1">
                      Режим работы
                    </h4>
                    <p className="text-nature-600">
                      Ежедневно с 10:00 до 22:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-nature-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-nature-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-nature-800 mb-1">
                      Телефон
                    </h4>
                    <p className="text-nature-600">+7 (999) 553-54-94</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-nature-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-nature-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-nature-800 mb-1">Почта</h4>
                    <p className="text-nature-600">team@CapiCoffee.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Социальные сети */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-nature-100">
              <h3 className="text-2xl font-semibold text-nature-800 mb-6">
                Мы в соцсетях
              </h3>

              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 group"
                >
                  <div className="bg-blue-500 rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M15.07 13.76c-.16-.4-.56-.76-1.18-.76-.62 0-1.02.36-1.18.76L12 16.5l-.71-2.74c-.16-.4-.56-.76-1.18-.76-.62 0-1.02.36-1.18.76L8 16.5V7.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v9l-.93-2.74z" />
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm7 10c0 .34-.03.67-.08 1H13v2h5.92c-.45 2.1-1.47 3.98-2.92 5.45-1.45 1.47-3.35 2.47-5.45 2.92V18h-2v4.92c-2.1-.45-3.98-1.47-5.45-2.92C2.65 18.55 1.65 16.65 1.2 14.55H7v-2H1.08c.05-.33.08-.66.08-1s-.03-.67-.08-1H7V8H1.2c.45-2.1 1.47-3.98 2.92-5.45C5.57 1.1 7.47.1 9.57-.35V5h2V-.35c2.1.45 3.98 1.47 5.45 2.92 1.45 1.47 2.47 3.35 2.92 5.45H13v2h5.92c.05.33.08.66.08 1z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800">ВКонтакте</h4>
                    <p className="text-blue-600 text-sm">
                      Следите за новостями и акциями
                    </p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center p-4 rounded-xl bg-gradient-to-r from-sky-50 to-sky-100 hover:from-sky-100 hover:to-sky-200 transition-all duration-300 group"
                >
                  <div className="bg-sky-500 rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-sky-800">Telegram</h4>
                    <p className="text-sky-600 text-sm">
                      Быстрая связь и уведомления
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:team@CapiCoffee.com"
                  className="flex items-center p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200 transition-all duration-300 group"
                >
                  <div className="bg-emerald-500 rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-emerald-800">
                      Электронная почта
                    </h4>
                    <p className="text-emerald-600 text-sm">
                      team@CapiCoffee.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
