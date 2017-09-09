/*jshint esversion: 6 */

const MAXIMUN_INSTANCES = 3;

class ThreePrinter {
    constructor() {
        ThreePrinter.instances = ThreePrinter.instances || [];
        ThreePrinter.turn = ThreePrinter.turn || undefined;
        this.turn = this.actual(ThreePrinter.turn);
        ThreePrinter.turn = this.turn + 1;
        if (ThreePrinter.instances.length < MAXIMUN_INSTANCES ) {
            ThreePrinter.instances.push(this);
        }
        return ThreePrinter.instances[this.turn];
    }
    actual(turn) {
        if(turn > 2 || turn == undefined){
            return 0;
        }else{
            return turn;
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
