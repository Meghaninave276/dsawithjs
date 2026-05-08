class CircularQueue {
    constructor(size) {
        this.queue = new Array(size);
        this.size = size;
        this.front = -1;
        this.rear = -1;
    }

    enqueue(value) {

        if ((this.rear + 1) % this.size === this.front) {
            return "Queue is full";
        }

        if (this.front === -1) {
            this.front = 0;
        }

        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
    }

    dequeue() {

        if (this.front === -1) {
            return "Queue is empty";
        }

        let value = this.queue[this.front];

        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }

        return value;
    }

    display() {
        if (this.front === -1) {
            console.log("Queue is empty");
            return;
        }

        let i = this.front;
        let result = [];

        while (true) {
            result.push(this.queue[i]);

            if (i === this.rear) break;

            i = (i + 1) % this.size;
        }

        console.log(result.join(" "));
    }
}

const cq = new CircularQueue(5);

cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);

cq.display();

console.log(cq.dequeue());

cq.display();