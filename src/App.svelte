<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import AbsentiaModal from "./components/modals/AbsentiaModal.svelte";
  import Todolist from "./components/modals/Todolist.svelte";
  import TranscriptionModal from "./components/modals/TranscriptionModal.svelte";
  import KeytakewaysModal from "./components/modals/KeytakewaysModal.svelte";

  import toast, { Toaster } from "svelte-french-toast";
</script>

<AbsentiaModal />
<Todolist />
<TranscriptionModal />
<KeytakewaysModal />

<Toaster />
<div class="h-screen flex flex-col">
  <Router {routes} />
</div>
