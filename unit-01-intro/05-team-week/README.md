# EPICODUS - 01 - Intro - Week 5

**Team Week | 2D Game-Maker Framework | April 9, 2018**

**Collaborators**

- Mike Chu
- Kayl Eubanks
- Kelsey Guerra
- Nicholas Kardish
- Susan Southall

## Description

A basic framework for developing single-player, 2-dimensional, top-down, turn-based games. Basic game mechanics allow a player to move across a coordinate map while avoiding enemies and obstacles to complete a level. Current built-in features include the following:

- **Enemy Movement Patterns:** Lateral Patrol, Rectangular Patrol, Player Hunting.
- **Barrier & Wall Mechanics.**
- **Turn Metering:** Incremental Meter, Decremental Meter.

## Setup/Installation Requirements

1. Clone repository.

2. Navigate to project root: `05-team-week`.

3. Modify HTML, CSS, and JavaScript to re-skin or replace default digital assets.

4. Load game by opening index.html file in web browser.

## Known Bugs

- Enemy collisions not currently supported.

## Technologies Used

- HTML
- CSS
- Bootstrap
- JavaScript
- jQuery

## Specifications

| Program Behavior | Input | Output |
| --- | --- | --- |
| **Player Control:** Given player coordinates (0,0), updates player's x-coordinate by one unit when horizontal movement is initiated. | "Right" | (1,0) |
| **Player Control:** Given player coordinates (1,0), updates player's y-coordinate by one unit when vertical movement is initiated. | "Down" | (1,1) |
| **Player Control:** Given player coordinates (0,0), prevents player movement past limit of coordinate system. | "Up" | (0,0) |
| **NPC Random Pattern:** Given non-player coordinates (2,2), randomly automates non-player coordinates by one unit after player movement is initiated. | Player Moves | (2,3) |
| **NPC Horizontal Pattern:** Given non-player coordinates (2,2), updates non-player coordinates by one horizontal unit after player movement is initiated. | Player Moves | (3,2) |
| **NPC Horizontal Pattern:** Given non-player character has reached the rightward-limit of coordinate system at coordinates (0,5), changes non-player horizontal direction leftward after player movement is initiated. | Player Moves | (0,4) |
| **NPC Vertical Pattern:** Given non-player coordinates (2,2), updates non-player coordinates by one vertical unit after player movement is initiated. | Player Moves | (2,3) |
| **NPC Vertical Pattern:** Given non-player character has reached the upward-limit of coordinate system at coordinates (5,0), changes non-player vertical direction downward after player movement is initiated. | Player Moves | (5,1) |
| **Game Status:** Executes losing condition when player and non-player entities occupy the same coordinates. | Player (x,y) = Non-Player (x,y) | Game Over |
| **Game Status:** Given movement turn counter of "10," counter decreases by 1 after each player movement. | Player Moves | Turns = 9 |
| **Game Status:** Executes losing condition when movement turn counter reaches 0. | Turns = 0 | Game Over |
| **Game Status:** Executes winning condition when player entity occupies the same coordinates as goal entity. | Player (x,y) = Goal (x,y) | Player Wins |
