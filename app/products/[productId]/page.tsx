export default async function ProductPage({ params }: { params: Promise<{ productId: string }> }) {
    const productId = (await params).productId;
  return (
    <main>
      <h1>Product</h1>
      <p>This is the about page of our product {productId}.</p>
    </main>
  );
}