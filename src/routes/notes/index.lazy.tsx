import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

import { getAllNotes } from "@/lib/utils/get-all-notes";

export const Route = createLazyFileRoute("/notes/")({
  component: RouteComponent,
});

function RouteComponent() {
  const query = useQuery({
    queryKey: ["notes"],
    queryFn: getAllNotes,
  });

  if (query.isLoading) {
    return (
      <article className="container pt-5">
        <p className="text-muted-foreground">
          <em>Fetching Notes...</em>
        </p>
      </article>
    );
  }

  if (query.isError || !query.data) {
    return (
      <article className="container pt-5">
        <p>Unable to fetch notes!</p>
      </article>
    );
  }

  return (
    <main className="container pt-5 pb-40">
      <h1 className="text-3xl font-bold mb-6">Notes</h1>
      <ul>
        {query.data.map((note) => (
          <li key={note.slug} className="mb-4">
            <Link
              to={`/notes/$noteId`}
              params={{
                noteId: note.slug,
              }}
              className="text-xl font-semibold text-blue-600"
            >
              {note.title}
            </Link>
            <p className="text-sm text-gray-500">
              {new Date(note.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700">{note.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
