<script>
  import { store } from "../../store";
  export let data = {
    todo: [
      {
        title: "Todo Title",
        content: "Summary of what must be done",
        completed: false,
      },
    ],
  };
</script>

<input type="checkbox" bind:checked={$store.todoModal} class="modal-toggle" />
<div class="modal">
  <div class="modal-box max-w-xl">
    <button
      on:click={() => ($store.todoModal = false)}
      class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button
    >
    <h3 class="font-semibold text-lg">Todo list</h3>
    <div class="py-4 flex flex-col gap-3">
      {#each data.todo as { title }}
        <div class="flex items-center gap-2">
          <input type="checkbox" class="checkbox h-5 w-5 text-gray-600" />
          <span class="">{title} </span>
        </div>
      {/each}
    </div>
  </div>
</div>
