import Printer from '../src/singleton/single-singleton.js';

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
