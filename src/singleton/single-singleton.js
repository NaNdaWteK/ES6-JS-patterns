/*jshint esversion: 6 */

class Printer {
    constructor() {
        if (typeof Printer.instance === 'object') {
            return Printer.instance;
        }
        Printer.instance = this;
        return Printer.instance;
    }
    print(message){
        console.log(message);
        return message;
    }
}

export default Printer;
