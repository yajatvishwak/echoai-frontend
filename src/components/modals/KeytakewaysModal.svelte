<script>
  import { store } from "../../store";
  export let data = {
    keytakeaways: [
      {
        title: "Key Takeaway Title",
        explanation:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam odio vero eaque fugiat, excepturi ad similique soluta fugit? Eum ad assumenda nesciunt consectetur omnis ex. Recusandae deleniti unde error facilis.",
      },
      {
        title: "Key Takeaway Title",
        explanation:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam odio vero eaque fugiat, excepturi ad similique soluta fugit? Eum ad assumenda nesciunt consectetur omnis ex. Recusandae deleniti unde error facilis.",
      },
    ],
  };
</script>

<input
  type="checkbox"
  bind:checked={$store.keytakeawayModal}
  class="modal-toggle"
/>
<div class="modal">
  <div class="modal-box max-w-xl">
    <button
      on:click={() => ($store.keytakeawayModal = false)}
      class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button
    >
    <h3 class="font-semibold text-lg">Meeting Key Takeaways</h3>
    <div class="py-4 flex flex-col gap-3">
      {#each data.keytakeaways as { title, explanation }, index}
        <div class="flex flex-col gap-2">
          <div class="font-semibold text-purple-500">
            {index + 1 + ". " + title}
          </div>
          <div class="">{explanation}</div>
        </div>
      {/each}
    </div>
  </div>
</div>
