import { MdxFrontmatter } from "@/types";

/**
 * @link https://its.ardy.dev/blog/how-this-site-is-built
 */
export async function getAllNotes(): Promise<MdxFrontmatter[]> {
  const modules = import.meta.glob<{ frontmatter: MdxFrontmatter }>(
    "/src/notes/*.mdx",
    { eager: true }
  );

  const posts = Object.entries(modules).map(([path, mod]) => {
    const id = path.replace("../", "").replace(/\.mdx$/, "");
    const slug = path.split("/").pop()?.replace(".mdx", "");
    if (slug === undefined) throw new Error(`No route for ${id}`);

    return {
      ...mod.frontmatter,
      slug,
    };
  });

  // Sort by date (newest first)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
