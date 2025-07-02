export interface MerchItem {
  name: string;
  price: string;
  emoji: string;
  vibe: string;
  colors: string[];
  description: string;
}

export interface MerchCollection {
  id: string;
  title: string;
  subtitle: string;
  gradient: string;
  bgPattern: string;
  items: MerchItem[];
}

export interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  items: string;
  message: string;
}
