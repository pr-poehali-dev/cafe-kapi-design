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
            <div className="w-20 h-1 bg-gradient-to-r from-forest-500 via-nature-500 to-aqua-500 mx-auto mb-6"></div>
            <p className="text-lg text-forest-600">
              Присоединяйтесь к нашим уютным мероприятиям и знакомьтесь с
              единомышленниками
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card
                key={event.id}
                className={`${event.bgColor} ${event.borderColor} border-2 hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="outline"
                      className="bg-white/70 text-forest-700 border-forest-300"
                    >
                      <Icon name="Calendar" size={14} className="mr-1" />
                      {event.date}
                    </Badge>
                    <div className="text-3xl">{event.icon}</div>
                  </div>
                  <CardTitle className="text-xl text-forest-800">
                    {event.title}
                  </CardTitle>
                  <div className="flex items-center text-forest-600">
                    <Icon name="Clock" size={16} className="mr-2" />
                    <span className="font-medium">{event.time}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-forest-600 leading-relaxed mb-3">
                    {event.description}
                  </CardDescription>
                  {event.dresscode && (
                    <div className="bg-white/50 rounded-lg p-3 mt-3">
                      <div className="flex items-center text-sm text-forest-700">
                        <Icon name="Shirt" size={16} className="mr-2" />
                        <span className="font-medium">{event.dresscode}</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-br from-forest-100 to-nature-100 rounded-2xl p-8 max-w-3xl mx-auto border border-forest-200">
              <div className="text-3xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-forest-700 mb-3">
                Хотите предложить своё мероприятие?
              </h3>
              <p className="text-forest-600 mb-4 leading-relaxed">
                У вас есть идея для интересного события в нашем кафе? Мы всегда
                открыты для новых предложений от нашего сообщества!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
