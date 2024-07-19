// Suggested code may be subject to a license. Learn more: ~LicenseLog:3506963186.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2025573084.

// context/ProductContext.js
'use client'

import { createContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const ProductProvider
  = ({ children }) => {
    const [products, setProducts] = useState([
      { 
        id: "1", name: "สนีกเกอร์", image: "https://images.unsplash.com/photo-1612942910539-9ff28b2e00d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 3000, discount: 0, 
        descriptionHead: "ความสบายสไตล์มินิมอล สไตล์สำหรับทุกวัน", 
        description: "สวมสไตล์เรียบง่ายด้วยรองเท้าผ้าใบสไตล์มินิมอลของเรา รังสรรค์มาเพื่อคนยุคใหม่ที่ต้องการความสบายโดยไม่ต้องแลกกับแฟชั่น, รองเท้าคู่นี้จึงเหมาะสำหรับทุกโอกาสสบายๆ ส่วนบนทำจากวัสดุสังเคราะห์โฉบเฉี่ยวให้สัมผัสที่ระบายอากาศได้ดีและมีน้ำหนักเบา, ในขณะที่พื้นรองเท้าชั้นในแบบลดแรงกระแทกให้ความสบายตลอดวัน ออกแบบมาให้มีความสวยงามสะอาดตาและเรียบง่าย, รองเท้าผ้าใบคู่นี้จึงเข้าคู่กับตู้เสื้อผ้าของคุณได้อย่างง่ายดาย สัมผัสประสบการณ์การผสมผสานที่ลงตัวระหว่างรูปแบบและฟังก์ชัน" },
      { id: "2", name: "นาฬิกาผู้ชาย", 
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 10_000, discount: 10, 
        description: ""
      },
      { id: "3", name: "Bluetooth Speaker", image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 2000, discount: 15   }
    ]);
    const [isLoading, setIsLoading] = useState(true);
    // Calculate discount price for each product
    const productsWithDiscount = products.map(product => ({
      ...product,
      discountPrice: product.price * (100 - product.discount) / 100
    }));
    console.log("productsWithDiscount", productsWithDiscount);
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
      <ProductContext.Provider value={{ products, productsWithDiscount, isLoading }}>
        {children}
      </ProductContext.Provider>
    );
  };

export default ProductContext;
