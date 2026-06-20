export default async function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = await params;
  if (slug.length === 2) {
    return (
      <div>
        <h1>
          Documentation for {slug[0]} - {slug[1]}
        </h1>
      </div>
    );
  } else if (slug.length === 1) {
    return (
      <div>
        <h1>Documentation for {slug[0]}</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Documentation Home</h1>
    </div>
  );
}
