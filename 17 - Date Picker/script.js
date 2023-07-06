const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
const buttonLeft = app.querySelector('header i.ph-caret-left')
const buttonRight = app.querySelector('header i.ph-caret-right')
const year = app.querySelector('header span')
const currentYear = new Date().getFullYear()
const main = app.querySelector('main')
const yearSelect = app.querySelector('#yearSelect')

year.innerHTML = currentYear
main.innerHTML = render()


buttonLeft.addEventListener('click', () => {
    if(main.classList.contains('month')) {
        main.classList.remove('month')
    }
    if(year.innerHTML != (currentYear-100)) {
        year.innerHTML = parseInt(year.innerHTML)-1
        app.querySelector('main').innerHTML = render()
    }
})

buttonRight.addEventListener('click', () => {
    if(main.classList.contains('month')) {
        main.classList.remove('month')
    }
    if(year.innerHTML != (currentYear+100)) {
        year.innerHTML = parseInt(year.innerHTML) + 1
        app.querySelector('main').innerHTML = render()
    }
})

year.addEventListener('click', () => {
    if(main.classList.contains('month')) {
        main.classList.remove('month')
        app.querySelector('main').innerHTML = render()
    }
})

for (let i = (currentYear - 100); i <= (currentYear + 100); i++) {
    const yearSelected = i == year.innerHTML ? 'selected' : ''
    yearSelect.innerHTML += `<option ${yearSelected} value="${i}">${i}</option>`
}

function render() {
    let output = ''
    let thisMonth

    if(year.innerHTML == new Date().getFullYear()) {
        thisMonth = months[new Date().getMonth()]
    }

    for (let month of months) {
        const active = thisMonth == month ? 'active' : ''
        output += `<div class="${active}">${month}</div>`
    }

    return output
}

let divMonths = app.querySelectorAll('main div')

divMonths.forEach(divMonth => {
    divMonth.addEventListener('click', () => {
        main.classList.add('month')
        main.innerHTML = renderWeekNames()
        main.innerHTML += renderMonth(divMonth.innerText)
    })
});

function renderWeekNames() {
    let output = ''
    for (let dayOfWeek of daysOfWeek) {
        output += `<div class='daysOfWeek'> ${dayOfWeek} </div>`
    }
    return output
}

function renderMonth(month) {
    let output = ''
    const date = new Date()
    let thisDay = date.getDate()
    const monthInNumber = months.indexOf((month))
    date.setMonth(monthInNumber)
    const lastDayNumber = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)

    for (let i = 0; i < firstDay.getDay(); i++) {
        output += `<div> ${' '} </div>`          
    }

    for (let i = 1; i <= lastDayNumber; i++) {
        const active = thisDay == i ? 'active' : ''
        output += `<div class="${active}"> ${i} </div>`   
    }
    return output
}