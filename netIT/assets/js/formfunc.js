
// document.getElementById("form").addEventListener('submit', (e) => {
//     e.preventDefault();
//     const fields = {
//         name: document.getElementById("name"),
//         email: document.getElementById("email"),
//         number: document.getElementById("number"),
//         concern: document.getElementById("concern"),
//         }
//         location.href=`https://docs.google.com/forms/d/e/1FAIpQLSeEmjq7d_dB0MJHCZ2KPr3zAKEtJthPY40t0HYZgRDhDVgtEQ/viewform?usp=pp_url&entry.2000261303=${fields.name.value}&entry.1612604332=${fields.email.value}&entry.2127689574=${fields.number.value}&entry.1859540047=${fields.concern.value}`
// })

document.getElementById("carrer-form").addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = {
        name: document.getElementById("name"),
        email: document.getElementById("email"),
        number: document.getElementById("number"),
        // resume: document.getElementById("resume"),
        }
        location.href=`https://docs.google.com/forms/d/e/1FAIpQLSedbqtcu9C4v26h7TmbuD-cBjkPxXbJhAzWjTxJZihCm2o0rQ/viewform?usp=pp_url&entry.1355904667=${fields.name.value}&entry.212488819=${fields.email.value}&entry.77473644=${fields.number.value}`

        // https://docs.google.com/forms/d/e/1FAIpQLSedbqtcu9C4v26h7TmbuD-cBjkPxXbJhAzWjTxJZihCm2o0rQ/viewform?usp=pp_url&entry.1355904667=${feilds.name.value}&entry.212488819=${fields.email.value}&entry.77473644=${fields.number.value}
        // console.log(fields.number.value)
    })