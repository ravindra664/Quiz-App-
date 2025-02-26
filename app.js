const questions = [
  {
    que: "What does HTML stand for?",
    a: "Hypertext Machine language.",
    b: "Hypertext Markup Language.",
    c: "Hypertext and links markup language.",
    d: "Hightext machine language",
    correct: "b",
  },
  {
    que: "How is document type initialized in HTML5?",
    a: "</DOCTYPE HTML>",
    b: "</DOCTYPE>",
    c: "<!DOCTYPE HTML>",
    d: "</DOCTYPE html>",
    correct: "c",
  },
  {
    que: "What is the font-size of the h1 heading tag?",
    a: "3.5 em",
    b: "2.17 em",
    c: "1.5 em",
    d: "2rem",
    correct: "d",
  },
  {
    que: "How many heading tags are there in HTML5?",
    a: "2",
    b: "8",
    c: "12",
    d: "6",
    correct: "d",
  },
  {
    que: "Which of the following attributes is used to add a link to any element?",
    a: "Link",
    b: "ref",
    c: "href",
    d: "cref",
    correct: "c",
  },
];

let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");

const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  quesBox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();

  if (ans !== undefined) {
    if (ans === data.correct) {
      right++;
    } else {
      wrong++;
    }
    index++;
    loadQuestion();
  } else {
    alert("Please select an answer before submitting.");
  }
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  <h2>${right}/${total} are correct</h2><br>
  <h3>Thank You! for participate from Ravindra Kumar😊</h3>`;
};

// Initial call
loadQuestion();
