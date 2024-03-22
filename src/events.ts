import { EventEmitter } from 'node:events';

const eventEmitter = new EventEmitter();

eventEmitter.on('event123', (...arg) => {
    console.log('event emitted');
    console.log(arg);
});

eventEmitter.emit('event123', 'asdf', 123);

// And now the same but with types
// https://mehranjnf.medium.com/mastering-events-in-node-js-and-typescript-839e51d47985

class UserOrders extends EventEmitter {
    constructor() {
        super();
        this.on('orderAdded', (order: string, count: number) => {
            console.log(`Order: ${order}, count: ${count}`);
        });
        this.on('error', (err: Error) => {
            console.error('An error occurred:', err.message);
        });
    }

    addOrder(order: string, count: number) {
        this.emit('orderAdded', order, count);
    }
}

const userOrders = new UserOrders();

userOrders.addOrder('Pizza', 2);

userOrders.emit('error', new Error('Something went wrong'));