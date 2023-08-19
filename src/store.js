import { writable } from "svelte/store";

export const store = writable({
  absentiaModal: false,
  todoModal: false,
  keytakeawayModal: false,
  transcriptModal: false,
});
