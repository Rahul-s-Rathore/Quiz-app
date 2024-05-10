let questions = [
  {
    que: "Which of the following is a markup language ",
    a: "HTML",
    b: "CSS",
    c: "js",
    "": "None of the above",
    correct: "a",
  },

  {
    que: "What year was javascript launched",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "d",
  },

  {
    que: "What does CSS stand for",
    a: "Hypertext markup language",
    b: "Cascading style sheet",
    c: "jason object notation",
    d: "none of the above",
    correct: "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
let opt = document.querySelectorAll(".opt");
let questionbox = document.getElementById("questionbox");
function loadQuestion() {

    if(index==total){
        endQuiz();
    }
    reset();
  let data = questions[index];
  questionbox.innerText = data.que;
  opt[0].nextElementSibling.innerText = data.a;
  opt[1].nextElementSibling.innerText = data.b;
  opt[2].nextElementSibling.innerText = data.c;
  opt[3].nextElementSibling.innerText = data.d;
}

function submitQuiz() {
  let data = questions[index];

  let ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }

  index++;
  loadQuestion();
}

function getAnswer() {
  let answer;
  opt.forEach((inputs) => {
    if (inputs.checked) {
      answer = inputs.value;
    }
    else{
        return false;
    }
  });
  return answer;
}
function reset(){
    opt.forEach((inputs)=>{
        inputs.checked = false
    })
}

function endQuiz(){
    if(right!=total){

        document.getElementById("main").innerHTML = `<div class="text-4xl font-bold text-center"><h1>Thanks for playing quiz</h1>
        <h2 class="text-4xl font-bold text-center">You Score ${right}/${total}
        </div>
        `
    }
    else{
        document.getElementById("main").innerHTML = `<div class="text-4xl font-bold text-center"><h1 >Thanks for playing quiz</h1>
        <h2 class="text-4xl font-bold text-center">Congratulation You Score ${right}/${total}
        </div>
        `
    }
}

loadQuestion();
