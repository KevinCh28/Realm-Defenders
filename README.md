https://kevinch28.github.io/js_project_2/

Monsters have invaded the peaceful realm of Mekraine and have made their way to your village. Pick up your weapons and protect your home!

Place defenders on the screen, by clicking, to stop the progressing monsters.
Keep an eye on your resources, each defender consumes resources, defeating monsters will acquire resources.

Not based on real life!



Realm Defender, users will be able to:

User can:
Click to start game/restart game at gameover
Click to select from 2-4 different kind of defenders(maybe, if theres enough time)
Click to places defender on a spot on the canvas(made like a grid)

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
Game board 9x6
On the top starting from the left, there will be 2-4 clickable defenders(maybe additonal choice depending on time) to choose from, highscore count tracker, resource count trackerand nav link at the right top corner.
Grid will be 9x5
Color scheme outside of the game board will be black

Timeline:
Friday/weekend: setup project, webpack. Get canvas to show up on the screen. Create Board and Cell classes. Get grid rendered to the canvas reflecting the intial state of the cells.
Monday: Dedicate this say towards implementing the underlying logic of defender, enemy, projectile. Make sure everything is rendered correctly.
Tuesday: Focus on user controls: clicking on cells
Wednesday: Focus on styling, nav links
Thursday: Deploy to GitHub pages. If time, rewrite tis proposal as a production README.
