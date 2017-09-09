import Printer from '../src/singleton/single-singleton.js';
import ThreePrinter from '../src/singleton/multiple-singleton.js';

describe('Only one instance of singleton', () =>{
    test('is an instance of Printer', () => {
        let printer = new Printer();

        expect(printer instanceof Printer).toBeTruthy();
    });

    test('is the same object', () => {
        let printerOne = new Printer();
        let printerTwo = new Printer();

        expect(printerOne === printerTwo).toBeTruthy();
    });

    test('prints message', () => {
        let printer = new Printer();
        let sendMessage = 'Bye bye world';
        let printedMessage = printer.print(sendMessage);

        expect(printedMessage).toBe(sendMessage);
    });
});
describe('Only three instances of singleton', () =>{
    test('prints message', () => {
        let printer = new ThreePrinter();
        let sendMessage = 'Bye bye world';
        let completeMessage = sendMessage + ' printed by printer 1';
        let printedMessage = printer.print(sendMessage);

        expect(printedMessage).toBe(completeMessage);
    });

    test('is an instance of Printer', () => {
        let printer = new ThreePrinter();

        expect(printer instanceof ThreePrinter).toBeTruthy();
    });
    
    test('are different objects', () => {
        let printerOne = new ThreePrinter();
        let printerTwo = new ThreePrinter();
        let printerThree = new ThreePrinter();

        expect(printerOne !== printerTwo).toBeTruthy();
        expect(printerOne !== printerThree).toBeTruthy();
        expect(printerTwo !== printerThree).toBeTruthy();
    });

    test('printers iterate by turn', () => {
        let printerOne = new ThreePrinter();
        let printerTwo = new ThreePrinter();
        let printerThree = new ThreePrinter();
        let notPrinterFour = new ThreePrinter();
        let notPrinterFive = new ThreePrinter();
        let notPrinterSix = new ThreePrinter();

        expect(printerOne === notPrinterFour).toBeTruthy();
        expect(printerTwo === notPrinterFive).toBeTruthy();
        expect(printerThree === notPrinterSix).toBeTruthy();
    });
    test('only accept three printers', () => {
        let printerOne = new ThreePrinter();
        let printerTwo = new ThreePrinter();
        let printerThree = new ThreePrinter();
        let notPrinterFour = new ThreePrinter();

        expect(printerOne === notPrinterFour).toBeTruthy();
    });

});
