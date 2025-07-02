import { merchCollections } from "@/data/merchCollections";
import { useMerchState } from "@/hooks/useMerchState";
import AnimatedBackground from "./merch/AnimatedBackground";
import MerchHeader from "./merch/MerchHeader";
import MerchCollection from "./merch/MerchCollection";
import MerchCTA from "./merch/MerchCTA";
import OrderModal from "./merch/OrderModal";

export default function Merch() {
  const {
    showOrderForm,
    setShowOrderForm,
    selectedItem,
    setSelectedItem,
    hoveredItem,
    setHoveredItem,
    formData,
    setFormData,
    handleSubmit,
    handleAddToCart,
  } = useMerchState();

  return (
    <section
      id="merch"
      className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <MerchHeader />

          {/* Коллекции */}
          <div className="space-y-16">
            {merchCollections.map((collection, collectionIndex) => (
              <MerchCollection
                key={collection.id}
                collection={collection}
                collectionIndex={collectionIndex}
                hoveredItem={hoveredItem}
                onItemHover={setHoveredItem}
                onItemLeave={() => setHoveredItem(null)}
                onItemSelect={setSelectedItem}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          <MerchCTA onOrderClick={() => setShowOrderForm(true)} />
        </div>
      </div>

      <OrderModal
        isOpen={showOrderForm}
        formData={formData}
        onClose={() => setShowOrderForm(false)}
        onFormChange={setFormData}
        onSubmit={handleSubmit}
      />
    </section>
  );
}
