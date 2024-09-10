import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/400acfb1-9483-4b8c-8659-09fe6fde08b7-hwqymk.jpg", 
  "https://utfs.io/f/a7be56e5-6c74-44f5-b920-72f89d205b88-oihici.jpg",
  "https://utfs.io/f/a4779853-daff-41cf-932d-ab3cb205f8ac-2klt.jpg",
  "https://utfs.io/f/f15642ce-8823-47ec-9a9d-7f08566aa4de-g9ce1p.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
          
        ))}
      </div>
    </main>
  );
}
