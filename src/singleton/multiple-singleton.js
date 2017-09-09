/*jshint esversion: 6 */

const MAXIMUN_INSTANCES = 3;

class ThreePrinter {
    constructor(turn) {
        ThreePrinter.instances = ThreePrinter.instances || [];
        this.actual(turn);
        if (ThreePrinter.instances.length < MAXIMUN_INSTANCES ) {
            ThreePrinter.instances.push(this);
        }
        return ThreePrinter.instances[this.turn];
    }
    actual(turn) {
        if(turn > 3){
            this.turn = 0;
        }else{
            this.turn = turn - 1;
        }
    }
    print(message){
        let turn = this.turn + 1;
        let completeMessage = message + ' printed by printer ' + turn;
        console.log(completeMessage);
        return completeMessage ;
    }
}

export default ThreePrinter;
