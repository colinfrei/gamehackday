ig.module(
    'game.screens.mainscreen'
)
    .requires(
    'impact.game',
    'game.levels.level1',
    'game.entities.hero',
    'game.entities.coin'
)
    .defines(function(){

        MyGame = ig.Game.extend({

            init: function() {
                this.loadLevel(LevelLevel1);
                this._mapWidth = ig.game.backgroundMaps[0].width * ig.game.backgroundMaps[0].tilesize - (ig.system.width);

                ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
                ig.input.bind(ig.KEY.UP_ARROW, 'up');
                ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
                ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
                ig.input.bindTouch("#leftButton", 'left');
                ig.input.bindTouch("#upButton", 'up');
                ig.input.bindTouch("#downButton", 'down');
                ig.input.bindTouch("#rightButton", 'right');

                this.spawnEntity( EntityCoin, 220, 220 );
                this.spawnEntity( EntityCoin, 250, 40 );
            },

            update: function() {
                var hero = this.getEntitiesByType(EntityHero)[0],
                    xPos;

                this.parent();

                if (hero) {
                    xPos = hero.pos.x - (ig.system.width / 2);
                    this.screen.x = (xPos > 0 && xPos < this._mapWidth) ? xPos : this.screen.x;
                }

            },

            draw: function() {
                // Draw all entities and backgroundMaps
                this.parent();

                var x = ig.system.width/2,
                    y = ig.system.height/2;

            }
        });

    });
