<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
</script>

<div class="h-screen flex flex-col">
  <Router {routes} />
</div>
