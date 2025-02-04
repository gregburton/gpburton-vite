import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/websites")({
  component: Websites,
});

function Websites() {
  return <main className="container pt-5 pb-40">Hello from Websites!</main>;
}
