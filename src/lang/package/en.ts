const formatMonth = (val: number | string) => {
  val = Number(val)
  // 一到12月数组
  const month = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  return month[val]
}

export default {
  public: {
    close: 'close',
    magnify: 'magnify',
    lessen: 'lessen'
  },
  home: {
    noFullScreen: 'Your browser does not support full screen operation!'
  },
  theme: {
    setMainColor: 'Main color setting',
    setHoverColor: 'Mouse over the color',
    resDefault: 'Restore to default'
  },
  lang: {
    auto: 'Auto',
    simplifiedChinese: 'Simplified Chinese',
    chineseTraditional: 'Chinese Traditional',
    English: 'English',
    korean: 'Korean'
  },
  router: {
    css: 'Css',
    dashboard: 'Dashboard',
    vue: 'Vue',
    subjectColor: 'subject color',
    home: 'Home'
  },
  memo: {
    memo: 'memorandum',
    ascendingOrder: 'ascending order',
    descendingOrder: 'descending order',
    noTitle: 'No title',
    deleteMemoTips: 'Are you sure you want to delete this memo?',
    deleteMemo: 'Delete memorandum',
    unfixation: 'unfixation',
    fixation: 'fixation',
    noMemo: 'No memorandum',
    newMemorandum: 'New memorandum',
    noteHeadingPlaceholder: 'Please enter the title of your note',
    noteContentPlaceholder: 'Please enter the notes',
    lastEdited: 'Last edited: {0}',
    create: 'Created: {0}',
    focusSaveHint: 'Losing focus is automatically saved'
  },
  calendar: {
    calendar: 'calendar',
    calendarTips: 'Calendar - Some translations are not supported',
    tool: 'tool',
    howManyDaysWeek: 'Day {0} Week {1}',
    Sunday: 'Sunday',
    Monday: 'Monday',
    Tuesday: 'Tuesday',
    Wednesday: 'Wednesday',
    Thursday: 'Thursday',
    Friday: 'Friday',
    Saturday: 'Saturday',
    yearMonth: ({ values }: { values: { 0: number; 1: number } }) =>
      `${formatMonth(values[1])} ${values[0]}`,
    naturalDayIntervalCalculation: 'Natural day interval calculation:',
    startTime: 'Start time',
    endTime: 'End time',
    differenceDays: 'Difference days',
    day: 'day',
    reset: 'reset',
    workingDayIntervalCalculation: 'Working day interval calculation:',
    differ: 'Differ',
    workingDays: 'working days',
    dateAdditionSubtractionCalculation: 'Date addition and subtraction calculation:',
    intervalDays: 'Interval days',
    days: 'days',
    result: 'Result',
    selectedDateUpdatedHoliday:
      'The current holiday is automatically updated after the date is selected',
    month: 'month',
    beenDays1: `It's been`,
    beenDays2: 'days',
    daysToGo1: '',
    daysToGo2: 'days to go',
    dateDifferenceCalculation: 'Date difference calculation',
    festivalBook: 'Festival book',
    ymd: ({ values }: { values: { 0: number; 1: number; 2: number } }) =>
      `${formatMonth(values[1])} ${values[2]}, ${values[0]}`,
    today: 'today',
    Mon: 'Monday',
    Tues: 'Tuesday',
    Wed: 'Wednesday',
    Thurs: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
    Sun: 'Sunday',
    workday: 'work',
    dayOff: 'rest',
    year: 'Year',
    howYearManyDaysWeek: 'Week {0}, day {1} of the year',
    animals: 'animals',
    constellation: 'constellation',
    capricorn: 'Capricornus',
    aquarius: 'Aquarius',
    pisces: 'Pisces',
    aries: 'Aries',
    taurus: 'Taurus',
    gemini: 'Gemini',
    cancer: 'Cancer',
    leo: 'Leo',
    virgo: 'Virgo',
    libra: 'Libra',
    scorpio: 'Scorpio',
    sagittarius: 'Sagittarius',
    festival: 'festival',
    suitable: 'suitable',
    avoid: 'avoid',
    phaseMoon: 'moon',
    phaseMoonMonth: ' Month',
    phenology: 'phenology',
    euphoricOrientation: 'Happy God location:',
    yangGuiGodLocation: 'Yanggui God location:',
    yinGuiGodLocation: 'Yingui God location:',
    locationBlessingGod: 'Location of Blessing God:',
    locationGodWealth: 'Location of the God of Wealth:',
    hasBeenDaysSince: 'It has been {1} days since {0}',
    hasBeenDaysSinceUntil: 'There are {1} days until {0}'
  }
}
