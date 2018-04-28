// const elements = [
//     {
//         id: "years",
//         end: 25
//     },
//     {
//         id: "jobs",
//         end: 3500
//     },
//     {
//         id: "employees",
//         end: 45
//     },
//     {
//         id: "satisfation",
//         end: 100
//     }
// ];

// function animateValue(id, start, end, duration) {
//     let range = end - start;
//     let current = start;
//     let increment = end > start? 1 : -1;
//     let stepTime = Math.abs(Math.floor(duration / range));
//     let obj = document.getElementById(id);
//     let timer = setInterval(function() {
//         current += increment;
//         obj.innerHTML = current;
//         if (current == end) {
//             clearInterval(timer);
//         }
//     }, stepTime);
// }
//
// console.log(animateValue("years", 0, 25, 2000));
// animateValue("jobs", 0, 3500, 2000);
// animateValue("employees", 0, 45, 2000);
// animateValue("satisfaction", 0, 100, 2000);
