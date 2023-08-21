<script>
  import { onMount } from "svelte";
  import { store } from "../../store";
  export let data = [];
  onMount(() => {
    data = data.map((item, index) => ({
      ...item,
      selected: index === 0,
    }));
    console.log("hii", data);
  });
  let missedName = "";
  let missedContent = "";
  $: {
    if (data && data.length > 0) {
      const selected = data.find((item) => item.selected);
      if (selected) {
        missedName = selected.name;
        missedContent = selected.content;
      }
    }
  }
</script>

{#if data && data.length > 0}
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
          {#each data as { name, selected }}
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
                  data = data.map((p) => {
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
        <div
          class="label-text-alt uppercase text-purple-500 font-semibold mt-4"
        >
          What was missed by {missedName}
        </div>
        <div>{missedContent}</div>
      </div>
    </div>
  </div>
{/if}
