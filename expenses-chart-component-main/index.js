const chart = document.querySelector('.bar-chart')
const getBars = document.querySelectorAll('.bars')



let day = new Date().getDay()


async function displayChart() {
    const res = await fetch ('data.json');
    const data = await res.json();
    getCharts(data);
    console.log(data);
}

displayChart();

function createElement(elements, hasClass) {
    const getElem = document.createElement(elements);
    if(hasClass) {
        getElem.className = hasClass;
    }
    return getElem;
}

function barChart(day,amount) {
    const graph = createElement( 'div','graph');
    const ve = createElement('span', 'ww')
    ve.textContent = amount
    const bars = createElement('div', 'bars');
    bars.style.height = `${amount * 3}px`;
    
    const days = document.createElement('h3');
    days.textContent = day

    graph.appendChild(ve)
    graph.appendChild(bars)
    graph.appendChild(days)

    return graph;
}


function getCharts(display) {
    display.forEach(item => {
        let barchart = barChart(item.day, item.amount)
        chart.appendChild(barchart)
    })

    // baby.forEach(babys => babys.addEventListener('mouseover', () => {
    //     showAmount(e)
    //     console.log(done)
    // }))
}

// function showAmount(target) {
//     let amount = document.createElement('span')
//     let amounts = target.style.height

//     amount.innerText = amounts
//     target.appendChild(amount)
//     amount.appendChild(amounts)
// }
function showAmount() {
    const ww = document.querySelectorAll('.ww')
    ww.style.display = 'block';
}
// baby.addEventlistener('mouseover', showAmount())

getBars.forEach(babys => babys.addEventListener('mouseover', showAmount))


