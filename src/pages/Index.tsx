import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Menu from "@/components/Menu";
import Merch from "@/components/Merch";
import Interesting from "@/components/Interesting";
import Contacts from "@/components/Contacts";
import Cart from "@/components/Cart";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <Cart />
      <Hero />
      <About />
      <Events />
      <Menu />
      <Merch />
      <Interesting />

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

      <Contacts />
    </div>
  );
};

export default Index;
