import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const events = [
  {
    id: 1,
    date: "4 апреля",
    time: "18:00",
    title: "Вечер с живой музыкой",
    description:
      "Приглашаем всех на наш уютный вечерний концерт акустической музыки.",
    icon: "🎵",
    bgColor: "bg-gradient-to-br from-forest-50 to-forest-100",
    borderColor: "border-forest-300",
  },
  {
    id: 2,
    date: "Каждую среду",
    time: "18:00",
    title: "Настольные игры",
    description:
      "Приходите поиграть в настолки и познакомиться с новыми людьми в нашем сообществе любителей капибар.",
    icon: "🎲",
    bgColor: "bg-gradient-to-br from-nature-50 to-nature-100",
    borderColor: "border-nature-300",
  },
  {
    id: 3,
    date: "8 апреля",
    time: "14:00-18:00",
    title: "Дегустационный вечер",
    description:
      "Будем пробовать кофе, приготовленный из разных сортов кофе и учиться разбираться в них. Наши прекрасные бариста помогут вам погрузиться в мир кофе и узнать побольше про этот прекрасный напиток. На дегустации также будет декаф!",
    icon: "☕",
    bgColor: "bg-gradient-to-br from-aqua-50 to-aqua-100",
    borderColor: "border-aqua-300",
  },
  {
    id: 4,
    date: "18 апреля",
    time: "18:00",
    title: "Киновечер",
    description:
      "Будем смотреть документальный фильм про капибар. В конце вечера выберем голосованием фильм на следующий киновечер.",
    dresscode: "Дресс-код: пижамный стиль",
    icon: "🎬",
    bgColor: "bg-gradient-to-br from-cream-100 to-cream-200",
    borderColor: "border-cream-400",
  },
  {
    id: 5,
    date: "22 апреля",
    time: "15:00",
    title: "Мастер-класс: Рисуем капибар",
    description:
      "Рисуем капибар, купающихся в горячих источниках. Все материалы будут на мастер-классе, каждый унесет с собой небольшую картину, нарисованную своими руками.",
    icon: "🎨",
    bgColor: "bg-gradient-to-br from-forest-100 via-nature-100 to-aqua-100",
    borderColor: "border-forest-400",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="py-16 bg-gradient-to-br from-nature-50 to-aqua-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-800 mb-4">
              Расписание мероприятий
            </h2>
            <div className="w-20 h-1 bg-nature-500 mx-auto mb-6"></div>
            <p className="text-lg text-forest-600 max-w-2xl mx-auto">
              Присоединяйтесь к нашим уютным мероприятиям! Каждое событие — это
              новая возможность познакомиться с единомышленниками и поддержать
              капибар 🐾
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card
                key={event.id}
                className={`bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-${event.color}-200 hover:border-${event.color}-300`}
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-3">{event.icon}</div>
                  <CardTitle className={`text-xl text-${event.color}-700 mb-2`}>
                    {event.title}
                  </CardTitle>
                  <CardDescription
                    className={`text-${event.color}-600 font-medium`}
                  >
                    {event.date} {event.time && `• ${event.time}`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p
                    className={`text-${event.color}-600 leading-relaxed text-sm mb-4`}
                  >
                    {event.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`w-full border-${event.color}-300 text-${event.color}-600 hover:bg-${event.color}-50`}
                  >
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-forest-100 rounded-2xl p-8 max-w-3xl mx-auto">
              <div className="text-3xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-forest-700 mb-3">
                Хотите предложить своё мероприятие?
              </h3>
              <p className="text-forest-600 mb-4 leading-relaxed">
                У вас есть идея для интересного события в нашем кафе? Мы всегда
                открыты для новых предложений от нашего сообщества!
              </p>
              <Button className="bg-forest-600 hover:bg-forest-700 text-white">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
