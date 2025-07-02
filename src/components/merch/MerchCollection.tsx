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
        <div className="inline-block text-5xl mb-4">{collection.bgPattern}</div>
        <h3 className="text-3xl font-semibold text-slate-700 mb-3">
          {collection.title}
        </h3>
        <p className="text-slate-500 text-lg">{collection.subtitle}</p>
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
