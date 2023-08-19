<script>
  import toast from "svelte-french-toast";
  import moment from "moment";

  let data = {
    meetingTime: "",
    meetingDate: "",
    meetingAgenda: "Meeting with the team",
    invitation: ["dannyboi@gmail.com", "dannyboi@gmail.com"],
  };
  let isModalOpen = false;
  let isScheduled = false;
</script>

<input type="checkbox" bind:checked={isModalOpen} class="modal-toggle" />
<div class="modal">
  <div class="modal-box max-w-xl">
    <button
      on:click={() => (isModalOpen = false)}
      class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button
    >
    <h3 class="font-semibold text-lg">Manage Meeting Invitation</h3>
    <div class="py-4 flex flex-col gap-3">
      <input
        type="text"
        placeholder="Meeting Agenda"
        bind:value={data.meetingAgenda}
        class="border p-2 rounded"
        name=""
        id=""
      />
      <input
        type="date"
        bind:value={data.meetingDate}
        class="border p-2 rounded"
        name=""
        id=""
      />
      <input
        type="time"
        bind:value={data.meetingTime}
        class="border p-2 rounded"
        name=""
        id=""
      />
      <div class="flex justify-between items-center">
        <div class="label-text text-purple-500 uppercase font-semibold">
          Invite Participants
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          on:click={() => {
            let email = prompt("Enter email address");
            if (email) {
              data.invitation.push(email);
              data.invitation = [...data.invitation];
            }
          }}
        >
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
      <div>
        {#each data.invitation as invite}
          <div>{invite}</div>
        {/each}
      </div>
      <button
        on:click={() => {
          toast.success("Meeting Scheduled");
          isModalOpen = false;
        }}
        class="btn">Schedule Google Meeting</button
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
          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
      <div class="font-semibold">Schedule Meeting</div>
    </div>
    <div class="font-semibold mt-3">
      {data.meetingAgenda}
    </div>
    <div class="text-sm">
      {moment(data.meetingDate).format("MMM DD, YYYY")}{" "}
    </div>
  </div>
</div>
