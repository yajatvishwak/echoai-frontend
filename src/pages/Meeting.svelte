<script>
  import { onMount } from "svelte";

  // @ts-nocheck

  import ActionButton from "../components/ActionButton.svelte";
  import Agenda from "../components/Agenda.svelte";
  import MeetingLink from "../components/MeetingLink.svelte";
  import Navbar from "../components/Navbar.svelte";
  import Reference from "../components/suggestions/Reference.svelte";
  import SendEmail from "../components/suggestions/SendEmail.svelte";
  import { store } from "../store";
  import axios from "axios";
  import AbsentiaModal from "../components/modals/AbsentiaModal.svelte";
  import Todolist from "../components/modals/Todolist.svelte";
  import TranscriptionModal from "../components/modals/TranscriptionModal.svelte";
  import KeytakewaysModal from "../components/modals/KeytakewaysModal.svelte";
  export let params = {};
  let loading = true;
  let allReady = false;
  let BASEURL = import.meta.env.VITE_BASEURL;

  onMount(async () => {
    const res = await axios.get(BASEURL + "get-meeting/" + params.id);
    if (res.data && res.data.message === "successful") {
      allReady = true;
      data = res.data.meeting;
      // add "completed" to todo, add selected to absentia
    } else {
      allReady = false;
    }
    loading = false;
  });
  let data = {
    meetingFile: "bro.mp4",
    meetingTitle: "Meeting Title",
    meetingLink: "",
    meetingDuration: "1h 30m",
    meetingAgenda: "Meeting Agenda",
    todo: ["what must be done"],
    meetingTranscript: "th",
    absentia: [
      {
        name: "Speaker1",
        content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ullam
        dolore consequuntur eos officia dolorum, id culpa nulla blanditiis
        molestias? Quae veritatis quia ipsa ab laudantium maxime illum placeat
        suscipit!`,
      },
    ],
    keytakeaway: ["adasd", "adasd"],
    suggestions: [
      {
        type: "EMAIL",
        emails: [
          {
            emailCTA: "Send email to the emily",
            receiver: "bro",
            emailContent:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque error voluptatibus, aliquid illum ipsa asperiores? Corporis, praesentium? Nam laborum ullam accusantium molestiae optio reiciendis aliquam, eum facilis ad, voluptatum consectetur.",
            emailSubject: "Send email to the team",
          },
          {
            emailCTA: "Send email to the danny boi",
            receiver: "bro",
            emailContent:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque error voluptatibus, aliquid illum ipsa asperiores? Corporis, praesentium? Nam laborum ullam accusantium molestiae optio reiciendis aliquam, eum facilis ad, voluptatum consectetur.",
            emailSubject: "Send email to the team",
          },
        ],
        actionCompleted: false,
      },
      {
        type: "REFERENCE",
        links: [
          {
            title: "Kubernetes | How to do dab",
            link: "https://kubernetes.io/",
            keyword: "Kubernetes",
          },
        ],
      },
    ],
  };
</script>

<Navbar />

<AbsentiaModal data={data.absentia} />
<Todolist data={data.todo} />
<TranscriptionModal data={data.meetingTranscript} />
<KeytakewaysModal data={data.keytakeaways} />

<section class="w-full flex-1 flex flex-col gap-10">
  {#if loading}
    <div class="flex flex-col items-center justify-center h-full">
      <span class="loading loading-dots loading-sm" />
    </div>
  {:else}
    <div class="grid-cols-2 gap-5 grid mx-auto max-w-screen-xl">
      <div class="grid md:grid-cols-2 col-span-2 w-full border rounded-xl">
        <div>
          <!-- svelte-ignore a11y-media-has-caption -->
          <video
            controls
            class="rounded-tl-xl rounded-bl-xl w-full object-cover h-full"
            src={BASEURL + data.meetingFile}
          />
        </div>
        <div class="p-7 flex-col flex gap-3">
          <div class="text-3xl font-semibold">{data.meetingTitle}</div>
          <MeetingLink duration={data.meetingDuration} />
          <Agenda data={data.meetingAgenda} />
        </div>
      </div>
      {#if allReady}
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
              title={"Action Items"}
              explanation={"Get a list of tasks that need to be completed from this meeting"}
            />
            <!-- <ActionButton
              onClick={() => ($store.keytakeawayModal = true)}
              title={"Key Takeaways"}
              explanation={"Get a list of key takeaways from this meeting"}
            /> -->
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
          <div class="grid grid-cols-1 gap-5">
            {#each data.suggestions as suggestion}
              {#if suggestion.type === "EMAIL"}
                {#each suggestion.emails as email}
                  <SendEmail data={email} />
                {/each}
              {/if}
              {#if suggestion.type === "REFERENCE"}
                <Reference data={suggestion} />
              {/if}
            {/each}
          </div>
        </div>
      {:else}
        <div class="flex flex-col mt-10 justify-center items-center col-span-2">
          <span class="loading loading-dots loading-sm" />
          <div class="max-w-xs text-center">
            We are preparing actions and suggestions based on this meeting...
          </div>
        </div>
      {/if}
    </div>
  {/if}
</section>
