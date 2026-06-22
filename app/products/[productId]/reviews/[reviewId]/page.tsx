import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const randomNumber = getRandomInt(2);

  if (randomNumber === 1) {
    throw new Error("Error loading review");
  }
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      <h1>Review</h1>
      <p>
        This is the review page for product {productId} and review {reviewId}.
      </p>
    </div>
  );
}
