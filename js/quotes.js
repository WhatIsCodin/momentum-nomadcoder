const quotes = [
    {
        quote:"Life is C (Choice) between B (Birth) and D (Death).",
        author:"Jean-Paul Sartre",
    },
    {
        quote:"Know thyself.",
        author:"Socrates"
    },
    {
        quote:"실수를 부끄러워하지 마라, 실수를 부끄러워하면 그것이 죄가 된다.",
        author:"공자"
    },
    {
        quote:"스스로 존경하면 다른 사람들도 그대를 존경할 것이니라.",
        author:"공자"
    },
    {
        quote:"당신의 어깨를 쭉 펴고 일어나라.",
        author:"조던 피터슨"
    },
    {
        quote:"당신 자신을 도우는 데 책임이 있는 사람으로 취급하라.",
        author:"조던 피터슨"
    },
    {
        quote:"당신으로부터 최선을 원하는 사람들과 친구를 사귀라.",
        author:"조던 피터슨"
    },
    {
        quote:"오늘의 다른 사람이 아닌, 어제의 당신 자신과 지금의 당신을 비교하라.",
        author:"조던 피터슨"
    },
    {
        quote:"당신의 자녀가 당신이 그들을 싫어지게 만드는 일을 하지 않도록 하라.",
        author:"조던 피터슨"
    },
    {
        quote:"세상을 비판하기 전에 당신의 집을 완벽하게 만들라.",
        author:"조던 피터슨"    
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;