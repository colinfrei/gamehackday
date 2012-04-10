ig.module(
    'game.entities.hero'
)
.requires(
    'impact.entity'
)
.defines(function(){

EntityHero = ig.Entity.extend({
    size: {x:4, y:4},
    checkAgainst: ig.Entity.TYPE.B,

    animSheet: new ig.AnimationSheet('media/herb_body_1.png', 66, 60),
    maxVel: {x: 50, y: 50},
    speed: 50,

    init: function( x, y, settings ) {
        this.addAnim( 'idle', 0.1, [0] );
        this.parent( x, y, settings );
    },

    update: function() {
        // User Input

        if( ig.input.state('left') ) {
            this.accel.x = -this.speed;
        }
        else if( ig.input.state('right') ) {
            this.accel.x = this.speed;
        }
        else if( ig.input.state('up') ) {
            this.accel.y = -this.speed;
        }
        else if( ig.input.state('down') ) {
            this.accel.y = this.speed;
        }
        else {
            this.accel.x = 0;
        }


        this.parent();
    },

    handleMovementTrace: function( res ) {
        if( res.collision.y && this.vel.y > 32 ) {
            this.sound.play();
        }
        this.parent(res);
    },

    check: function( other ) {
        other.pickup();
    }
});

});