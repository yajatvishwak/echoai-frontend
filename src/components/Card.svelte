<script>
  import { push } from "svelte-spa-router";

  export let title = "Meeting Title";
  export let duration = "1h 30m";
  export let id = "";
  let BASEURL = import.meta.env.VITE_BASEURL;
  export let image =
    "https://via.placeholder.com/300x200.png?text=meeting+thumbnail";
  console.log(id);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={() => push(`/meeting/${id}`)}
  class="rounded hover:scale-95 transition-all cursor-pointer"
>
  <video class="rounded-xl w-full object-cover" src={BASEURL + image} />
  <div class="flex items-center justify-between py-3 gap-6">
    <div class=" line-clamp-2 font-medium">{title}</div>
    <div class=" font-semibold text-sm">{duration}s</div>
  </div>
</div>
