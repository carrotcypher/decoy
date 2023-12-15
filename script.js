$(document).ready(function() {
    const $board = $('#game-board');
    const $playerTurnDisplay = $('#player-turn');
    const $guessButton = $('#guess-button');
    let currentPlayer = 1;
    let playerColors = { 1: null, 2: null };
    let gameStarted = false;
    
     $guessButton.on('click', function() {
        if (!gameStarted) return;

        const opponentPlayer = currentPlayer === 1 ? 2 : 1;
        const guess = prompt(`Player ${currentPlayer}, guess Player ${opponentPlayer}'s color:`);

        if (guess.toLowerCase() === playerColors[opponentPlayer].toLowerCase()) {
            alert(`Correct! Player ${currentPlayer} wins!`);
            gameStarted = false;
            end_game();
        } else {
            alert(`Incorrect! Player ${opponentPlayer} wins!`);
            gameStarted = false;
            end_game();
        }

        updateTurnDisplay();
    });
    
    
    function end_game() {
        $playerTurnDisplay.text('Reload to play again.');
        location.reload(); 
        return false;
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function isFarEnoughFromHome(index) {
        const homeRow = Math.floor(homeIndex / 7);
        const homeCol = homeIndex % 7;
        const cellRow = Math.floor(index / 7);
        const cellCol = index % 7;

        return Math.abs(homeRow - cellRow) > 2 || Math.abs(homeCol - cellCol) > 2;
    }

    function updateTurnDisplay() {
        $playerTurnDisplay.text(gameStarted ? `Player ${currentPlayer}'s turn` : 'Choose your colors');
    }

    function switchTurns() {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        updateTurnDisplay();
    }

    function checkForWin(color, targetIndex) {
        if ($board.children('.circle').eq(targetIndex).hasClass('home')) {
            alert(`Player ${currentPlayer} wins!`);
            gameStarted = false;
            end_game();

            updateTurnDisplay();
            
        
        }
    }

    for (let i = 0; i < 49; i++) {
        $('<div></div>', {
            class: 'circle',
            'data-index': i
        }).appendTo($board);
    }

    const homeIndex = Math.floor(Math.random() * 49);
    $board.children('.circle').eq(homeIndex).addClass('home');

    const cellIndices = Array.from({ length: 49 }, (_, index) => index).filter(index => index !== homeIndex);
    shuffle(cellIndices);
    const validCellIndices = cellIndices.filter(isFarEnoughFromHome);

    const colors = ['green', 'yellow', 'blue', 'pink', 'orange', 'red', 'purple'];
    $.each(colors, function(i, color) {
        const $monster = $('<div></div>', {
            class: `monster ${color}`,
            draggable: true,
            'data-color': color
        });

        $monster.appendTo($board.children('.circle').eq(validCellIndices[i]));

        $monster.on('dragstart', function(e) {
            if (gameStarted) {
                e.originalEvent.dataTransfer.setData('text/plain', $(this).parent().data('index'));
            } else {
                e.preventDefault();
            }
        });

        $monster.on('dragend', function(e) {
            e.preventDefault();
        });
    });

    $('.circle').on('dragover', function(e) {
        e.preventDefault();
    }).on('drop', function(e) {
        const originIndex = parseInt(e.originalEvent.dataTransfer.getData('text/plain'));
        const targetIndex = $(this).data('index');

        if (isValidMove(originIndex, targetIndex)) {
            const $originCell = $board.children('.circle').eq(originIndex);
            const $targetCell = $(this);
            const color = $originCell.children().first().data('color');

            $targetCell.append($originCell.children().first());
            checkForWin(color, targetIndex);
            switchTurns();
        }
    });

    function isValidMove(originIndex, targetIndex) {
        if ($board.children('.circle').eq(targetIndex).children().length > 0) {
            return false;
        }

        const originRow = Math.floor(originIndex / 7);
        const originCol = originIndex % 7;
        const targetRow = Math.floor(targetIndex / 7);
        const targetCol = targetIndex % 7;

        if (Math.abs(originIndex - targetIndex) === 1 || Math.abs(originIndex - targetIndex) === 7) {
            return true;
        }

        if (Math.abs(originRow - targetRow) === 2 || Math.abs(originCol - targetCol) === 2) {
            const middleIndex = (originIndex + targetIndex) / 2;
            return $board.children('.circle').eq(middleIndex).children().length === 1;
        }

        if (Math.abs(originRow - targetRow) === 1 && Math.abs(originCol - targetCol) === 1) {
            return true; // Allow one space diagonal movement
        }

        return false;
    }

    // Player color choice logic (example implementation)
    playerColors[1] = prompt("Player 1, please choose a color:"); // Example: Player 1 chooses green
    playerColors[2] = prompt("Player 2, please choose a color:");  // Example: Player 2 chooses blue
    gameStarted = true;
    updateTurnDisplay();


});
