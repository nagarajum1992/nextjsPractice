import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <h1>Welcome to the Products Page</h1>
      <p>This is the main content of the products page.</p>
      <div>
        <Link href="/products/1">Product 1</Link>
      </div>
      <div>
        <Link href="/products/2">Product 2</Link>
      </div>
      <div>
        <Link href="/products/3" replace>
          Product 3
        </Link>
      </div>
    </div>
  );
}
