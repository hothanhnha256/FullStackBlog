export default function Blog({ params }: { params: { blogId: string } }) {
  return (
    <div>
      <h1>Blog Page {params.blogId}</h1>
    </div>
  );
}
