const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')

/**
 * 
 * @param {Date} date 
 */
function formatTime(date) {
    const hours12 = date.getHours() % 12 || 12 ;
    const minutes = date.getMinutes();
    const seconds =date.getSeconds();
    const isAm = date.getHours() < 12 ;


    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2,"0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * 
 * @param {Date} date 
 */
function formatDate(date) {
    const days = ["Sunday", "Monday" , "Tuesday" , "Wednesday" , " Thursday" , "Friday" ,"Saturday"]
    const months = ["January" , "February", "March" , "April" ,"May" ,"June" ,"July", "August","September","October", "November","December"]
    return `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} `
    
}
setInterval(() =>
{
    const now = new Date();
    timeElement.textContent=formatTime(now);
    dateElement.textContent=formatDate(now);
},200);

////////////////////////////////
const  questions=[
    {
                
        'que':'which of the following is markup language',
        'a':'HTML',
        'b':'Javascript',
        'c':'PHP',
        'd':'XML',
        'correct':'a'
    },
    {
        'que':'what year was javascript launched',
        'a':'1989',
        'b':'1995',
        'c':'2022',
        'd':'2000',
        'correct':'b'
    },
    {
        'que':'what does css stand for?',
        'a':'cascading style sheet',
        'b':'cursor cascading comment',
        'c':'cursor style sharp langauge',
        'd':'none',
        'correct':'a'
    },
    {
        'que':'Which type of JavaScript language is___?',
        'a':'object oriented',
        'b':'Object-Based',
        'c':'Assembly langauge',
        'd':'none',
        'correct':'b'
    },
    {
        'que':'The "function" and " var" are known as:?',
        'a':'keywords',
        'b':'datatypes',
        'c':'Declaration statements',
        'd':'prototypes',
        'correct':'c'
    },
    {
        'que':'Which of the following type of a variable is volatile?',
        'a':'volatile variable',
        'b':'mutable variable',
        'c':'Dynamic variable',
        'd':'none',
        'correct':'b'
    },
    {
        'que':'Which of the following option is used as hexadecimal literal beginning?',
        'a':'0x',
        'b':'0X',
        'c':'00XX',
        'd':'Both A and B',
        'correct':'d'
    },
    {
        'que':' In the JavaScript, which one of the following is not considered as an error:?',
        'a':'Syntax error',
        'b':'Devision by error',
        'c':'Missing of Brackets',
        'd':'Missing of Semicolon',
        'correct':'c'
    },
    {
        'que':'Which of the following number object function returns the value of the number?',
        'a':'toString()',
        'b':'valueOf()',
        'c':'toLocaleString()',
        'd':'none',
        'correct':'b'
    },
    {
        'que':'In JavaScript, what will be used for calling the function definition expression:?',
        'a':'Function prototype',
        'b':'Function calling',
        'c':'Function declaration',
        'd':'Function literal',
        'correct':'b'
    },
] 
let index = 0;
let total =questions.length;
let right = 0;
wrong =0;
const quebox =document.getElementById("quebox");
const optionsInputs = document.querySelectorAll('.options');
const loadQuestion =()=>{
    if (index === total) {
        return endQuiz()
    }
    reset();
    const data = questions[index]
    console.log(data)
    quebox.innerText=`${index+1}) ${data.que}`;
    optionsInputs[0].nextElementSibling.innerText=data.a;
    optionsInputs[1].nextElementSibling.innerText=data.b;
    optionsInputs[2].nextElementSibling.innerText=data.c;
    optionsInputs[3].nextElementSibling.innerText=data.d;
   

}
const submitQuiz = ()=>{
    const data = questions[index];
    const ans = getAnswer();
    if (ans===data.correct) {
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
   return;
}


const getAnswer=()=>{
let answer;
    optionsInputs.forEach(
        (input)=>{
            if (input.checked) {
               answer=input.value;
               
            }
        }
    )
    return answer;
}

const reset =()=>{
    optionsInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=
    `
    <div style="text-align:center">
    <h3>Your response has been submitted</h3>
    <button onclick="result()" style="width: 97%; margin-left: 5px; padding: 3px;background-color: #3498db;font-size: 20px; color: white; border: none; border-radius: 5px;">check result</button>

   
    </div>
    `
}

const result = ()=>{
    document.getElementById("box").innerHTML=`
    <h2 style="text-align:center;color:blue">RESULT</h2>
    <h2 style="text-align:center;">Total Questions = ${total}</h2>
    <h3 style="text-align:center">Your score is =  ${right} </h3>;
    <button onclick="back()" style="width: 97%;
    margin-left: 5px;padding: 3px;background-color: #3498db;font-size: 20px;color: white;border: none;border-radius: 5px;">Back</button>
    `
}
  const back =()=>{
return loadQuestion();
  }
  
 loadQuestion();
 