<script>
  import { store } from "../../store";
  export let data = "";
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
      {data}
    </div>
  </div>
</div>
