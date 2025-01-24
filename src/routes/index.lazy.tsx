import { createLazyFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="container pt-5 pb-40">
      <div className="flex flex-col sm:flex-row gap-5">
        <Card className="max-w-fit self-center">
          <CardHeader className="items-center text-center">
            <Avatar className="w-fit">
              <AvatarImage
                src="https://github.com/gregburton.png"
                alt="Greg Burton's GitHub profile picture"
                className="w-52"
              />
              <AvatarFallback className="w-52 h-52 text-6xl">GB</AvatarFallback>
            </Avatar>
            <CardTitle>
              <h1 className="text-3xl">Greg Burton</h1>
            </CardTitle>
            <CardDescription>
              <p>Enjoys react.js, gaming, and taco bell.</p>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <a
              href="https://github.com/gregburton"
              className="flex items-center gap-x-3 group"
            >
              <svg
                // https://simpleicons.org/
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 shrink-0 transition-all fill-muted-foreground group-hover:fill-foreground"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span className="transition-all underline underline-offset-2 decoration-muted-foreground group-hover:underline-offset-4 group-hover:decoration-foreground">
                https://github.com/gregburton
              </span>
            </a>
            <a
              href="mailto:grepburton@gmail.com"
              className="flex items-center gap-x-3 group"
            >
              <Mail className="w-6 h-6 shrink-0 transition-all stroke-muted-foreground group-hover:stroke-foreground" />
              <span className="transition-all underline underline-offset-2 decoration-muted-foreground group-hover:underline-offset-4 group-hover:decoration-foreground">
                grepburton@gmail.com
              </span>
            </a>
          </CardContent>
        </Card>
        <section className="bg-zinc-900 flex-1">
          <p>Put stuff here</p>
        </section>
      </div>
    </main>
  );
}
