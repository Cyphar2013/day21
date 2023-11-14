const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault()

     
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value,]

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    })

    scrollTo(0, 1)
    result.classList.remove('d-none')

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {c
            clearInterval(timer)
        }else {
        output++;
        }
    }, 10);
});

// Filter Methods 
    const data = [10, 30, 15, 25, 50, 40, 5]

    const DataScores = data.filter((data) => {
        return data > 25;
    })

    console.log(DataScores)

    const products = [
        {name: 'gold star', price: 20},
        {name: 'mushroom', price: 40},
        {name: 'green shells', price: 30},
        {name: 'banana skin', price: 10},
        {name: 'red shells', price: 50},
    ];

    const saleProducts = products.map((products) => {
        if (products.price > 30) {
            return{name: products.name, price: products.price / 2}
        }else {
            return products;
        }
    })
    console.log(saleProducts);

    const players = [
        {name: 'mario', score: 20},
        {name: 'luigi', score: 10},
        {name: 'chun-li', score: 50},
        {name: 'yoshi', score: 30},
        {name: 'shaun', score: 70},
    ]

    players.sort((a,b) => {
        if (a.score > b.score) {
            return-1;
        }else if (b.score > a.score) {
            return 1;
        }else {
            return 0;
        }
    });
    
    players.sort((a,b) => a.score - b.score);

    console.log(players);

    const now = new Date();
    console.log(now);

    console.log('getFullYear:', now.getFullYear());
    console.log('getMonth:', now.getMonth());
    console.log('getDate:', now.getDate());
    console.log('getDay:', now.getDay());
    console.log('getHours:', now.getHours());
    console.log('getMinutes:', now.getMinutes());
    console.log('getSeconds:', now.getSeconds());


    console.log('timestamp:', now.getTime());

    console.log(now.toDateString());
    console.log(now.toTimeString());