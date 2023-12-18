const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.listen(port, () => {
  console.log(`MCQ app listening at http://localhost:${port}`);
});

// Add more routes and logic here

const questions = [
  {
      id: 1,
      question: "Choose the odd one out from the following:",
      options: ["Bombay Plan - 1944", "Second Plan - 1956", "Third Plan - 1962", "Planning Commission - 1950"],
      answer: "Third Plan - 1962"
  },
  {
      id: 2,
      question: "The second five-year plan was drafted under the leadership of which of the following personalities?",
      options: ["K. N. Raj", "M. Visvesvaraya", "P. C. Mahalanobis", "Gadgil"],
      answer: "P. C. Mahalanobis"
  },
  {
      id: 3,
      question: "In which year was Sheikh Mujib assassinated?",
      options: ["September 1975", "August 1977", "January 1975", "August 1975"],
      answer: "August 1975"
  },
  {
      id: 4,
      question: "Which of the following events was not contemporaneous to the Cold War period?",
      options: ["Beginning of decolonisation", "The emergence of Communist China", "Establishment of the United Nations", "Establishment of the League of Nations"],
      answer: "Establishment of the League of Nations"
  },
  {
      id: 5,
      question: "Name the party who won the first National elections in India.",
      options: ["Peoples Democratic Front", "It was coalition government", "Communist Party of India", "Indian National Congress"],
      answer: "Indian National Congress"
  },
  {
      id: 6,
      question: "Assertion (A): The elections of 2004 witnessed partial revival of Congress party. Reason (R): It could increase its seats for the first time since 1991.",
      options: ["Both A and R are true and R is not the correct explanation of A", "Both A and R are true and R is the correct explanation of A", "A is false, but R is true", "A is true but R is false"],
      answer: "Both A and R are true and R is the correct explanation of A"
  },
  {
      id: 7,
      question: "Which of the following statements about a multi-party system are true?",
      options: ["Only (iii)", "(i), (ii), (iii), (iv)", "(iii) and (iv)", "Only (i)"],
      answer: "(i), (ii), (iii), (iv)"
  },
  {
      id: 8,
      question: "Assertion (A): The period between 1989 and 2014 was the era of coalition governments in India. Reason (R): No single party gained a majority in the period between 1989 and 2014.",
      options: ["Both A and R are true and R is not the correct explanation of A", "Both A and R are true and R is the correct explanation of A", "A is false, but R is true", "A is true but R is false"],
      answer: "Both A and R are true and R is the correct explanation of A"
  },
  {
      id: 9,
      question: "The______election was made into an referendum on the National Emergency.",
      options: ["1975", "1999", "1980", "1977"],
      answer: "1977"
  },
  {
      id: 10,
      question: "Arrange the following in chronological order: (i) Indo-China War (ii) General Musharraf got himself elected as the President (iii) Sri Lanka got independence (iv) LTTE was vanquished",
      options: ["(iii), (ii), (i), (iv)", "(iii), (i), (ii), (iv)", "(i), (ii), (iii), (iv)", "(i), (iii), (ii), (iv)"],
      answer: "(iii), (i), (ii), (iv)"
  },
  {
      id: 11,
      question: "Which justice declared Indira Gandhi’s elections to be invalid in 1975?",
      options: ["Justice H. J. Kania", "Justice N. V. Ramana", "Justice Ranjan Gogoi", "Justice Jagmohan Lal Sinha"],
      answer: "Justice Jagmohan Lal Sinha"
  },
  {
      id: 12,
      question: "When did the Chinese Revolution take place?",
      options: ["1949", "1951", "1945", "1947"],
      answer: "1949"
  }
];



app.get('/questions', (req, res) => {
  res.json(questions.map(q => ({ id: q.id, question: q.question, options: q.options, answer:q.answer })));
});

app.post('/answer', (req, res) => {
  const { questionId, answer } = req.body;
  const question = questions.find(q => q.id === questionId);
  const isCorrect = question && question.answer === answer;
  res.json({ correct: isCorrect });
});


app.get('/index.html', (req, res) => {
   
    res.sendFile(__dirname + '/index.html');

  });


  app.get('/script.js', (req, res) => {
   
    res.sendFile(__dirname + '/script.js');

  });


  app.get('/backgroundimage.jpg', (req, res) => {
    
    res.sendFile(__dirname + '/backgroundimage.jpg');

  });

  app.get('/bg2.jpg', (req, res) => {
   
    res.sendFile(__dirname + '/bg2.jpg');

  });
