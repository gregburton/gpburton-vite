import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Gamepad2, Globe, Mail, NotebookText } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GradientStrokeIcon from "@/components/gradient-stroke-icon";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="container pt-5 pb-40">
      <div className="flex flex-col sm:flex-row gap-5">
        <Card className="max-w-fit self-center sm:self-stretch">
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

        <section className="flex-1">
          <div className="mb-5">
            <h1 className="text-3xl">Welcome to my site!</h1>
            <p>Take a look at the things that I enjoy spending time on.</p>
          </div>

          <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
            <li className="group">
              <Link
                to="/websites"
                className="p-3 flex flex-col items-center gap-y-2 bg-accent rounded-md transition-all hover:bg-background hover:outline-1"
              >
                <GradientStrokeIcon
                  gradientId="globe-gradient"
                  Icon={Globe}
                  fromColor="oklch(0.715 0.143 215.221)"
                  toColor="oklch(0.623 0.214 259.815)"
                  className="group-hover:animate-wiggle"
                />
                <h3 className="text-xl font-semibold">Websites</h3>
              </Link>
            </li>
            <li className="group">
              <Link
                to="/gaming"
                className="p-3 flex flex-col items-center gap-y-2 bg-accent rounded-md transition-all hover:bg-background hover:outline-1"
              >
                <GradientStrokeIcon
                  gradientId="gamepad-gradient"
                  Icon={Gamepad2}
                  fromColor="oklch(0.606 0.25 292.717)"
                  toColor="oklch(0.667 0.295 322.15)"
                  className="group-hover:animate-wiggle"
                />
                <h3 className="text-xl font-semibold">Gaming</h3>
              </Link>
            </li>
            <li className="group">
              <Link
                to="/notes"
                className="p-3 flex flex-col items-center gap-y-2 bg-accent rounded-md transition-all hover:bg-background hover:outline-1"
              >
                <GradientStrokeIcon
                  gradientId="notebook-gradient"
                  Icon={NotebookText}
                  fromColor="oklch(0.723 0.219 149.579)"
                  toColor="oklch(0.508 0.118 165.612)"
                  className="group-hover:animate-wiggle"
                />
                <h3 className="text-xl font-semibold">Notes</h3>
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <section className="py-10 space-y-5">
        <h2 className="text-2xl">About Me</h2>

        <p>
          I&apos;ve been using computers for as long as I can remember. Some of
          my earliest memories include spending countless hours on games such as{" "}
          <a
            href="https://en.wikipedia.org/wiki/SkiFree"
            className="link link-external"
          >
            SkiFree
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Chip%27s_Challenge"
            className="link link-external"
          >
            Chip&apos;s Challenge
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Pong:_The_Next_Level"
            className="link link-external"
          >
            Pong: The Next Level
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Centipede_(1998_video_game)"
            className="link link-external"
          >
            Centipede
          </a>{" "}
          (the 3d one),{" "}
          <a
            href="https://en.wikipedia.org/wiki/Carnivores_(video_game)"
            className="link link-external"
          >
            Carnivores
          </a>
          , and many more. I&apos;ve always been a gamer at heart and grew up
          playing many more throughout the years on various platforms. My
          favorite games these days are created by{" "}
          <a
            href="https://www.fromsoftware.jp/ww/"
            className="link link-external"
          >
            FromSoftware
          </a>
          .
        </p>
        <p>More childhood stuff?....</p>
        <p>
          Fast forward to adulthood. I studied Information Technology at{" "}
          <a href="https://ualr.edu/www/" className="link link-external">
            UA Little Rock
          </a>{" "}
          with a major in Web Design &amp; Development. My classes primarily
          focused on the <em>design</em> aspect. A majority of my studies
          involved learning and practicing various graphic design principles. I
          became well versed in various Adobe programs. I was hoping to learn
          the nitty-gritty of coding websites from scratch, but unfortunately
          there wasn&apos;t much of a focus on that. After graduating, I took
          quite a few{" "}
          <a href="https://www.udemy.com/" className="link link-external">
            Udemy
          </a>{" "}
          courses to learn all the cool aspects of building websites from
          scratch. My university courses gave me a fair bit of fundamental
          knowledge, but I quickly learned that there was a crazy amount of
          stuff to understand!
        </p>
      </section>
    </main>
  );
}
