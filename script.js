const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const biscuitImg = document.querySelector('.screen1 img');
const openAgainBtn = document.querySelector('.screen2 button');
const luckySentence = document.querySelector('.screen2 h3');

let randomNum;

const list = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "Siga os bons e aprenda com eles.",
]

/* Events */
function handleMouseOverImage() {
    biscuitImg.classList.toggle('tremor');
}

function handleImageClick() {
    randomNum = Math.round((Math.random() * 10));

    screen1.classList.add('hide');
    luckySentence.innerText = list[randomNum];
    screen2.classList.remove('hide');
}

function handleOpenAgain() {
    screen2.classList.add('hide');
    screen1.classList.remove('hide');
}

biscuitImg.addEventListener('mouseover', handleMouseOverImage);
biscuitImg.addEventListener('mouseleave', handleMouseOverImage);
biscuitImg.addEventListener('click', handleImageClick);
openAgainBtn.addEventListener('click', handleOpenAgain);
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleOpenAgain();
    }
});