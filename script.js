$(document).ready(function() {
    const $board = $('#game-board');
    const $playerTurnDisplay = $('#player-turn');
    const $guessButton = $('#guess-button');
    let currentPlayer = 1;
    let playerColors = { 1: null, 2: null };
    let selectedColor = null;
    let gameStarted = false;
    let isGuessing = false;
    
 
   function showColorChoice(isGuess = false) {
        isGuessing = isGuess;
        $('#color-choice-popup').fadeIn();
        $('#player-turn').text(isGuessing ? `Player ${currentPlayer}, guess Player ${currentPlayer === 1 ? 2 : 1}'s color` : `Player ${currentPlayer}, choose your color`);
        $('.color-choice').removeClass('selected').show();
        $('#popup-msg').text(`Player ${currentPlayer}, choose your color`);

        if (!isGuessing) {
            if (currentPlayer === 2 && playerColors[1]) {
                $('.color-choice[data-color="' + playerColors[1] + '"]').hide();
            }
        }

        selectedColor = null;
    }
    $('.color-choice').click(function() {
        selectedColor = $(this).data('color');
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    
    
    $('#confirm-color').click(function() {
        if (selectedColor) {
            if (isGuessing) {

                const opponentPlayer = currentPlayer === 1 ? 2 : 1;
                let message = "Nobody wins! Game over.";
                if (selectedColor === playerColors[opponentPlayer]) {
                    message = `Player ${currentPlayer} wins! Player ${opponentPlayer}'s color was ${playerColors[opponentPlayer]}`;
                } 

                $('#color-choice-popup').fadeOut();
                $('#win-message').text(message);
                $('#win-popup').fadeIn();

                
                gameStarted = false;
                
                updateTurnDisplay();

            } else {
                playerColors[currentPlayer] = selectedColor;

                if (currentPlayer === 1) {
                    currentPlayer = 2;
                    showColorChoice(); // Show the popup again for player 2
                } else {
                    currentPlayer = 1;
                    updateTurnDisplay();
                    $('#color-choice-popup').fadeOut();
                    gameStarted = true;
                    // Continue with the game setup...

                    $('#player1-color').css('background-color', playerColors[1]);
                    $('#player2-color').css('background-color', playerColors[2]);
                
                }
            }
        } else {
            alert('Please select a color.');
        }
    });
    
    
    
     $guessButton.on('click', function() {
        if (!gameStarted) return;

         showColorChoice(true);
    });
    
    
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

        return Math.abs(homeRow - cellRow) > 3 || Math.abs(homeCol - cellCol) > 3;
    }

    function updateTurnDisplay() {
        $playerTurnDisplay.text(gameStarted ? `Player ${currentPlayer}'s turn` : 'Game over! Reload to play again.');
    }

    function switchTurns() {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        updateTurnDisplay();
    }

    function checkForWin(color, targetIndex) {
        if ($board.children('.circle').eq(targetIndex).hasClass('home')) {
            const opponentPlayer = currentPlayer === 1 ? 2 : 1;

            let message = "Nobody wins!";
            if (color === playerColors[opponentPlayer]) {
                message = `Player ${opponentPlayer} wins! Their color was ${playerColors[opponentPlayer]}`;
            } else if (color === playerColors[currentPlayer]) {
                message = `Player ${currentPlayer} wins! Their color was ${playerColors[currentPlayer]}`;
            }

            $('#win-message').text(message);
            $('#win-popup').fadeIn();

            gameStarted = false;
        }
    }

    $('#close-custom-popup').click(function() {
        $('#win-popup').fadeOut();
        // Any additional logic to reset or end the game can go here
    });

    
    
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


    showColorChoice();
    
    
    // Toggle spoiler content on button click
    $('#spoiler-button').click(function() {
        $('#spoiler-content').slideToggle();
    });
    gameStarted = true;
    updateTurnDisplay();


});
