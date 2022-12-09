import { writable } from 'svelte-local-storage-store'

export const current = writable('current', 0)
export const best = writable('best', 0)