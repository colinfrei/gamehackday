ig.module(
    'game.entities.hero'
)
.requires(
    'impact.entity'
)
.defines(function(){

EntityHero = ig.Entity.extend({
    size: {x:66, y:60},
    checkAgainst: ig.Entity.TYPE.B,

    animSheet: new ig.AnimationSheet('media/herb_sheet.png', 65, 80),
    maxVel: {x: 100, y: 100},
    speed: 100,
    friction: {x: 50, y: 50},
    bounciness: 0.5,
    collides: ig.Entity.COLLIDES.PASSIVE,
    sound: null,

    init: function( x, y, settings ) {
        this.addAnim( 'idle', 0.08, [0,1,2,3,4,5,6,7] );
        this.parent( x, y, settings );

        if (window.soundManager) {
            this.sound = soundManager.createSound({
                id: 'herbert_bzzt2',
                url: 'media/herbert_bzzt2.' + soundManager.fileEnding
            });
        }
    },

    update: function() {
        // User Input
        if( ig.input.state('left') ) {
            this.accel.x = -this.speed;
            this.currentAnim.flip.x = true;
        }
        else if( ig.input.state('right') ) {
            this.accel.x = this.speed;
            this.currentAnim.flip.x = false;
        }
        else if( ig.input.state('up') ) {
            this.accel.y = -this.speed;
        }
        else if( ig.input.state('down') ) {
            this.accel.y = this.speed;
        }
        else {
            this.accel.x = 0;
            this.accel.y = 0;
        }

        this.parent();
    },

    handleMovementTrace: function( res ) {
        if( res.collision.y || res.collision.x ) {
            //this.receiveDamage(1);
            this.sound.play();
        }

        // Continue resolving the collision as normal
        this.parent(res);
    },

    check: function (other, axis) {
        other.doHit(this);
    }
});

});