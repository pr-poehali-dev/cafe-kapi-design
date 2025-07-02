import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Menu from "@/components/Menu";
import Merch from "@/components/Merch";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <Hero />
      <About />
      <Events />
      <Menu />
      <Merch />

      <section
        id="charity"
        className="py-16 bg-gradient-to-br from-aqua-50 to-nature-100"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-aqua-700 mb-4">
            Помощь капибарам
          </h2>
          <p className="text-aqua-600">
            Узнайте, как мы помогаем защищать капибар и их среду обитания
          </p>
        </div>
      </section>

      <section
        id="gallery"
        className="py-16 bg-gradient-to-br from-forest-50 to-cream-100"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-forest-700 mb-4">Галерея</h2>
          <p className="text-forest-600">
            Фотографии нашего уютного кафе и милых капибар
          </p>
        </div>
      </section>

      <section
        id="contacts"
        className="py-16 bg-gradient-to-br from-nature-100 to-aqua-50"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-nature-700 mb-4">Контакты</h2>
          <p className="text-nature-600">Адрес, телефон и часы работы</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
