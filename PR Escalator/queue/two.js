// class Node
// {
//     constructor(value)
//     {
//         this.data=value;
//         this.next=null;
//     }

// }

// class Queue{
//     constructor()
//     {
//         this.front=null;;
//         this.back=null;
//     }
//     enqueue(value)
//     {
//         const node=new Node(value);
//         if(!this.front)
//         {
//             this.front=node;
//             this.back=node;
//         }
//        this.back.next=node;
//        this.back=node;


//     }
//     dequeue()
//     {
//         if(this.front==null)
//         {
//             return;
//         }
//         this.front=this.front.next;
//         if(this.front==null)
//         {
//             this.back=null;
//         }
//     }
//     peek()
//     {
//         if(this.front==null)
//         {
//             return;
//         }
//         return this.front.data;

//     }
//     print()
//     {
//         let current=this.front;
//         while(current)
//         {
//             console.log(current.data);
//             current=current.next;
//         }
//     }

   
// }

// const queue=new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.dequeue();
// console.log(queue.peek())
// console.log("\n");
// queue.print();

class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(element) {
        this.stack1.push(element);
    }

    dequeue() {
        if (this.stack2.length === 0) {

            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        if (this.stack2.length === 0) {
            return "Queue is empty";
        }

        return this.stack2.pop();
    }

    front() {
        if (this.stack2.length === 0) {

            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2[this.stack2.length - 1];
    }
}

const q = new QueueUsingStacks();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue());
console.log(q.front());