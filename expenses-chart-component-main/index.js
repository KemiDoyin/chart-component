const chart = document.querySelector('bar-chart')
const graphy = document.querySelector('graphy')
// function displayChart() {
//     chart.forEach(()  => {
//     const graph = 
//     `
//     <div class="bar-chart">
//             <div class="amount">${data.amount}</div>
//             <div class="day">${data.day}</div>
//           </div>
//     `
    
//     graphy.innerHTML = graph
//     })
// }
 const play = async ()=> {
    try {
        const res = await fetch ('data.json')
        const data = await res.json()
        // displayChart(data)
        // console.log(data[0].amount)
        console.log(data)
    }
    catch {
        console.log('error')
    }
 }
 play()