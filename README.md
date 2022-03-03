https://kevinch28.github.io/js_project_2/

Monsters have invaded the peaceful realm of Mekraine and have made their way to your village. Pick up your weapons and protect your home!

Monsters will appear from the right side of the screen.
If monsters reach the left side, GAMEOVER!
Place villagers(defender) on the screen, by clicking on a spot on the screen. 
*villagers are fragile, best to place them on far left.
Keep an eye on your resources, each villager consumes 100 resource, defeating monsters will acquire 50 resources.


Features:
Collsion between projectile vs monsters, monsters vs defenders
Rendering defender on canvas, grid-like setup


Notes:
Defender has a cost(resource) to spawn.
Defender has health count.

Keep track of resource, start at x amount at the beginning so user can spawn defender, increases with killed/deleted enemy, 
Resource also increases over time a little bit at a time incase if user place defender on row that has no enemy and cant gain resource
Keep track of high score.

Enemy generated at a x rate from right side of board, randomly on a row and walks towards left side of board.
Enemy has set amount of health.
Enemy kill/deleted increases high score and resource with same amount.
2-4 different kind of Enemy each has different spawn rate/time.
If enemy reaches left side, off board, gameover.
If enemy collides with defender, stops moving and decrease defender's health, continues if nothing blocking.

Projectile generated from defender, collides with enemy, reduced x amount of enumy's health.
Projectile deleted when collided.
Projectile ignores defender, makes it no friendly fire.

Canvas

Wireframes:
On the top starting from the left, there will be 2-4 clickable defenders(maybe additonal choice depending on time) to choose from, highscore count tracker, resource count trackerand nav link at the right top corner.
Grid will be 9x5
Color scheme outside of the game board will be black


Features not implemented
1) Upgradable units
2) Collison sound effect

