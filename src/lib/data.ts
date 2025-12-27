export interface Product {
  id: number;
  name: string;
  specs: string;
  price: number;
  regularPrice: number;
  rating: number;
  reviews: number;
  status: string;
  image: string;
  discount: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 4,
    name: "iPhone 16 Pro Max",
    specs: "Titanium Natural • 256GB",
    price: 28999000,
    regularPrice: 30999000,
    rating: 5.0,
    reviews: 12,
    status: "Pre-Order",
    image: "Iphone 16 Pro Max.jpeg",
    discount: "Hot",
  },
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    specs: "Titanium Blue • 256GB",
    price: 24599000,
    regularPrice: 26599000,
    rating: 4.9,
    reviews: 242,
    status: "Garansi Resmi",
    image: "iphone_15_pro_blue_1766393800826.png",
    discount: "New",
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    specs: "Deep Purple • 128GB",
    price: 15499000,
    regularPrice: 17499000,
    rating: 4.8,
    reviews: 185,
    status: "Like New",
    image: "iphone_14_pro_deep_purple_1766393817432.png",
    discount: "Best Deal",
  },
  {
    id: 3,
    name: "iPhone 13 Pro",
    specs: "Sierra Blue • 256GB",
    price: 11999000,
    regularPrice: 13999000,
    rating: 4.7,
    reviews: 312,
    status: "Garansi Internasional",
    image: "iphone_13_pro_sierra_blue_1766393833727.png",
    discount: "Promo",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Wijaya",
    role: "Content Creator",
    text: "Pelayanan sangat ramah dan barang sampai dengan aman. Unit yang saya beli kelihatannya seperti baru padahal bekas. Terpercaya banget!",
    avatar: "https://placehold.co/100x100?text=S",
    rating: 5,
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "Mahasiswa",
    text: "Dapat harga termurah se-Jakarta untuk iPhone 13 Pro. Kondisi baterai masih 100% dan fisik mulus. Mantap iBugStore!",
    avatar: "https://placehold.co/100x100?text=B",
    rating: 5,
  },
  {
    id: 3,
    name: "Andi Pratama",
    role: "Professional",
    text: "Proses COD cepat dan admin responsif. Barangnya original dan garansi panjang. Sangat direkomendasikan.",
    avatar: "https://placehold.co/100x100?text=A",
    rating: 5,
  },
];
