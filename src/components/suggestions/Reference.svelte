<script>
  import toast from "svelte-french-toast";

  let isModalOpen = false;
  let data = {
    sender: ["bro"],
    emailContent:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque error voluptatibus, aliquid illum ipsa asperiores? Corporis, praesentium? Nam laborum ullam accusantium molestiae optio reiciendis aliquam, eum facilis ad, voluptatum consectetur.",
    emailDescription: "Send email to the team",
  };
</script>

<input type="checkbox" bind:checked={isModalOpen} class="modal-toggle" />
<div class="modal">
  <div class="modal-box max-w-xl">
    <button
      on:click={() => (isModalOpen = false)}
      class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button
    >
    <h3 class="font-semibold text-lg">Compose Email</h3>
    <div class="py-4 flex flex-col gap-3">
      <input
        type="email"
        class="input input-bordered"
        placeholder="Email"
        name=""
        id=""
      />
      {#each data.sender as invite}
        <button
          on:click={() => {
            data.sender = data.sender.filter((i) => i !== invite);
            toast.success("Removed " + invite);
          }}
          class="badge"
        >
          {invite}
        </button>
      {/each}
      <textarea
        rows="4"
        class="textarea textarea-bordered"
        placeholder="Message"
        bind:value={data.emailContent}
      />
      <button
        class="btn"
        on:click={() => {
          if (data.emailContent === "") {
            toast.error("Email content cannot be empty");
            return;
          }
          if (data.sender.length === 0) {
            toast.error("Please add a recipient");
            return;
          }
          toast.success("Email sent");
          isModalOpen = false;
        }}>Send Email</button
      >
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
          d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
        />
      </svg>

      <div class="font-semibold">References</div>
    </div>
    <div class="mt-3">
      Kick start your research from what we picked from your meeting
    </div>
  </div>
</div>
