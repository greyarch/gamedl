import { persisted } from 'svelte-persisted-store';

export const current = persisted('current', 0);
export const best = persisted('best', 0);
