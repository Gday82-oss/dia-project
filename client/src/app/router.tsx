/**
 * Routeur de l'application — défini via wouter.
 * Les routes agents sont dérivées automatiquement des données agents.
 */

import { Route, Switch } from "wouter";
import RootLayout from "./layout/RootLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Intro from "@/pages/Intro";
import Fractal from "@/pages/Fractal";
import AgentDetail from "@/pages/AgentDetail";
import Canon from "@/pages/Canon";
import AgentsDashboard from "@/pages/AgentsDashboard";
import NotFound from "@/pages/NotFound";

export default function AppRouter() {
  return (
    <RootLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/intro" component={Intro} />
        <Route path="/fractal" component={Fractal} />
        <Route path="/agent/:code" component={AgentDetail} />
        <Route path="/canon" component={Canon} />
        <Route path="/dashboard" component={AgentsDashboard} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </RootLayout>
  );
}
