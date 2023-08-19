<script>
  export let onClick;
  export let title;
  export let explanation;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={() => onClick()}
  class="p-4 border flex flex-col gap-1 w-full hover:bg-gray-100 cursor-pointer rounded-xl transition-all"
>
  <div class="flex justify-between">
    <div class="text-xl font-semibold">{title}</div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  </div>
  <div class="text-sm">{explanation}</div>
</div>
