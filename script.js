const quiz = [
   {
      question: " Q1 What is the preferred way for adding a background color in HTML? ",
      a: " <body background='yellow'> ",
      b: " <background>yellow</background> ",
      c: "  < body style= 'background-color:yellow'> ",
      d: "  <background color='yellow'>text<background>",
      ans: "button3"
   },
   {
      question: "Q2 Which of the following JavaScript cannot do?",
      a: "JavaScript can react to events",
      b: "JavaScript can manipulate HTML elements",
      c: "JavaScript can be use to validate data",
      d: " All of the Above",
      ans: "button4"
   },
   {
      question: "Q3 _________ keyword is used to declare variables in javascript.",
      a: "Var",
      b: "Dim",
      c: "String",
      d: " None of the above",
      ans: "button1"

   },
   {
      question: "Q4 Which CSS property can provide to add an effect when changing from one style to another,without using Flash animations or javascript?",
      a: "Associations",
      b: "Transitions",
      c: "Transistor",
      d: " None of the above",
      ans: "button2"
   }
];
const answers = document.querySelectorAll('.answer');
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const showscore=document.querySelector('#showscore');

let count = 0;
let score=0;
function loadQuestion() {
   const questionList = quiz[count];
   question.innerText = questionList.question;
   option1.innerText = questionList.a;
   option2.innerText = questionList.b;
   option3.innerText = questionList.c;
   option4.innerText = questionList.d;

}
loadQuestion();



const getanswer = ()=> {
   let answer_;
   answers.forEach((curAnsElem) => {
      if (curAnsElem.checked) {
         answer_ = curAnsElem.id;
      }
   });
   return answer_;
}

const deSelect=()=>{
   answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}

submit.addEventListener('click', () => {
   const checkedanswer = getanswer();
   console.log(checkedanswer);
   if(checkedanswer === quiz[count].ans){
      score++;
   };

   count++;

   deSelect();
if(count<quiz.length){
   loadQuestion();
}
else{
   showscore.innerHTML=`
   <h3> You Scored ${score}/${quiz.length}🎊🥳</h3>
   <button class="btn" onclick="location.reload()">PLAY AGAIN</button>
   
   `;
   showscore.classList.remove('show');
}
});










