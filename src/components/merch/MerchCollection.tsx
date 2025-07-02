import { MerchCollection as MerchCollectionType } from "@/types/merch";
import MerchItemCard from "./MerchItemCard";

interface MerchCollectionProps {
  collection: MerchCollectionType;
  collectionIndex: number;
  hoveredItem: string | null;
  onItemHover: (itemId: string) => void;
  onItemLeave: () => void;
  onItemSelect: (itemId: string) => void;
  onAddToCart: (itemName: string) => void;
}

export default function MerchCollection({
  collection,
  collectionIndex,
  hoveredItem,
  onItemHover,
  onItemLeave,
  onItemSelect,
  onAddToCart,
}: MerchCollectionProps) {
  return (
    <div className="relative">
      {/* Заголовок коллекции */}
      <div className="text-center mb-12">
        <div
          className="inline-block text-6xl mb-4 animate-bounce"
          style={{ animationDelay: `${collectionIndex * 200}ms` }}
        >
          {collection.bgPattern}
        </div>
        <h3
          className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${collection.gradient} mb-3`}
        >
          {collection.title}
        </h3>
        <p className="text-gray-400 text-lg">{collection.subtitle}</p>
      </div>

      {/* Сетка товаров */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collection.items.map((item, itemIndex) => {
          const itemId = `${collection.id}-${itemIndex}`;

          return (
            <MerchItemCard
              key={itemIndex}
              item={item}
              collection={collection}
              itemIndex={itemIndex}
              isHovered={hoveredItem === itemId}
              onHover={() => onItemHover(itemId)}
              onLeave={onItemLeave}
              onSelect={() => onItemSelect(itemId)}
              onAddToCart={onAddToCart}
            />
          );
        })}
      </div>
    </div>
  );
}
