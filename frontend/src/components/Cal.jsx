import React, { useState, useEffect } from 'react';
import './Cal.css'; // Ensure this file exists and contains relevant styles

const Cal = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds time limit
  const [gameOver, setGameOver] = useState(false);
  const [mathTip, setMathTip] = useState(''); // State to hold a math tip

  // Array of math tips
  const mathTips = [
    'Tip: Take 43 + 34 Split the second number into tens and unit places. 34 = 30 + 4 Finish the ten’s addition. 43 + 30 = 73 Finally, add the remaining unit place digit. 73 + 4 = 77.',
    'Tip: Consider two numbers say 1000 and 676 Subtract 1 from both the numbers; we get 999 and 675 Then subtract 675 from 999, we get 324 So, 1000 – 676 = 324.',
    'Tip: Let’s try the numbers 24 and 16 First split the number 24, which gives 4 x 6 Then multiply 6 with 16, we get 96 Finally multiply the number, 96 x 4 = 384 So, the multiplication of two numbers 24 x 16 gives the solution 384.',
    
  ];

  // Generate a new calculation problem with random operation
  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*', '/'];
    const randomOperation = operations[Math.floor(Math.random() * operations.length)];

    let questionText = '';
    let correctAnswer = 0;

    switch (randomOperation) {
      case '+':
        questionText = `${num1} + ${num2}`;
        correctAnswer = num1 + num2;
        break;
      case '-':
        questionText = `${num1} - ${num2}`;
        correctAnswer = num1 - num2;
        break;
      case '*':
        questionText = `${num1} * ${num2}`;
        correctAnswer = num1 * num2;
        break;
      case '/':
        // Ensure division yields a whole number
        const dividend = num1 * num2;
        questionText = `${dividend} / ${num1}`;
        correctAnswer = dividend / num1;
        break;
      default:
        break;
    }

    setQuestion(questionText);
    return correctAnswer;
  };

  // Handle answer submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = eval(question.replace('/', '* 1.0 /')); // Ensure correct division evaluation
    if (parseFloat(answer) === correctAnswer) {
      setCorrectCount(correctCount + 1);
      generateQuestion(); // Generate a new question
    }
    setAnswer(''); // Clear input field
  };

  // Set up the timer
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          setGameOver(true);
          setMathTip(mathTips[Math.floor(Math.random() * mathTips.length)]); // Set random math tip
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  // Start the game with an initial question
  useEffect(() => {
    if (!gameOver) {
      generateQuestion();
    }
  }, [gameOver]);

  return (
    <div className="cal-game">
      <h1>Calculation Game</h1>
      <div className="game-content">
        <h2>Time Left: {timeLeft}s</h2>
        {gameOver ? (
          <div>
            <h2>Game Over!</h2>
            <p>Your score: {correctCount}</p>
            <p>{mathTip}</p> {/* Display the random math tip */}
          </div>
        ) : (
          <div>
            <h2>Solve: {question}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
              />
              <button type="submit">Submit Answer</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cal;
