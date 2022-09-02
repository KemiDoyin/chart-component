const chart = document.querySelector('.bar-chart')
const baby = document.querySelectorAll('.bar')


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
    const graph = createElement( 'div','width');
    const bars = createElement('div', 'bars');
    bars.style.height = `${amount * 3}px`;
    
    const days = document.createElement('h3');
    days.textContent = day

    graph.appendChild(bars)
    graph.appendChild(days)

    return graph;
}


function getCharts(display) {
    display.forEach(item => {
        let barchart = barChart(item.day, item.amount)
        chart.appendChild(barchart)
    })

    baby.forEach(babys => babys.addEventListener('mouseover', () => {
        // showAmount(e)
        console.log(done)
    }))
}

function showAmount(e) {
    let amounts = e.style.height
     amounts = amounts / 4;
    // baby.innerText = amounts
    info.appendChild(amounts)
}



