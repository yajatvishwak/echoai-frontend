<script>
  import { store } from "../../store";
  export let data = {
    participants: [
      {
        name: "Speaker1",
        selected: true,
        absentia: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ullam
        dolore consequuntur eos officia dolorum, id culpa nulla blanditiis
        molestias? Quae veritatis quia ipsa ab laudantium maxime illum placeat
        suscipit!`,
      },
      {
        name: "Speaker2",
        selected: false,
        absentia: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ullam
        dolore consequuntur eos officia dolorum, id culpa nulla blanditiis
        molestias? Quae veritatis quia ipsa ab laudantium maxime illum placeat
        suscipit!`,
      },
      {
        name: "Speaker3",
        selected: false,
        absentia: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ullam
        dolore consequuntur eos officia dolorum, id culpa nulla blanditiis
        molestias? Quae veritatis quia ipsa ab laudantium maxime illum placeat
        suscipit!`,
      },
      {
        name: "Name",
        selected: false,
        absentia: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ullam
        dolore consequuntur eos officia dolorum, id culpa nulla blanditiis
        molestias? Quae veritatis quia ipsa ab laudantium maxime illum placeat
        suscipit!`,
      },
    ],
  };
</script>

<input
  type="checkbox"
  bind:checked={$store.absentiaModal}
  class="modal-toggle"
/>
<div class="modal">
  <div class="modal-box max-w-xl">
    <button
      on:click={() => ($store.absentiaModal = false)}
      class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button
    >
    <h3 class="font-semibold text-lg">Absentia Fill in</h3>
    <div class="label-text-alt uppercase text-purple-500 font-semibold mt-4">
      People mentioned in this meeting
    </div>
    <div class="py-4 flex flex-col gap-3">
      <div class="flex gap-3 overflow-auto">
        {#each data.participants as { name, selected }}
          {#if selected}
            <img
              src={`https://api.dicebear.com/6.x/notionists/svg?seed=${name}`}
              class="w-14 h-14 rounded-full border-2 border-purple-500"
              alt=""
            />
          {:else}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <img
              on:click={() => {
                data.participants = data.participants.map((p) => {
                  if (p.name === name) {
                    p.selected = true;
                  } else {
                    p.selected = false;
                  }
                  return p;
                });
              }}
              src={`https://api.dicebear.com/6.x/notionists/svg?seed=${name}`}
              class="w-14 h-14 rounded-full border"
              alt=""
            />
          {/if}
        {/each}
      </div>
      <div class="label-text-alt uppercase text-purple-500 font-semibold mt-4">
        What was missed by {data.participants.find((p) => p.selected)
          .name}?{" "}
      </div>
      <div>{data.participants.find((p) => p.selected).absentia}</div>
    </div>
  </div>
</div>
