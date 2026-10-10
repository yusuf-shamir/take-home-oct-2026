/* SAMPLE INPUT */ 
/* PLEASE CHANGE ACCORDINGLY */

const n = 10
const dates = [
    "20th Oct 2052",
    "6th Jun 1933",
    "26th May 1960",
    "20th Sep 1958",
    "16th Mar 2068",
    "25th May 1912",
    "16th Dec 2018",
    "26th Dec 2061",
    "4th Nov 2030",
    "28th Jul 1963"
]

/* SOLUTION */ 

const monthMap = {
    'Jan': 0,
    'Feb': 1,
    'Mar': 2,
    'Apr': 3,
    'May': 4,
    'Jun': 5,
    'Jul': 6,
    'Aug': 7,
    'Sep': 8,
    'Oct': 9,
    'Nov': 10,
    'Dec': 11
}

const processDay = (rawDay) => {
    return rawDay.slice(0,-2)
}

const processMonth = (rawMonth) => {
    return monthMap[rawMonth]
}

const processDate = (date) => {
    const splitDate = date.split(' ')

    const rawDay = splitDate[0]
    const rawMonth = splitDate[1]
    const rawYear = splitDate[2]

    const processedDay = processDay(rawDay)
    const processedMonth = processMonth(rawMonth)

    const dObj = new Date(rawYear, processedMonth, processedDay)

    const res = [
        dObj.getFullYear(),
        String(dObj.getMonth() + 1).padStart(2, '0'),
        String(dObj.getDate()).padStart(2, '0'),
    ]

    return res.join('-')
}

const preprocessDate = () => {
    return dates.map((date) => processDate(date))
}

console.log(preprocessDate())
