document.addEventListener('DOMContentLoaded', function() {
    let score = 0;
    let questions = [];
    let currentQuestionIndex = 0;

    fetchQuestions();

    document.getElementById('submit-answer').addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            checkAnswer(selectedOption.value, questions[currentQuestionIndex]);
            document.getElementById('submit-answer').disabled = true;
            document.getElementById('next-question').style.display = 'inline';
        } else {s
            alert('Please select an option.');
        }
    });

    document.getElementById('next-question').addEventListener('click', function() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion(questions[currentQuestionIndex]);
            document.getElementById('submit-answer').disabled = false;
            this.style.display = 'none';
        }
        else {
            document.getElementById('question-container').innerText = 'Quiz completed!';
            document.getElementById('options-container').innerHTML = '';
            this.style.display = 'none';
            document.getElementById('result-container').innerHTML = `<p>Your score: ${score} out of ${questions.length}</p>`;
            document.getElementById('submit-answer').style.display = 'none';
            document.getElementById('next-question').style.display = 'none';
        }
    });

    function fetchQuestions() {
        fetch('/questions')
            .then(response => response.json())
            .then(data => {
                questions = data;
                displayQuestion(questions[currentQuestionIndex]);
            })
            .catch(error => console.error('Error fetching questions:', error));
    }

    function displayQuestion(question) {
        document.getElementById('question-container').innerText = question.question;
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionId = `option${index}`;
            const optionElement = `<div class="option-container">
                                       <input type="radio" id="${optionId}" name="option" value="${option}">
                                       <label for="${optionId}">${option}</label>
                                   </div>`;
            optionsContainer.innerHTML += optionElement;
        });
    }

    function checkAnswer(selectedAnswer, question) {
        const correctAnswer = question.answer;
        const options = document.getElementsByName('option');

        if (selectedAnswer === correctAnswer) {
            score++;
        }

        options.forEach(option => {
            const label = document.querySelector(`label[for="${option.id}"]`);
            if (option.value === correctAnswer) {
                label.style.backgroundColor = 'green';
            } else if (option.value === selectedAnswer && option.value != correctAnswer) {
                label.style.backgroundColor = 'red';
            } else {
                label.style.backgroundColor = ''; // reset other options
            }
        });
    }
});
