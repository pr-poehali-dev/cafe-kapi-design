import { useState } from "react";
import { OrderFormData } from "@/types/merch";

export function useMerchState() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    email: "",
    phone: "",
    items: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заказ отправлен:", formData);
    alert("Спасибо за заказ! Мы свяжемся с вами в ближайшее время 🐹");
    setShowOrderForm(false);
    setFormData({ name: "", email: "", phone: "", items: "", message: "" });
  };

  const handleAddToCart = (itemName: string) => {
    setFormData({ ...formData, items: itemName });
    setShowOrderForm(true);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", items: "", message: "" });
  };

  return {
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
    resetForm,
  };
}
