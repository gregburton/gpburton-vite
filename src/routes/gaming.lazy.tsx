import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/gaming')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/gaming"!</div>
}
