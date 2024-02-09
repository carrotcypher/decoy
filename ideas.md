Provably Fair and Perfectly Fair Mini-games
===========================================

Many games have the flaw of requiring to trust users not to cheat while keeping information private. An example of this would be Battleship, where players could either try to see the opponents pieces or lie about having been hit themselves. Making games that are provably verifiable, provably fair, and double-blind solves this.

Such games are ideal for either blockchain, live play, or a hybrid of both. Below are some ideas for those games.

### Crack

Players: 2

Versus: player vs player

Rounds: <=7


**Theme:** Cracking encryption key

**Description:** Both players will privately choose a passcode for themselves that is encrypted and then shared with the other party for later verification. Players must then try to guess their opponents chosen passcode.

**Provably verifiable:** decisions are made and shared before the game begins

**Provably fair:**

1.  Game is perfectly fair (players have an equal chance of winning)

2.  If attempts are limited to one turn per round for each player (client-server model), or you can guarantee that players do not have the ability to endlessly attempt tries (p2p with consensus or blockchain), then it becomes provably fair.

**UI concept:**

![Untitled](https://github.com/carrotcypher/decoy/assets/37557436/37b317a1-ef8c-4cc3-b5e0-e0601c30a3d5)



### DoS


Players: 2

Versus: player vs player

Rounds: <=4


**Theme:** DoSsing attacker’s VPNs

**Description:** _(story)_ Both players are provided with 4 VPN shield slots to hide their network resources behind. If an opponent guesses your resource location, you lose the resource.

**Provably verifiable:** decisions are made and shared before the game begins

**Provably fair:**

1.  Game is perfectly fair (players have an equal chance of winning)

2.  If attempts are limited to one turn per round for each player (client-server model), or you can guarantee that players do not have the ability to endlessly attempt tries (p2p with consensus or blockchain), then it becomes provably fair.

**UI concept:**

![Untitled 1](https://github.com/carrotcypher/decoy/assets/37557436/e6d42a51-cf18-4050-8c8f-43d8e1bac09a)


### Raid

Players: 3+

Versus: player vs player

Rounds: 1

Author: @Neal W

**Theme:** Hacking cryptocurrency wallets

**Description:** _(story)_ All players are given a list of active wallets on an insecure exchange server, but only enough time to choose a single wallet to try to raid. Last wallet(s) left untouched wins. This is “winner takes all”. It’s possible to have no winner (draw), or even multiple winners who split the resource.

**Provably verifiable:** resource locations of the players are known before the game starts (the location being the player’s only available resource slot)

**Provably fair:**

1.  Game is perfectly fair (players have an equal chance of winning). Since each person only gets one turn, and they can't see what anyone else's turn was, players 2, 3, and 4 could all decide to raid wallet #1 (your wallet). They could alternatively decide (unknowingly) to raid each others and yours would remain untouched.

2.  This double-blind game makes it so players do not know whose resource is owned by whom. When operated in a client-server model, identifiers for asset locations can be shuffled randomly so that collusion of two or more instances becomes impossible.

3.  If attempts are limited to one turn per round for each player (client-server model), or you can guarantee that players do not have the ability to endlessly attempt tries (p2p with consensus or blockchain), then it becomes provably fair.

**********************UI concept:**********************

![Untitled 2](https://github.com/carrotcypher/decoy/assets/37557436/c83e7bd6-6814-47be-bd35-676dab3e6f00)


### Pin

Players: 1

Versus: player vs timer

Rounds: ?

Author: multiple (old concept)

Theme: Bruteforcing PIN

**Description:** Decode the PINs by entering any numbers. Analyse the result by colours; GREEN means the number and position is correct, YELLOW means the number is present but in the wrong position, GREY means the number is not present in the pin. Keep entering the right PINs to score. The player loses if they don’t guess the PIN within the allocated attempts.

**Provably verifiable:** PIN is known before the game starts

**Provably fair:**

1.  Game is perfectly fair (PIN is random and all players have an equal chance of guessing it)

2.  If attempts are limited to one turn per round for each player (client-server model), or you can guarantee that players do not have the ability to endlessly attempt tries (p2p with consensus or blockchain), then it becomes provably fair.

**UI concept:**

![Untitled 3](https://github.com/carrotcypher/decoy/assets/37557436/4e76f4ef-a92b-4819-ad25-5fe3c5fa6c99)


### Decoy

https://github.com/carrotcypher/decoy/

Players: 2

Versus: player vs player

Rounds: ?

Author: multiple / Alex Randolph / Woobo

**Theme:** Courier deception

**Description:** Players have a resource they need to deliver to themselves using one of multiple couriers available to them on a grid. Only one of the couriers will hold the real resource. Players must control their couriers in such a way that tricks the opponent into chasing a decoy. Players whose courier safely delivers the resource wins. Players who catch a decoy instead, lose as well. **_(based on XE QUEO /_** **[_Will you marry me_](https://www.tumblbug.com/willyoumarryme)****_)_**

**Provably verifiable:** resource locations are known before game starts

**Provably fair:**

1.  If turns are taken simultaneously and double-blind, game becomes perfectly fair (players have an equal chance of winning). If turns are taken in order, the game is still largely fair but influenced by the choices of opponents as most board games are.

2.  If attempts are limited to one turn per round for each player (client-server model), or you can guarantee that players do not have the ability to endlessly attempt tries (p2p with consensus or blockchain), then it becomes provably fair.

**Reference UI:**

![New-game-map](https://github.com/carrotcypher/decoy/assets/37557436/04996d6e-faae-48b6-898b-80f0a9eb6200)

![Old-game-map](https://github.com/carrotcypher/decoy/assets/37557436/793c9f45-b5b1-4dfa-8979-c5a03e4a4c4f)


### Cyber-espionage


Players: 2-6

Versus: player vs player

Rounds: ?

Author: Anthony Pratt

**Theme:** Investigating the trail of a hacker from inside your company

**Provably verifiable:** all elements are known before game starts and randomly distributed between players

**Description:** A hacker where you work has entered the company system and stolen important data. You and other colleagues must investigate and find them in the system. Each player is provided with multiple pieces of information that prove the innocence of a colleague _(a location in the network where they were accessing at the time of the hack, the type of access the user, and/or a username of the user)_. Each round every player has a chance to make a guess and hack into a particular colleagues’s resource. If the player is correct in their guess, the spy will be caught. If they’re wrong, by deduction, all players will know who is no longer a suspect. **_(based entirely on Clue/Cluedo, except the “board” movements are removed to make it perfectly fair / not influenced by dice rolls)_**

**Provably fair:**

1.  If turns are taken simultaneously and double-blind, game becomes perfectly fair (players have an equal chance of winning). If turns are taken in order, the game is still largely fair but influenced by the choices of opponents as most board games are.

2.  If attempts are limited to one turn per round for each player (client-server model), or you can guarantee that players do not have the ability to endlessly attempt tries (p2p with consensus or blockchain), then it becomes provably fair.

**Reference UI:**

![Untitled](https://github.com/carrotcypher/decoy/assets/37557436/6fdb6010-79b8-4898-8047-05546579397b)


### Cyber warfare

* * *

Players: 2

Versus: player vs player

Rounds: ?

Author: Milton Bradley

**Theme:** DDoSing multiple network resources to try to take your opponent offline

**Provably verifiable:** all network locations are chosen and known before game starts

**Description:** You must take down your opponents networks by DDoSing them. The problem is you don’t known which resources are theirs so you must DDoS different resource locations until you find them. Players take turns taking attempts at each others network resources (which have different sizes). The player who takes all resources of the opponent offline wins. _(based entirely on Battleship)_

**Provably fair:**

1.  If turns are taken simultaneously and double-blind, game becomes perfectly fair (players have an equal chance of winning). If turns are taken in order, the game is still largely fair but influenced by the choices of opponents as most board games are.

2.  If attempts are limited to one turn per round for each player (client-server model), or you can guarantee that players do not have the ability to endlessly attempt tries (p2p with consensus or blockchain), then it becomes provably fair.

**Reference UI:**

<img width="530" alt="Untitled 4" src="https://github.com/carrotcypher/decoy/assets/37557436/1a425b4d-301f-4598-bf5c-4934d09bc5aa">
