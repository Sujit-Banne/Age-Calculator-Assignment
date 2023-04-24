const form = document.getElementById('form')
form.addEventListener('submit', ageCal)

function ageCal(e) {

    e.preventDefault()//prevent refresh of page

    const dateInput = document.getElementById('date').value
    const monthInput = document.getElementById('month').value
    const yearInput = document.getElementById('year').value
    const result = document.getElementById('result')

    // error message
    let error = ''
    if (!monthInput || isNaN(parseInt(monthInput))) {
        if (error !== '') error += ' Field, '
        error += "Month"
    }
    if (!dateInput || isNaN(parseInt(dateInput))) {
        if (error !== '') error += ' Field, '
        error += "Date"
    }
    if (!yearInput || isNaN(parseInt(yearInput))) {
        if (error !== '') error += ' Field, '
        error += "Year"
    }
    if (error !== '') {
        result.innerHTML = `Please input valid date for ${error} fields `
        return
    }

    let date = new Date()

    let newdateInput = date.getDate()
    let newmonthInput = 1 + date.getMonth()
    let newyearInput = date.getFullYear()

    //array of numbers of days in each months
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (dateInput > newdateInput) {
        newdateInput += month[newmonthInput - 1]
        newmonthInput -= 1
    }
    if (monthInput > newmonthInput) {
        newmonthInput += 12
        newyearInput -= 1
    }

    let newDate = newdateInput - dateInput
    let newMonth = newmonthInput - monthInput
    let newYear = newyearInput - yearInput

    result.innerHTML = `Your Age is ${newYear} Years ${newMonth} Months ${newDate} Days`
}


