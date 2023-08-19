<script>
  import { store } from "../../store";
  export let data = {
    transcript:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam odio vero eaque fugiat, excepturi ad similique soluta fugit? Eum ad assumenda nesciunt consectetur omnis ex. Recusandae deleniti unde error facilis.",
  };
</script>

<input
  type="checkbox"
  bind:checked={$store.transcriptModal}
  class="modal-toggle"
/>
<div class="modal">
  <div class="modal-box max-w-xl">
    <button
      on:click={() => ($store.transcriptModal = false)}
      class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button
    >
    <h3 class="font-semibold text-lg">Meeting Transcript</h3>
    <div class="py-4 flex flex-col gap-3">
      {data.transcript}
    </div>
  </div>
</div>
