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
    const getBars = document.querySelectorAll('.bars')
    getBars.forEach(element =>{
        element.addEventListener('mouseover', () => {
            show(element);
        })
        element.addEventListener('mouseout', () => {
            element.previousSibling.style.display = 'none';
        })
    })

}
// function show(target) {
//     // const ww = document.querySelectorAll('.ww');
//     const def = createElement('span','we')
//     let val = target.style.height
//     def.innerText = val
//     target.appendChild(def)
//             // ww.style.display = 'block';
// }

function show(element) {
    element.previousSibling.style.display = 'block';
}
