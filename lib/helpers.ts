import { format, eachDayOfInterval, addMonths } from 'date-fns'

// Creates an array of days
export function getNext2Months() {
    const days = eachDayOfInterval({
        start: new Date(),
        end: addMonths(new Date(), 2),
    })
    const result = days.map((d) => {
        return format(d, 'yyyy-MM-dd')
    })
    return result
}

// Creates an array of weekends from now to x days
export function getSaturdaysAndSundays(startDate: any, days: number) {
    const weekends = []
    const currentDate = new Date(startDate)

    while (weekends.length < days) {
        if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
            weekends.push(new Date(currentDate))
        }
        currentDate.setDate(currentDate.getDate() + 1)
    }

    return weekends
}
