<script>
  import { push } from "svelte-spa-router";
  import logo from "../assets/logo.png";
</script>

<div class="flex p-4 md:p-10 justify-between items-center">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={() => push("/")} class="flex items-center gap-1">
    <img src={logo} class="w-12 h-12" />
    <div class="text-3xl">echo<span class="text-purple-500">ai</span></div>
  </div>
  <div class="">
    <button
      on:click={() => push("/")}
      class="btn rounded-full text-xs font-medium bg-purple-100"
      >New meeting</button
    >
  </div>
</div>
