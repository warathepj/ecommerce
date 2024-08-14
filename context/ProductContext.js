// Suggested code may be subject to a license. Learn more: ~LicenseLog:3506963186.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2025573084.

// context/ProductContext.js
'use client'

import { createContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const ProductProvider
  = ({ children }) => {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([
      { 
        id: "1", name: "สนีกเกอร์", 
        image: "https://images.unsplash.com/photo-1612942910539-9ff28b2e00d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        price: 3000, discount: 10, 
        color: ["ดำ", "ขาว", "น้ำเงิน"], 
        descriptionHead: "ความสบายสไตล์มินิมอล สไตล์สำหรับทุกวัน", 
        description: "สวมสไตล์เรียบง่ายด้วยรองเท้าผ้าใบสไตล์มินิมอลของเรา รังสรรค์มาเพื่อคนยุคใหม่ที่ต้องการความสบายโดยไม่ต้องแลกกับแฟชั่น, รองเท้าคู่นี้จึงเหมาะสำหรับทุกโอกาสสบายๆ ส่วนบนทำจากวัสดุสังเคราะห์โฉบเฉี่ยวให้สัมผัสที่ระบายอากาศได้ดีและมีน้ำหนักเบา, ในขณะที่พื้นรองเท้าชั้นในแบบลดแรงกระแทกให้ความสบายตลอดวัน ออกแบบมาให้มีความสวยงามสะอาดตาและเรียบง่าย, รองเท้าผ้าใบคู่นี้จึงเข้าคู่กับตู้เสื้อผ้าของคุณได้อย่างง่ายดาย สัมผัสประสบการณ์การผสมผสานที่ลงตัวระหว่างรูปแบบและฟังก์ชัน" },
      { 
        id: "2", name: "นาฬิกาผู้ชาย", 
        descriptionHead: "นาฬิกาผู้ชายระดับไฮเอนด์",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        price: 10_000, discount: 10,
        color: ["ดำ", "น้ำตาล"], 
        description: "ดื่มด่ำกับความสง่างามเหนือกาลเวลาด้วยนาฬิกาอันประณีตของเรา นาฬิกาเรือนนี้สร้างขึ้นด้วยความใส่ใจในรายละเอียดอย่างพิถีพิถัน ถือเป็นผลงานชิ้นเอกของศิลปะด้านศาสตร์แห่งศาสตร์เวลา ตัวเรือน [วัสดุ] ประกอบไปด้วยกลไก [ประเภทการเคลื่อนไหว] ซึ่งเป็นข้อพิสูจน์ถึงความแม่นยำและอายุการใช้งานที่ยาวนาน หน้าปัด [สีของหน้าปัด] ที่ประดับด้วย [รายละเอียดหน้าปัด] แสดงออกถึงความซับซ้อน สายรัด [วัสดุสายรัด] มีทั้งความสบายและความหรูหรา นาฬิกาชิ้นนี้เป็นมากกว่าเครื่องประดับ เป็นการบ่งบอกถึงรสนิยมอันประณีต"
      },
      { id: "3", name: "ลำโพงบลูทูธ", 
        descriptionHead: "ลำโพงบลูทูธคุณภาพสูง",
        price: 2000, discount: 15,
        color: ["ม่วง", "แดง", "เขียว"], 
        image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        description: "ดื่มด่ำไปกับเสียงที่เต็มอิ่มจากขุมพลังขนาดพกพา [ชื่อลำโพง] มอบคุณภาพเสียงที่ยอดเยี่ยม เหมาะสำหรับการผจญภัยระหว่างเดินทาง",
      }
    ]);
    const [isLoading, setIsLoading] = useState(true);
    // Calculate discount price for each product
    const productsWithDiscount = products.map(product => ({
      ...product,
      discountPrice: product.price * (100 - product.discount) / 100
    }));
    console.log("productsWithDiscount from ProductContext.js : ", productsWithDiscount); // array of object, have discountPrice
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('/api/products'); // Or your API endpoint
          const fetchedProducts = await response.json();
          setProducts(fetchedProducts);
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchProducts();
    }, []);

    return (
      <ProductContext.Provider value={{ products, productsWithDiscount, isLoading, count, setCount }}>
        {children}
      </ProductContext.Provider>
    );
  };

export default ProductContext;
