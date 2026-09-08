export const roadmap = [
  {
    id: '9-3-3',
    title: '9.3.3 — transitional',
    status: 'next',
    statusLabel: 'Next release',
    intro: 'Quick-win fixes only, no architecture change. Target: a stable small release bridging 9.3.2 → 9.4.',
    items: [
      'Remove the dead first `ApplyThread.update_label` ("src/gui/thread_workers/apply_worker.py", shadowed duplicate at line 71)',
      'Drop the leftover `DEBUG: _add_posterboard_container called` log line (`src/restore/protective.py`)',
      '`PBTemplateException` → inherit `NuggetException` (it currently bypasses `detailed_text` and crash-handler classification)',
      'Unify the SSL handshake timeout: `_sc.DEFAULT_SSL_HANDSHAKE_TIMEOUT = 60` set in both `protective.py` and `device_manager.py` should have a single owner',
      'Bump version to 9.3.3, changelog entry (format matches existing `CHANGELOG.md` entries)',
    ],
  },
  {
    id: '9-4',
    title: '9.4-refactor — structural refactor',
    status: 'refactor',
    statusLabel: 'In progress',
    intro: 'Housekeeping that prepares the codebase for feature work. No user-visible features here unless they fall out naturally.',
    groups: [
      {
        title: 'Safety / regression risk',
        items: [
          '**Shared retry helper** — the exponential-backoff loops in `protective.py` (`ProtectiveBackupService.connect`, 5 retries), `original_plist.py` (`psysbackup`), `pb_dialog.py` (`backup_posterboard_database`) and the InstallationProxy query in `restore.py` are copies with subtly different exception sets/retry counts. Extract one `async_retry` with configurable predicates/backoff.',
          '**Single source for domain↔path mapping** — `DeviceManager.get_domain_for_path` and `absolute_path_to_backup_location` maintain the same table independently; a reset writes to the wrong domain if they drift.',
          '**Error classification** — `is_connection_error` / `is_device_locked_error` / `_is_transient_restore_error` are string-heuristics on pymobiledevice3 messages; move `_is_transient_restore_error` from `restore.py` into `device_errors.py` next to the others and harden matching.',
        ],
      },
      {
        title: 'Maintainability',
        items: [
          '**Split `protective.py` (1541 LOC)** — extract logging, `inject_file_into_backup` (~320 LOC), and `ProtectiveBackupCache`.',
          '**`main_window.py` (1002 LOC)** — extract navigation/routing and settings persistence into mixins.',
          '**`FEATURE_TWEAKS` derived from the registry** — the hand-maintained dict in `hotload.py` drifts when tweaks are added to `SPECS`; derive it from the main tweak spec (`Section`) instead.',
          '**Unify logging** — `protective.py` owns an independent `print()`+file logger (`_LOG_FILE` hardcoded) that ignores `GOLDENNUGGET_LOG_FILE`; fold it into the stdlib logger path.',
        ],
      },
    ],
  },
  {
    id: 'backlog',
    title: 'Backlog',
    status: 'backlog',
    statusLabel: 'Unconfirmed',
    intro: 'Ideas and larger feature work, not yet scheduled.',
    items: [
      'Feature ideas TBD — e.g. new tweak categories, wallpaper/CA improvements, restore UX.',
      'Post-refactor quality passes: thread off `get_devices` / `reset_device_pairing` from the GUI thread, review fork-feature differences.',
    ],
  },
]