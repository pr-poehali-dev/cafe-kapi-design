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
      className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border-2 border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer overflow-hidden ${
        isHovered ? "shadow-2xl shadow-purple-500/20" : ""
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onSelect}
    >
      {/* Анимированный фон карточки */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      ></div>

      {/* Голографический эффект */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

      <CardContent className="p-8 relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
            {item.emoji}
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white mb-1">
              {item.price}
            </div>
            <Badge
              className={`bg-gradient-to-r ${collection.gradient} text-white border-0 text-xs px-3 py-1`}
            >
              #{item.vibe}
            </Badge>
          </div>
        </div>

        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
          {item.name}
        </h4>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Цветовая палитра */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {item.colors.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className="w-6 h-6 rounded-full border-2 border-white/30 flex items-center justify-center text-xs text-white font-bold"
                style={{ background: getColorStyle(color) }}
                title={color}
              >
                {color.length <= 2 ? color : color[0]}
              </div>
            ))}
          </div>

          <Button
            size="sm"
            className={`bg-gradient-to-r ${collection.gradient} hover:shadow-lg transition-all duration-300`}
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(item.name);
            }}
          >
            <Icon name="Plus" size={16} className="mr-1" />
            Add
          </Button>
        </div>

        {/* Индикатор популярности */}
        <div className="mt-4 pt-4 border-t border-slate-700/50">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>🔥 Trending</span>
            <span>⭐ 4.9/5</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
