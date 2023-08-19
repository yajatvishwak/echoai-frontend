import Home from "./pages/Home.svelte";
import Meeting from "./pages/Meeting.svelte";

const routes = {
  "/": Home,
  "/meeting/:id": Meeting,
};

export default routes;
