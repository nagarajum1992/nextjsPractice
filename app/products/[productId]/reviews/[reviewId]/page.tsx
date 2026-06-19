export default async function ReviewPage({ params }: { params: Promise<{ productId: string; reviewId: string }> }) {
  const { productId, reviewId } = await params;
  return (
    <div>
      <h1>Review</h1>
      <p>This is the review page for product {productId} and review {reviewId}.</p>
    </div>
  );
}