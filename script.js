document.addEventListener('DOMContentLoaded', function() {
  const board = document.getElementById('game-board');
  const playerTurnDisplay = document.getElementById('player-turn');
  let currentPlayer = 1;

  // Create the 7x7 grid
  for (let i = 0; i < 49; i++) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.dataset.index = i;
    board.appendChild(circle);
  }

  // Place monsters on the board
  const monsters = ['green', 'yellow', 'blue', 'pink', 'orange', 'red', 'purple'];
  monsters.forEach((color, index) => {
    const monster = document.createElement('div');
    monster.className = `monster ${color}`;
    monster.dataset.index = index; // Assign index to each monster
    monster.dataset.color = color; // Store color in dataset for later use
    board.children[index].appendChild(monster); // Place monster in the corresponding circle
  });

  // Drag and Drop Handlers
  board.addEventListener('dragstart', handleDragStart, false);
  board.addEventListener('dragover', handleDragOver, false);
  board.addEventListener('drop', handleDrop, false);
  board.addEventListener('dragend', handleDragEnd, false);

  function handleDragStart(e) {
    // Only allow drag if the piece belongs to the current player
    if (e.target.className.includes('monster')) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', e.target.outerHTML);
      e.dataTransfer.setData('application/index', e.target.dataset.index);
    }
  }

  function handleDragOver(e) {
    e.preventDefault(); // Necessary to allow dropping
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  function handleDrop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/html');
    const originIndex = parseInt(e.dataTransfer.getData('application/index'), 10);
    const targetIndex = parseInt(e.target.dataset.index, 10);
    if (isValidMove(originIndex, targetIndex)) {
      e.target.innerHTML = data; // Place the dragged monster in the target circle
      board.children[originIndex].innerHTML = ''; // Clear the original circle
      switchTurns(); // Switch turns after a valid move
    }
    return false;
  }

  function handleDragEnd(e) {
    // Update the board state after the drag-and-drop operation
    updateBoardState();
  }

  function updateBoardState() {
    // Loop over the board to update each monster's index
    Array.from(board.children).forEach((circle, index) => {
      if (circle.children.length > 0) {
        circle.children[0].dataset.index = index;
      }
    });
  }

  function isValidMove(originIndex, targetIndex) {
    // Calculate row and column for the origin and target positions
    const originRow = Math.floor(originIndex / 7);
    const originCol = originIndex % 7;
    const targetRow = Math.floor(targetIndex / 7);
    const targetCol = targetIndex % 7;

    // Check if the target spot is one space away horizontally or vertically
    return (
      (Math.abs(originRow - targetRow) === 1 && originCol === targetCol) ||
      (Math.abs(originCol - targetCol) === 1 && originRow === targetRow)
    );
  }

  function switchTurns() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    playerTurnDisplay.textContent = `Player ${currentPlayer}'s turn`;
  }

  // Initialize the player's turn display
  playerTurnDisplay.textContent = `Player ${currentPlayer}'s turn`;
});
