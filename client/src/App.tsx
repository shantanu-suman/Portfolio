import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import IntroAnimation from "@/components/IntroAnimation"; // Import animation

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <IntroAnimation onComplete={() => setAnimationCompleted(true)} />
        {animationCompleted && (
          <>
            <Toaster />
            <Router />
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
