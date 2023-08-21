<script>
  import toast from "svelte-french-toast";
  import Card from "../components/Card.svelte";
  import Navbar from "../components/Navbar.svelte";
  import axios from "axios";
  import { push } from "svelte-spa-router";
  import { onMount } from "svelte";
  let data = {
    meetings: [{ title: "", id: "", duration: "", image: "" }],
  };
  let BASEURL = import.meta.env.VITE_BASEURL;
  let files;

  onMount(async () => {
    const res = await axios.get(BASEURL + "get-all");
    if (res && res.data) {
      // @ts-ignore
      data.meetings = res.data.meetings.map((item) => {
        return {
          id: item._id,
          title: item.agent.meetingName,
          duration: item.meetingDuration,
          image: item.video,
        };
      });
      console.log(data.meetings);
      //   data.meetings = data.meetings.map((item) => ({
      //     id: item._id,
      //     title: item.agent.meetingName,
      //     duration: item.meetingDuration,
      //   }));
    }
  });

  async function createMeeting() {
    // console.log("creating meeting");
    let fd = new FormData();
    loading = true;
    if (files && files.length > 0) {
      fd.append("file", files[0]);
      const res = await axios.post(BASEURL + "create-meeting", fd);
      if (res && res.data) {
        push(`/meeting/${res.data.meeting_id}`);
      }
      loading = false;
    }
  }
  let loading = false;
  $: {
    if (loading) {
      toast.loading("Loading...");
    } else {
      toast.dismiss();
    }
  }
</script>

<Navbar />

<section class="w-full flex-1 flex flex-col gap-10">
  <div
    class="flex flex-col justify-center items-center p-4 md:p-0 max-w-screen-md w-full mx-auto mt-32"
  >
    <div class="text-center py-3 text-5xl font-semibold">
      Actionable meetings, always
    </div>
    <div class="text-center text-xl font-normal">
      echoai generates actions from your online meetings
    </div>
    <div class="flex flex-col mt-10 max-w-xl w-full">
      <div class="join gap-2">
        <input
          class="input input-bordered w-full"
          type="text"
          placeholder="Enter your gmeet link"
        />
        <button
          on:click={() => {
            toast("Feature coming soon", {
              icon: "👏",
            });
          }}
          class="btn bg-purple-500 rounded-xl"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
      </div>
      <div class="divider py-4">or</div>
      <div class="label-text py-2">Upload your recorded meetings</div>
      <div class="join gap-2">
        <input
          bind:files
          type="file"
          disabled={loading}
          class="file-input file:bg-purple-500 file:text-white file:border-0 file-input-bordered w-full"
        />
        <button
          disabled={loading}
          on:click={() => {
            createMeeting();
          }}
          class="btn bg-purple-500 rounded-xl"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="w-full max-w-screen-lg p-4 md:p-2 mx-auto mt-32">
    <div class="font-semibold text-lg">Previous Meetings</div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 my-4">
      {#each data.meetings as meeting}
        <Card
          title={meeting.title}
          duration={meeting.duration}
          image={meeting.image}
          id={meeting.id}
        />
      {/each}
    </div>
  </div>
</section>
