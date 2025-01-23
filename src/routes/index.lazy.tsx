import { useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [count, setCount] = useState(0);

  return (
    <main className="container pt-5 pb-40">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <div className="flex gap-x-5">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <CardTitle>
            <h1>Vite + React</h1>
          </CardTitle>
          <CardDescription>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </CardContent>
        <CardFooter>
          <p>Click on the Vite and React logos to learn more</p>
        </CardFooter>
      </Card>
    </main>
  );
}
