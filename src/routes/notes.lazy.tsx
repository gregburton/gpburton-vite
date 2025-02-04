import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/notes")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/notes"!</div>;
}
