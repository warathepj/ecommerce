// app/products/[productId].js/
"use client";
import { useState } from "react";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ProductContext from "../../../context/ProductContext";
import AddShoppingCart from "@/app/components/(icon)/AddShoppingCart";
import Modal from "@/app/components/Modal";
import ShoppingCart from "../../components/(icon)/ShoppingCart";
import ArrowLeft from "../../components/(icon)/ArrowLeft";
import Button from "@/app/components/Button";
import Loading from "@/app/components/Loading";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function ProductDetail({ params }) {
  const router = useRouter();
  const productId = params.id;
  const { productsWithDiscount, isLoading } = useContext(ProductContext);
  const searchParams = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const [modalButtonText, setModalButtonText] = useState("");
  const { name } = useContext(ProductContext);
  const handleBuyButtonClick = () => {
    setModalButtonText("ซื้อสินค้า"); // Set button text for "Buy"
    setShowModal(true);
  };

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // ... fetch product data and then:
  if (isLoading) {
    return <Loading />;
  }
  // console.log(
  //   "productsWithDiscount form products/[id] : ",
  //   productsWithDiscount
  // );
  const product = productsWithDiscount?.find((prod) => prod.id === productId);
  const handleGoBack = () => {
    router.push("/"); // Navigate to the root route
  };
  return (
    <div className="bg-green-200 p-6">
      <ArrowLeft style={{ cursor: "pointer" }} onClick={handleGoBack} />

      <h1 className="text-2xl mb-4 text-green-700">รายละเอียดสินค้า</h1>
      <img className="lg:h-[28rem]" src={product?.image} alt="Product Image" />

      <div className="flex flex-row justify-between my-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-between">
            {product.discount > 0 && (
              <>
                <p className="pr-2 text-red-500">฿{product.discountPrice}</p>
                <p className="pr-2 line-through text-green-700">
                  {product.price}
                </p>
                <p className="text-red-500">-{product.discount}%</p>
              </>
            )}
            {product.discount == 0 && (
              <>
                <p className="pr-2 text-red-500">฿{product.discountPrice}</p>
              </>
            )}
          </div>
        </div>
        <p className="text-green-700">
          ขายแล้ว{" "}
          {Math.floor(Math.random() * 10000) + 1 > 999
            ? (
                Math.round(
                  ((Math.floor(Math.random() * 10000) + 1) / 1000) * 10
                ) / 10
              ).toFixed(1) + " พัน"
            : Math.floor(Math.random() * 10000) + 1}
        </p>
      </div>

      {product ? (
        <p className="text-green-700 mb-1 lg:text-2xl">{product.name}</p>
      ) : (
        <p className="text-red-500">Product not found.</p>
      )}
      <p className="text-green-700 mb-1 lg:text-xl">
        {product.descriptionHead}
      </p>

      <div className="mb-3">
        {product.description.split(",").map((item, index) => (
          <p key={index} className="indent-description text-green-700">
            {item}
          </p>
        ))}
      </div>

      <div className="ml-4">
        <AddShoppingCart
          onClick={() => {
            setModalButtonText("เพิ่มไปยังรถเข็น"); // Set button text for "Add to Cart"
            setShowModal(true);
          }}
        />
      </div>

      {showModal && (
        <Modal
          productId={productId}
          buttonText={modalButtonText} // Use dynamic button text
          onClose={handleCloseModal}
          onOrderChange={handleOrderChange}
        />
      )}
    </div>
  );
}
