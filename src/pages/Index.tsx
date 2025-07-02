import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <Hero />
      <About />

      {/* Placeholder sections */}
      <section id="menu" className="py-16 bg-forest-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-forest-800 mb-4">Наше меню</h2>
          <p className="text-forest-600">
            Скоро здесь появится полное меню наших напитков и закусок
          </p>
        </div>
      </section>

      <section id="games" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-earth-700 mb-4">
            Игры и фильмы
          </h2>
          <p className="text-earth-600">
            Информация о наших развлечениях и мероприятиях
          </p>
        </div>
      </section>

      <section id="charity" className="py-16 bg-cream-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-forest-800 mb-4">
            Помощь капибарам
          </h2>
          <p className="text-forest-600">
            Узнайте, как мы помогаем защищать капибар и их среду обитания
          </p>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-forest-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-earth-700 mb-4">Галерея</h2>
          <p className="text-earth-600">
            Фотографии нашего уютного кафе и милых капибар
          </p>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-forest-800 mb-4">Контакты</h2>
          <p className="text-forest-600">Адрес, телефон и часы работы</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
