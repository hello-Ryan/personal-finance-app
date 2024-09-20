import { db } from "~/server/db";
import { TopNav } from "./_components";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main>
      <TopNav/>
      <div>
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
      </div>
      
    </main>
  );
}
