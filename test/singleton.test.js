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
    test('is an instance of Printer', () => {
        let printer = new ThreePrinter(1);

        expect(printer instanceof ThreePrinter).toBeTruthy();
    });

    test('are different objects', () => {
        let printerOne = new ThreePrinter(1);
        let printerTwo = new ThreePrinter(2);
        let printerThree = new ThreePrinter(3);

        expect(printerOne !== printerTwo).toBeTruthy();
        expect(printerOne !== printerThree).toBeTruthy();
        expect(printerTwo !== printerThree).toBeTruthy();
    });

    test('printers iterate by turn', () => {
        let printerOne = new ThreePrinter(1);
        let printerTwo = new ThreePrinter(2);
        let printerThree = new ThreePrinter(3);
        let notPrinterFour = new ThreePrinter(1);
        let notPrinterFive = new ThreePrinter(2);
        let notPrinterSix = new ThreePrinter(3);

        expect(printerOne === notPrinterFour).toBeTruthy();
        expect(printerTwo === notPrinterFive).toBeTruthy();
        expect(printerThree === notPrinterSix).toBeTruthy();
    });
    test('only accept three printers', () => {
        let printerOne = new ThreePrinter(1);
        let printerTwo = new ThreePrinter(2);
        let printerThree = new ThreePrinter(3);
        let notPrinterFour = new ThreePrinter(4);

        expect(printerOne === notPrinterFour).toBeTruthy();
    });

    test('prints message', () => {
        let printer = new ThreePrinter(1);
        let sendMessage = 'Bye bye world';
        let completeMessage = sendMessage + ' printed by printer 1';
        let printedMessage = printer.print(sendMessage);

        expect(printedMessage).toBe(completeMessage);
    });
});
