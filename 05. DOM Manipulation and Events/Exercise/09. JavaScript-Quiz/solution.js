function solve() {

  const correctAnswers = [
    'onclick',
    'JSON.stringify()',
    'A programming API for HTML and XML documents'
  ];

  let rightAnswersCount = 0;
  let currentQuestionIndex = 0;


  const questionSections = document.querySelectorAll('section');
  const resultsElement = document.getElementById('results');

  document.getElementById('quizzie').addEventListener('click', (event) => {

    const clickedAnswer = event.target.closest('.quiz-answer');
    if (!clickedAnswer) {
      return;
    }

    const answerText = clickedAnswer.querySelector('.answer-text').textContent;

    if (answerText === correctAnswers[currentQuestionIndex]) {
      rightAnswersCount++;
    }

    questionSections[currentQuestionIndex].style.display = 'none';
    
    currentQuestionIndex++;

    if (currentQuestionIndex < questionSections.length) {
      questionSections[currentQuestionIndex].style.display = 'block';
    } else {

      showFinalResults();
    }
  });

  function showFinalResults() {
    resultsElement.style.display = 'block';
    const resultH1 = resultsElement.querySelector('h1');
    
    if (rightAnswersCount === 3) {
      resultH1.textContent = "You are recognized as top JavaScript fan!";
    } else {
      resultH1.textContent = `You have ${rightAnswersCount} right answers`;
    }
  }
}