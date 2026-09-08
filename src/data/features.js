export const featureGroups = [
  {
    icon: '🎨',
    title: 'PosterBoard',
    blurb: 'Animated wallpapers and descriptors.',
    details: [
      'Animated wallpapers and descriptors',
      'Community wallpapers available (cowabun.ga, caplayground)',
      'Customizing community-made wallpapers via batter files',
    ],
  },
  {
    icon: '🧩',
    title: 'Templates',
    blurb: 'Custom Operations and file editing.',
    details: [
      'Custom operations and file editing',
      'Full documentation on batter file structure',
    ],
  },
  {
    icon: '💾',
    title: 'psysbackup',
    blurb: 'Backup system plist.',
    details: [
      'Backup system plist files',
      'Required for "reset tweaks" without damaging the system',
    ],
  },
  {
    icon: '📶',
    title: 'Status Bar',
    blurb: 'Carriers, battery, time, icons and more.',
    details: [
      'Change carrier name / secondary carrier',
      'Enable or disable carriers',
      'WiFi/Cellular bars and numeric strength',
      'Battery capacity and display detail',
      'Time text, date text (iPad), breadcrumb text',
      'Show or hide many status bar icons',
    ],
  },
  {
    icon: '🏠',
    title: 'Springboard Options',
    blurb: 'Lock screen, idle, dimming and gestures.',
    details: [
      'Lock screen footnote and idle auto-lock time',
      'Disable lock-after-respring and screen dimming while charging',
      'Hide AC power on lock screen, show supervision text',
      'Dynamic Island in screenshots',
      'AirPlay for Stage Manager, auth line, floating tab bar',
    ],
  },
  {
    icon: '⚙️',
    title: 'Internal Options',
    blurb: 'Hidden Apple debug & internal tweaks.',
    details: [
      'Build version in status bar, force RTL',
      'Show hidden icons, Metal HUD debug',
      'iMessage / IDS / VC diagnostics',
      'App Store debug gesture, Notes debug mode',
      'Show touches, hide respring icon, paste sounds',
    ],
  },
  {
    icon: '💧',
    title: 'Disable Liquid Glass',
    blurb: 'iOS 26.0+ visuals controls.',
    details: [
      'Ignore Liquid Glass app build check (iOS 26.0+)',
      'Force Solarium fallback (iOS 26.0+)',
    ],
  },
  {
    icon: '🛑',
    title: 'Disable Daemons',
    blurb: 'Quiet down unwanted background services.',
    details: [
      'OTA updates, UsageTrackingAgent, Game Center',
      'Screen Time, logs/crashes, ATWAKEUP, Tipsd',
      'VPN, Chinese WLAN, HealthKit, AirPrint',
      'Assistive Touch, iCloud, Personal Hotspot',
      'PassBook, Spotlight',
    ],
  },
]

export const statusBarItems = [
  'Change carrier name',
  'Change secondary carrier name',
  'Enable/Disable primary or secondary carriers',
  'Change number of WiFi/Cellular bars',
  'Change battery capacity',
  'Change battery display detail',
  'Change time text',
  'Change date text (iPad only)',
  'Change breadcrumb text',
  'Show numeric WiFi/Cellular strength',
  'Show or hide many status bar icons',
]

export const springboardItems = [
  'Set Lock Screen Footnote',
  'Set Lock Screen Idle Auto-Lock Time',
  'Disable Lock After Respring',
  'Disable Screen Dimming While Charging',
  'Disable Low Battery Alerts',
  'Hide AC Power on Lock Screen',
  'Show Supervision Text on Lock Screen',
  'Show Dynamic Island in Screenshots',
  'Enable AirPlay support for Stage Manager',
  'Show Red/Green Authentication Line on Lock Screen',
  'Disable Floating Tab Bar on iPads',
]

export const internalItems = [
  'Build Version in Status Bar',
  'Force Right to Left',
  'Show Hidden Icons on Home Screen',
  'Force Metal HUD Debug',
  'iMessage Diagnostics',
  'IDS Diagnostics',
  'VC Diagnostics',
  'App Store Debug Gesture',
  'Notes App Debug Mode',
  'Show Touches With Debug Info',
  'Hide Respring Icon',
  'Play Sound on Paste',
  'Show Notifications for System Pastes',
]

export const daemonItems = [
  'OTAd',
  'UsageTrackingAgent',
  'Game Center',
  'Screen Time Agent',
  'Logs, Dumps, and Crash Reports',
  'ATWAKEUP',
  'Tipsd',
  'VPN',
  'Chinese WLAN service',
  'HealthKit',
  'AirPrint',
  'Assistive Touch',
  'iCloud',
  'Internet Tethering (Personal Hotspot)',
  'PassBook',
  'Spotlight',
]