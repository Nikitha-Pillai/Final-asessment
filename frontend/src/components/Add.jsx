import React, { useState, useEffect, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Add.css'; // Ensure CSS for styling

const ItemType = 'BUTTON';

const DraggableButton = ({ onClick, type, children, color }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { onClick, type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <button 
      ref={drag} 
      onClick={onClick} 
      style={{ 
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: color,
      }}
    >
      {children}
    </button>
  );
};

const Add = () => {
  const navigate = useNavigate(); // Use navigate
  const [position, setPosition] = useState(0); // Stickman position
  const [isLooping, setIsLooping] = useState(false); // Whether loop is active
  const [isConnected, setIsConnected] = useState(false); // Whether buttons are connected
  const [loopTimes, setLoopTimes] = useState(0); // Number of times to move forward
  const [buttonColors, setButtonColors] = useState({ moveForward: '', loop: '' }); // Colors for the buttons
  const [startTime, setStartTime] = useState(null); // Start time for tracking
  const [timeTaken, setTimeTaken] = useState(null); // Time taken to reach the goal post
  const [tipDisplayed, setTipDisplayed] = useState(false); // Display the tip after reaching the goal post
  const [showNextPuzzle, setShowNextPuzzle] = useState(false); // Display the Next Puzzle button

  const loopRef = useRef(0); // Use ref to keep track of loop count
  const positionRef = useRef(0); // Use ref to keep track of stickman's position
  const goalPostPosition = 500; // The target position for the stickman
  const canvasRef = useRef(null);

  const resetPosition = () => {
    setPosition(0);
    positionRef.current = 0;
    setStartTime(null);
    setTipDisplayed(false); // Reset tip when position is reset
  };

  const moveForward = () => {
    if (!startTime) {
      setStartTime(Date.now()); // Set the start time when the stickman first moves
    }
    const newPosition = positionRef.current + 50;

    if (newPosition > goalPostPosition) {
      alert("Invalid move! Stickman went past the goal post.");
      resetPosition();
    } else if (newPosition === goalPostPosition) {
      const endTime = Date.now();
      setTimeTaken(((endTime - startTime) / 1000).toFixed(2)); // Convert to seconds and format to 2 decimal places
      // Calculate and store time taken in seconds
      setPosition(newPosition);
      positionRef.current = newPosition;
      setTipDisplayed(true); // Display the tip when the goal post is reached
      alert("Stickman has reached the goal post!");
      setShowNextPuzzle(true); // Show the Next Puzzle button
      resetPosition();
    } else {
      setPosition(newPosition);
      positionRef.current = newPosition;
    }
  };

  const handleLoop = () => {
    const loopTimes = prompt("Enter the number of times to move forward:");
    const num = parseInt(loopTimes, 10);

    if (isNaN(num) || num <= 0) {
      alert("Please enter a valid number.");
      return;
    }

    setLoopTimes(num);
    loopRef.current = num;
    setIsLooping(true);
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType,
    drop: (item) => {
      if (item.type === 'MOVE_FORWARD') {
        setIsConnected(true);
        setButtonColors({
          moveForward: 'green',
          loop: 'green',
        });
        handleLoop();
      } else {
        alert("This button cannot activate the loop.");
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  useEffect(() => {
    if (isLooping && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const controls = document.querySelector('.controls');
      const moveForwardButton = controls.querySelector('button');
      const loopButton = controls.querySelectorAll('button')[1];

      if (!moveForwardButton || !loopButton) return;

      const startX = moveForwardButton.getBoundingClientRect().right;
      const startY = moveForwardButton.getBoundingClientRect().top + moveForwardButton.offsetHeight / 2;
      const endX = loopButton.getBoundingClientRect().left;
      const endY = loopButton.getBoundingClientRect().top + loopButton.offsetHeight / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(startX - canvas.getBoundingClientRect().left, startY - canvas.getBoundingClientRect().top);
      ctx.lineTo(endX - canvas.getBoundingClientRect().left, endY - canvas.getBoundingClientRect().top);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.stroke();
    } else if (!isLooping && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, [isLooping]);

  useEffect(() => {
    if (isLooping) {
      const interval = setInterval(() => {
        const newPosition = positionRef.current + 50;
  
        if (newPosition > goalPostPosition) {
          alert("Invalid move! Stickman went past the goal post.");
          resetPosition(); // Reset the stickman back to the start if it goes past the block
          clearInterval(interval); // Stop the loop
          setIsLooping(false); // Stop looping after resetting
          setButtonColors({ // Reset button colors after loop
            moveForward: '',
            loop: ''
          });
        } else {
          setPosition(newPosition); // Move stickman forward
          positionRef.current = newPosition; // Update the position ref
  
          // Check if stickman has reached the goal post
          if (newPosition === goalPostPosition) {
            alert("Stickman has reached the goal post!");
            resetPosition(); // Reset position after reaching the block
            clearInterval(interval); // Stop the loop
            setIsLooping(false); // Stop looping after reaching the block
            setButtonColors({ // Reset button colors after loop
              moveForward: '',
              loop: ''
            });
            setShowNextPuzzle(true); // Show the Next Puzzle button
          }
        }
  
        loopRef.current--; // Decrement the loop counter in the ref
        if (loopRef.current <= 0) {
          clearInterval(interval); // Clear interval when loop count is done
          setIsLooping(false); // Stop looping after moves are done
          setIsConnected(false); // Reset the connection state after the loop ends
          setButtonColors({ // Reset button colors after loop
            moveForward: '',
            loop: ''
          });
          setShowNextPuzzle(true); // Show the Next Puzzle button
        }
      }, 500); // 500ms was the previous value, now update it to seconds if necessary
  
      // Clear interval on cleanup to prevent multiple intervals running
      return () => clearInterval(interval);
    }
  }, [isLooping]);

  return (
    <div className="game-container">
      <div className="message">
        Use the loop to reach the goal!
      </div>

      <canvas ref={canvasRef} width="100%" height="200" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}></canvas>

      <div className="canvas">
        <div className="stickman" style={{ left: `${position}px` }}>
          ⚽
        </div>
        <div className="goal-post"></div>
      </div>

      <div ref={drop} className={`controls ${isOver ? 'drop-target' : ''}`}>
        <DraggableButton
          onClick={moveForward}
          type="MOVE_FORWARD"
          color={buttonColors.moveForward}
        >
          Move Forward
        </DraggableButton>
        <DraggableButton
          onClick={handleLoop}
          type="LOOP"
          color={buttonColors.loop}
        >
          Loop
        </DraggableButton>
      </div>

      {showNextPuzzle && (
        <button 
          className="next-puzzle-button"
          onClick={() => navigate('/cal')}
        >
          Next Puzzle
        </button>
      )}
    </div>
  );
};

export default Add;
