// context/ProductContext.js
"use client";

import { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "สนีกเกอร์",
      image:
        "https://images.unsplash.com/photo-1612942910539-9ff28b2e00d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 3000,
      discount: 10,
      stock: 2,
      color: ["ดำ", "ขาว", "น้ำเงิน"],
      descriptionHead: "ความสบายสไตล์มินิมอล สไตล์สำหรับทุกวัน",
      description:
        "สวมสไตล์เรียบง่ายด้วยรองเท้าผ้าใบสไตล์มินิมอลของเรา รังสรรค์มาเพื่อคนยุคใหม่ที่ต้องการความสบายโดยไม่ต้องแลกกับแฟชั่น, รองเท้าคู่นี้จึงเหมาะสำหรับทุกโอกาสสบายๆ ส่วนบนทำจากวัสดุสังเคราะห์โฉบเฉี่ยวให้สัมผัสที่ระบายอากาศได้ดีและมีน้ำหนักเบา, ในขณะที่พื้นรองเท้าชั้นในแบบลดแรงกระแทกให้ความสบายตลอดวัน ออกแบบมาให้มีความสวยงามสะอาดตาและเรียบง่าย, รองเท้าผ้าใบคู่นี้จึงเข้าคู่กับตู้เสื้อผ้าของคุณได้อย่างง่ายดาย สัมผัสประสบการณ์การผสมผสานที่ลงตัวระหว่างรูปแบบและฟังก์ชัน",
    },
    {
      id: "2",
      name: "นาฬิกาผู้ชาย",
      descriptionHead: "นาฬิกาผู้ชายระดับไฮเอนด์",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 10_000,
      discount: 10,
      stock: 29,
      color: ["ดำ", "น้ำตาล"],
      description:
        "ดื่มด่ำกับความสง่างามเหนือกาลเวลาด้วยนาฬิกาอันประณีตของเรา, นาฬิกาเรือนนี้สร้างขึ้นด้วยความใส่ใจในรายละเอียดอย่างพิถีพิถัน ถือเป็นผลงานชิ้นเอกของศิลปะด้านศาสตร์แห่งเวลา, ตัวเรือนไทเทเนี่ยม ประกอบไปด้วยกลไกออโตเมติก ซึ่งเป็นข้อพิสูจน์ถึงความแม่นยำและอายุการใช้งานที่ยาวนาน, หน้าปัดแซฟไฟร์ แสดงออกถึงความแข็งแกร่ง, สายรัดหนัง มีทั้งความสบายและความหรูหรา นาฬิกาชิ้นนี้เป็นมากกว่าเครื่องประดับ เป็นการบ่งบอกถึงรสนิยมอันประณีต",
    },
    {
      id: "3",
      name: "ลำโพงบลูทูธ",
      descriptionHead: "ลำโพงบลูทูธคุณภาพสูง",
      price: 2000,
      discount: 15,
      stock: 10,
      color: ["ม่วง", "แดง", "เขียว"],
      image:
        "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "ดื่มด่ำไปกับเสียงที่เต็มอิ่มจากขุมพลังขนาดพกพา, BeatBuddy มอบคุณภาพเสียงที่ยอดเยี่ยม เหมาะสำหรับการผจญภัยระหว่างเดินทาง",
    },
    {
      id: "4",
      name: "กระเป๋าสะพาย",
      descriptionHead: "คว้าการผจญภัยของคุณ!",
      price: 10000,
      discount: 5,
      stock: 5,
      color: ["เทา", "น้ำตาล", "เขียว"],
      image:
        "https://plus.unsplash.com/premium_photo-1664298317818-1f7c13bf6488?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "ช้อปตอนนี้และรับส่วนลด 15% สำหรับการซื้อกระเป๋าเป้ครั้งต่อไปของคุณ",
    },
    {
      id: "5",
      name: "โทรศัพท์มือถือ",
      descriptionHead: "T900-Tello",
      price: 13000,
      discount: 3,
      stock: 10,
      color: ["ดำ", "ขาว", "ฟ้า"],
      image:
        "https://images.unsplash.com/photo-1598327106026-d9521da673d1?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "สัมผัสประสบการณ์แห่งอนาคตของเทคโนโลยีมือถือด้วย T900-Tello, อุปกรณ์ที่เพรียวบางและทรงพลังนี้มีหน้าจอ 6นิ้ว หน้าจอ Dynamic AMOLED ที่สวยงาม ให้สีสันสดใสและภาพคมชัด",
    },
    {
      id: "6",
      name: "NovaZen NZ500",
      descriptionHead: "แล็ปท็อปประสิทธิภาพสูงสำหรับผู้ใช้ระดับสูงและมืออาชีพ",
      price: 33000,
      discount: 5,
      stock: 17,
      color: ["ดำ", "ขาว", "ฟ้า"],
      image:
        "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=1507&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Processor: Zintel Core z7 12th Gen, RAM: 16GB, Storage: 512GB SSD,Display: 15.6-inch Full HD, Operating System: Doors 11, Graphics: กราฟิก Zintel® ในตัว, Other features: webcam / microphone",
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  // Calculate discount price for each product
  const productsWithDiscount = products.map((product) => ({
    ...product,
    discountPrice: (product.price * (100 - product.discount)) / 100,
  }));
  console.log(
    "productsWithDiscount from ProductContext.js : ",
    productsWithDiscount
  ); // array of object, have discountPrice
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products"); // Or your API endpoint
        const fetchedProducts = await response.json();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, productsWithDiscount, isLoading, count, setCount }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
