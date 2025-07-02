import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { MerchItem, MerchCollection } from "@/types/merch";

interface MerchItemCardProps {
  item: MerchItem;
  collection: MerchCollection;
  itemIndex: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onSelect: () => void;
  onAddToCart: (itemName: string) => void;
}

export default function MerchItemCard({
  item,
  collection,
  itemIndex,
  isHovered,
  onHover,
  onLeave,
  onSelect,
  onAddToCart,
}: MerchItemCardProps) {
  const getColorStyle = (color: string) => {
    const colorMap: Record<string, string> = {
      Digital: "linear-gradient(45deg, #8B5CF6, #EC4899)",
      "4K": "linear-gradient(45deg, #06B6D4, #3B82F6)",
      Audio: "linear-gradient(45deg, #F59E0B, #EF4444)",
    };

    return colorMap[color] || `var(--${color.toLowerCase()}, #6B7280)`;
  };

  return (
    <Card
      className={`group relative bg-white/90 backdrop-blur-sm border border-slate-200 hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer overflow-hidden ${
        isHovered ? "shadow-xl shadow-green-100" : ""
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onSelect}
    >
      {/* Мягкий фон карточки */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <CardContent className="p-6 relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl transform group-hover:scale-110 transition-all duration-300">
            {item.emoji}
          </div>
          <div className="text-right">
            <div className="text-xl font-semibold text-slate-700 mb-1">
              {item.price}
            </div>
            <Badge className="bg-green-100 text-green-700 border-0 text-xs px-2 py-1">
              #{item.vibe}
            </Badge>
          </div>
        </div>

        <h4 className="text-lg font-semibold text-slate-700 mb-2 group-hover:text-green-700 transition-colors duration-300">
          {item.name}
        </h4>

        <p className="text-slate-500 text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Цветовая палитра */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {item.colors.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className="w-5 h-5 rounded-full border-2 border-slate-200 shadow-sm"
                style={{ background: getColorStyle(color) }}
                title={color}
              ></div>
            ))}
          </div>

          <Button
            size="sm"
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white hover:shadow-md transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(item.name);
            }}
          >
            <Icon name="ShoppingCart" size={14} className="mr-1" />
            Купить
          </Button>
        </div>

        {/* Индикатор популярности */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>💚 Популярно</span>
            <span>⭐ 4.9/5</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
