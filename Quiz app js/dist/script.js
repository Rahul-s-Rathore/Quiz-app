const questions=[
    {
        'que':"Which of the following is a markup language ",
        'a':"HTML",
        'b':"CSS",
        'c':"js",
        'd':"None of the above",
        'correct':"a"
    },

    {
        'que': "What year was javascript launched",
        'a': "1996",
        'b':"1995",
        'c':"1994",
        'd': "none of the above",
        'correct': 'd'
    },

    {
        'que': "What does CSS stand for",
        'a': "Hypertext markup language",
        'b':"Cascading style sheet",
        'c':"jason object notation",
        'd': "none of the above",
        'correct': 'b'
    }
]
let index=0;
let total = questions.length;
let right=0,wrong=0;
const quebox = document.getElementById("questionbox");
const opt = document.querySelectorAll(".opt");


const loadQuestion=()=>{
if(index===total){
return endQuiz();
}
    reset();
    const data=questions[index];
    quebox.innerText = `${index+1}) ${data.que}`;
    opt[0].nextElementSibling.innerText = data.a;
    opt[1].nextElementSibling.innerText = data.b;
    opt[2].nextElementSibling.innerText = data.c;
    opt[3].nextElementSibling.innerText = data.d;
}


const submitQuiz=()=>{
    const data=questions[index]
    const ans = getAnswer();
    if(ans==data.correct){
        right++;
    }
    
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    // return;
}

function getAnswer(){
    let answer;
    opt.forEach((inputs)=>{
        
        if(inputs.checked){
            answer= inputs.value;
        }
        
    })
    return answer;
}

const reset = ()=>{
    opt.forEach((inputs)=>{
        
        inputs.checked = false;
    })}
    
    const endQuiz=()=>{
        if(right==total){
            
            document.getElementById("main").innerHTML=`<h3 class="font-bold text-8xl text-center">Thank for playing the quiz</h3>
            <h2 class="font-bold text-4xl"> Congratulation ${right}/${total} are correct </h2>
            `
        }
        else{
            document.getElementById("main").innerHTML=`<h3 class="font-bold text-8xl text-center">Thank for playing the quiz</h3>
            <h2 class="font-bold text-4xl"> ${right}/${total} are correct </h2>
            `
        }
    }
    loadQuestion();