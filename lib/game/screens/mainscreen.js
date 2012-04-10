ig.module(
    'game.screens.mainscreen'
)
    .requires(
    'game.levels.level1',
    'game.entities.hero'
)
    .defines(function(){

        MyGame = ig.Game.extend({

            init: function() {
                this.loadLevel(LevelLevel1);

                ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
                ig.input.bind(ig.KEY.UP_ARROW, 'up');
                ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
                ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
                ig.input.bindTouch("#leftButton", 'left');
                ig.input.bindTouch("#upButton", 'up');
                ig.input.bindTouch("#downButton", 'down');
                ig.input.bindTouch("#rightButton", 'right');
            },

            update: function() {
                var hero = this.getEntitiesByType(EntityHero)[0];

                this.parent();

                if(hero) {
                    this.screen.x = hero.pos.x - ig.system.width/2;
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
