"use client";
import { useRouter } from "next/navigation";

export default function OrderProductPage() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Order Product button clicked");
    router.push("/");
  };

  return (
    <main>
      <h1>Order Product Page</h1>
      <p>This is the main content of the order product page.</p>
      <button onClick={handleClick}>Order Product</button>
    </main>
  );
}
