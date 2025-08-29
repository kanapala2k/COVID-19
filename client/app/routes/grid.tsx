import type { Route } from "./+types/home";
import { Grid } from "../welcome/grid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Grid View" },
    { name: "grid", content: "Neo4j grid view!" },
  ];
}

export default function Home() {
  return <Grid />;
}
