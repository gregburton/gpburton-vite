import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
// import { useEffect, useState } from "react";

export const Route = createLazyFileRoute("/notes/$noteId")({
  component: MdxComponent,
});

function MdxComponent() {
  const { noteId } = Route.useParams();

  const query = useQuery({
    queryKey: ["notes", noteId],
    queryFn: () => import(`@/notes/${noteId}.mdx`).then((mod) => mod.default),
  });

  if (query.isLoading) {
    return (
      <article className="container pt-5 pb-40 prose prose-lg dark:prose-invert max-w-5xl">
        <p className="text-muted-foreground">
          <em>Fetching Note...</em>
        </p>
      </article>
    );
  }

  if (query.isError || !query.data) {
    return (
      <article className="container pt-5 pb-40 prose prose-lg dark:prose-invert max-w-5xl">
        <p>Note not found!</p>
      </article>
    );
  }

  const PostComponent: React.FC = query.data;

  return (
    <article className="container pt-5 pb-40 prose prose-lg dark:prose-invert max-w-5xl">
      <PostComponent />
    </article>
  );
}
