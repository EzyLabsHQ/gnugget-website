export const roadmap = [
  {
    id: '9-3-3',
    title: '9.3.3 — small cleanup',
    status: 'done',
    statusLabel: 'Done',
    intro:
      'A tiny update that fixes a few rough edges under the hood. No new features, no new buttons — just less chance of hiccups and a cleaner codebase so the next big update goes smoothly.',
  },
  {
    id: '9-4',
    title: '9.4 — the big under-the-hood overhaul',
    status: 'refactor',
    statusLabel: 'In development',
    intro:
      'To you, GoldenNugget will look almost the same. But inside, a lot gets rebuilt: the way the app talks to your device, handles errors, and keeps its own code organized.',
    listLabel: 'Practical results you might actually notice:',
    items: [
      'fewer random failures when connecting to / backing up your device',
      "the app's window won't freeze while it scans for devices",
      'errors during apply/reset become more predictable — and if something goes wrong, the app handles it more gracefully',
      'Speed up (maybe)',
    ],
  },
  {
    id: '9-4-1',
    title: '9.4.1 — new tweaks & quality of life',
    status: 'planned',
    statusLabel: 'Planned',
    intro:
      'The first version for the user, not just the code: new tweak categories and/or new tweaks (maybe), plus smaller UX improvements to make the app more comfortable to use.',
  },
  {
    id: '9-4-2',
    title: '9.4.2 — more tweaks & quality of life',
    status: 'planned',
    statusLabel: 'Planned',
    intro:
      "Whatever doesn't fit in 9.4.1 lands here — more tweaks, more small usability wins.",
  },
]