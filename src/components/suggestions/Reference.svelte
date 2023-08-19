<script>
  import toast from "svelte-french-toast";
  import { onMount } from "svelte";
  import { LinkPreview } from "svelte-link-preview";

  let isModalOpen = false;
  export let data = { links: [] };
  onMount(() => {
    toast.success("Reference generated");
  });
</script>

<input type="checkbox" bind:checked={isModalOpen} class="modal-toggle" />
<div class="modal">
  <div class="modal-box max-w-xl">
    <button
      on:click={() => (isModalOpen = false)}
      class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button
    >
    <h3 class="font-semibold text-lg">Reference</h3>
    <div class="py-4 flex flex-col gap-3">
      <div>Find the topics and generated help links from the meeting</div>
      <div class="grid grid-cols-2 gap-2">
        {#each data.links as link}
          <a
            href={link.link}
            class="hover:scale-95 transition-all p-2 flex-col flex gap-2 border rounded"
          >
            <div data-tip={link.link} class="tooltip text-start">
              <div class="line-clamp-1">{link.link}</div>
            </div>
            <div class="mt-2 text-sm">
              Picked up keyword from meeting: <div class="badge">
                {link.keyword}
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={() => (isModalOpen = true)}
  class="p-2 border border-dashed rounded-lg flex justify-between hover:bg-gray-100 transition-all cursor-pointer"
>
  <div class="flex flex-col">
    <div class="flex gap-2 items-center opacity-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>

      <div class="font-semibold">References</div>
    </div>
    <div class="mt-3">
      Kick start your research from what we picked from your meeting
    </div>
  </div>
</div>
