## Decoy


[Play the game now.](https://carrotcypher.github.io/decoy)


The original concept of this game is Alex Randolph's XE QUEO, with more modern inspiration from Woobo's "Will you marry me". In the original versions, players have multiple pieces on the board that are known to be owned by that player. What isn't known is which piece is marked as "it" (e.g. the one that needs to reach the goal spot). This version of the game introduces more difficulty by allowing any piece on the board to be moved, even your opponent's


## Board / Arrangement

![image](https://github.com/carrotcypher/game/assets/37557436/a2e0405e-6b4e-4706-9a2c-c831eba32511)

The board is arranged as 7 x 7 spaces.

A "goal" space (black) is randomly chosen.

Player pieces are randomly positioned, and cannot be closer than 4 spaces away from any player piece to ensure a fair and longer lasting game.


## Rules

You start by choosing which color piece for your own runner. This piece must make it to the goal (black) before the opponent's runner piece does. 

![image](https://github.com/carrotcypher/game/assets/37557436/3fa6dc1f-17aa-4682-a1e2-10487a12e8a0)

You can move any piece on your turn, even if it happens to be your opponent's piece.

You are allowed to move one space at a time, but similarly to checkers you are allowed to hop over another piece so long as the space you land in is empty.

![image](https://github.com/carrotcypher/game/assets/37557436/b7a3e718-ba71-458f-bb8d-3dc097309eee)  ------->  ![image](https://github.com/carrotcypher/game/assets/37557436/adac4b95-79a5-441b-b339-3a2e8c855c3a)



During your turn, you can either move your own runner piece towards the goal to try to win first,

![image](https://github.com/carrotcypher/game/assets/37557436/daeebf79-57c9-4bfc-a6be-cd9c78d363b7)

or take a risk and try to guess which piece is your opponent's runner.

![image](https://github.com/carrotcypher/game/assets/37557436/e016f681-b1c8-49fb-baa2-3c09c3d85a71)

If your runner piece reaches the goal space first, your opponent loses. Alternatively, if you guess your opponent's runner piece correctly, your opponent loses.

Strategy in this game is two-fold:

* deception: you move multiple pieces that are not your runner in a manner that can trick your opponent into improperly guessing it is the runner and losing the game as a result
* reach the goal: try to get your runner to the goal first


## Stats

Players: 2

Versus: player vs player

Rounds: ∞


## Provably fair 

What's special about this game and games of this type?

Anyone can take this game and make both a perfectly fair and provaby fair game out of the concept.

If it is modified to where turns are taken simultaneously and are double-blind (neither player sees the result until both have played their turn), the game becomes perfectly fair (players have an equal chance of winning). In its current form it cannot be considered perfectly fair as there are advantages and disadvantages to starting first or second, seeing what your opponent's choices are and changing your strategy or movements accordingly, etc.

If turns are limited and enforced as one per each player (via a client-server, blockchain, or other model for validating movements in a way players can't see), thus guaranteeing that players do not have the ability to endlessly attempt tries, then it becomes provably fair. In its current form it is not provably fair as it is single computer, two player and locally modifiable.
