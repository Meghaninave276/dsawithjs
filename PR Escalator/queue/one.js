// class Queue
// {
//     constructor()
//     {
//         this.queue=[];
//     }
//     enqueue(value)
//     {
//         this.queue.push(value)

//     }
//     dequeue()
//     {
//        return this.queue.shift();
//     }
//     peek()
//     {
//        return this.queue[0];
//     }
//     isEmpty()
//     {
//         return this.queue.length===0;
//     }
//     print()
//     {
//         console.log(this.queue);
//     }
// }

// const queue=new Queue();
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// queue.enqueue(8);

// queue.dequeue();
// console.log(queue.peek())
// queue.print();

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Example
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.size());