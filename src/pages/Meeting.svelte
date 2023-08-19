<script>
  import ActionButton from "../components/ActionButton.svelte";
  import Agenda from "../components/Agenda.svelte";
  import MeetingLink from "../components/MeetingLink.svelte";
  import Navbar from "../components/Navbar.svelte";
  import Reference from "../components/suggestions/Reference.svelte";
  import ScheduleMeeting from "../components/suggestions/ScheduleMeeting.svelte";
  import SendEmail from "../components/suggestions/SendEmail.svelte";
  import { store } from "../store";
  export let params = {};

  let data = {
    suggestions: [
      {
        type: "EMAIL",
        text: "We've noticed you mentioned to email XYZ person about ABC",
        sender: ["bro"],
        emailContent:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque error voluptatibus, aliquid illum ipsa asperiores? Corporis, praesentium? Nam laborum ullam accusantium molestiae optio reiciendis aliquam, eum facilis ad, voluptatum consectetur.",
        emailDescription: "Send email to the team",
        actionCompleted: false,
      },
      {
        type: "MEETING",
        text: "text from gpt",
        actionCompleted: false,
        meetingTime: "",
        meetingDate: "",
        meetingAgenda: "Meeting with the team",
        invitation: ["dannyboi@gmail.com", "dannyboi@gmail.com"],
      },
      {
        type: "REFERENCE",
        links: [{ link: "http:...", keyword: "Kubernetes" }],
      },
    ],
  };
</script>

<Navbar />
<section class="w-full flex-1 flex flex-col gap-10">
  <div class="grid-cols-2 gap-5 grid mx-auto max-w-screen-xl">
    <div class="grid md:grid-cols-2 col-span-2 w-full border rounded-xl">
      <div>
        <!-- svelte-ignore a11y-media-has-caption -->
        <video
          class="rounded-tl-xl rounded-bl-xl w-full object-cover"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        />
      </div>
      <div class="p-7 flex-col flex gap-3">
        <div class="text-3xl font-semibold">Meeting Title</div>
        <MeetingLink duration={"2hr"} />
        <Agenda />
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class=" label-text-alt text-purple-500 font-semibold mb-2">
        ACTIONS
      </div>
      <div class="grid grid-cols-2 gap-4">
        <ActionButton
          onClick={() => ($store.absentiaModal = true)}
          title={"Absentia"}
          explanation={"Missed this meeting? Get to speed with what you need to know from this meeting"}
        />
        <ActionButton
          onClick={() => ($store.todoModal = true)}
          title={"To-Do List"}
          explanation={"Get a list of tasks that need to be completed from this meeting"}
        />
        <ActionButton
          onClick={() => ($store.keytakeawayModal = true)}
          title={"Key Takeaways"}
          explanation={"Get a list of key takeaways from this meeting"}
        />
        <ActionButton
          onClick={() => ($store.transcriptModal = true)}
          title={"Transcript"}
          explanation={"Get a transcript of the meeting with its summary"}
        />
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class=" label-text-alt text-purple-500 font-semibold mb-2">
        SUGGESTIONS
      </div>
      <div class="grid grid-cols-2 gap-5">
        {#each data.suggestions as suggestion}
          {#if suggestion.type === "EMAIL"}
            <SendEmail data={suggestion} />
          {/if}
          {#if suggestion.type === "REFERENCE"}
            <Reference data={suggestion} />
          {/if}
          {#if suggestion.type === "MEETING"}
            <ScheduleMeeting data={suggestion} />
          {/if}
        {/each}
      </div>
    </div>
  </div>
</section>
