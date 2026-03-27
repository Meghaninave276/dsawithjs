class Queue
{
    constructor()
    {
        this.queue=[];
    }
    enqueue(value)
    {
        this.queue.push(value)

    }
    dequeue()
    {
       return this.queue.shift();
    }
    peek()
    {
       return this.queue[0];
    }
    isEmpty()
    {
        return this.queue.length===0;
    }
    print()
    {
        console.log(this.queue);
    }
}

const queue=new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);

queue.dequeue();
console.log(queue.peek())
queue.print();