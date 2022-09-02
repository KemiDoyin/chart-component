const chart = document.querySelector('.bar-chart')


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
    // if(day === 0){
    //     day = 7
    // }
    chart.forEach(charts => charts.addEventListener('mouseover', (e) => {
        showAmount(e)
    }))
}

function showAmount(info) {
    let amounts = info.style.height
    //  amounts = tar.value
    bar.textContent = amounts
}



