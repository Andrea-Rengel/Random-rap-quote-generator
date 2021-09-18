const button = document.querySelector('.button');
const quoteDiv = document.querySelector('.quotes');
const rapperDiv = document.querySelector('.rapper');

const quotes = [
    {
        quote: '"It\'s beauty in the struggle, ugliness in the success."',
        rapper:  '-J. Cole'
    },    
    {
        quote: '"Hard to find what the truth is, but the truth was that the truth suck."',
        rapper: '-Kanye West'
    },
    {
        quote: '"If I ever loved you I\'ll always love you, that\'s how I was raised."',
        rapper: '-Drake'
    },
    {
        quote: '"For you I always had an admiration. We lost touch but you never left my imagination."',
        rapper: '-J. Cole'
    },
    {
        quote: '"My only adversary was my own mind."',
        rapper: '-J. Cole'
    },
    {
        quote: '"It is what it is. Trust me, you get what you give."',
        rapper: '-Drake'
    },
    {
        quote: '"You don\'t get another chance, life is not Nintendo game."',
        rapper: '-Eminem'
    },
    {
        quote: '"Take what you need from the valley of the hope, where even if you drown you\'ll be floating higher up."',
        rapper: '-Kid Cudi'
    }
]

button.addEventListener('click', () => {
    let logic = Math.floor(Math.random() * quotes.length);
    quoteDiv.innerHTML = quotes[logic].quote;
    rapperDiv.innerHTML = quotes[logic].rapper;
}) 

