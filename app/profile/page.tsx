export const metadata = {
  title: "Profile",
};

export default async function ProfilePage() {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000),
  ); // Simulate a delay for loading
  return (
    <div>
      <h1>Welcome to the Profile Page</h1>
      <p>This is the main content of the profile page.</p>
    </div>
  );
}
