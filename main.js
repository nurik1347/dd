


// let phones = [
//     {
//         id: 1,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVT-FSVyJNpO4L0YtonApPvDPnaFVFnlM7qh5-FVHCcw&s',
//         model: 'Iphone 11',
//         title: 'Arzon narxlarda',
//         cost: '300$',
//         old: 'b/u',
//         description: 'Ekran almashgan'
//     },
// ]

// let right = document.querySelector('.right');
// let inp1 = document.querySelector('.inp1');
// let inp2 = document.querySelector('.inp2');
// let inp3 = document.querySelector('.inp3');
// let inp4 = document.querySelector('.inp4');
// let inp5 = document.querySelector('.inp5');
// let inp6 = document.querySelector('.inp6');
// let btn = document.querySelector(".btn");

// btn.addEventListener('click', () => {
//     let newPhone = {
//         id: phones.length + 1,
//         img: inp1.value,
//         model: inp2.value,
//         title: inp3.value,
//         cost: inp4.value,
//         old: inp5.value,
//         description: inp6.value
//     };
//     phones.push(newPhone);
//     renderPhones();
//     console.log(phones);
// });

// let renderPhones = () => {
//     right.innerHTML = '';

//     phones.forEach((phone) => {
//         let card = document.createElement('div');
//         card.innerHTML = `<img src='${phone.img}'/> <h3>${phone.model}</h3> <p>${phone.title}</p> <p>${phone.cost}</p> <p>${phone.old}</p> <p>${phone.description}</p>`;
//         right.appendChild(card);
//     });
// };
// renderPhones(); 


// let phones = [
//     {
//         id: 1,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVT-FSVyJNpO4L0YtonApPvDPnaFVFnlM7qh5-FVHCcw&s',
//         model: 'Iphone 11',
//         title: 'Arzon narxlarda',
//         cost: '300$',
//         old: 'b/u',
//         description: 'Ekran almashgan'
//     },
// ]

// let right = document.querySelector('.right');
// let inp1 = document.querySelector('.inp1');
// let inp2 = document.querySelector('.inp2');
// let inp3 = document.querySelector('.inp3');
// let inp4 = document.querySelector('.inp4');
// let inp5 = document.querySelector('.inp5');
// let inp6 = document.querySelector('.inp6');
// let btn = document.querySelector(".btn");

// btn.addEventListener('click', () => {
//     let newPhone = {
//         id: phones.length + 1,
//         img: inp1.value,
//         model: inp2.value,
//         title: inp3.value,
//         cost: inp4.value,
//         old: inp5.value,
//         description: inp6.value
//     };
//     phones.push(newPhone);
//     renderPhones();
//     console.log(phones);
// });

// let renderPhones = () => {
//     right.innerHTML = '';

//     phones.forEach((phone) => {
//         let card = document.createElement('div');
//         card.innerHTML = `<img src='${phone.img}'/> <h3>${phone.model}</h3> <p>${phone.title}</p> <p>${phone.cost}</p> <p>${phone.old}</p> <p>${phone.description}</p>`;
//         right.appendChild(card);
//     });
// };
// renderPhones();




let phones = [
    {
        id: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVT-FSVyJNpO4L0YtonApPvDPnaFVFnlM7qh5-FVHCcw&s',
        model: 'Iphone 11',
        title: 'Arzon narxlarda',
        cost: '300$',
        old: 'b/u',
        description: 'Ekran almashgan'
    },
]

let right = document.querySelector('.right');
let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let inp3 = document.querySelector('.inp3');
let inp4 = document.querySelector('.inp4');
let inp5 = document.querySelector('.inp5');
let btn = document.querySelector(".btn");

btn.addEventListener('click', () => {

    let newPhone = {

        model: inp1.value,
        title: inp2.value,
        cost: inp3.value,
        old: inp4.value,
        description: inp5.value
    };
    phones.push(newPhone);
    renderPhones();
    console.log(phones);
});

let renderPhones = () => {
    right.innerHTML = '';

    phones.forEach((phones) => {
        let card = document.createElement('div');
        card.innerHTML = `<img src='${phones.img}'/> <h3>${phones.model}</h3> <p>${phones.title}</p> <p>${phones.cost}</p> <p>${phones.old}</p> <p>${phones.description}</p>`;
        right.appendChild(card);
    });
};
renderPhones();





