class Node
{
    constructor(value)
    {
        this.data=value;
        this.next=null;

    }

}

class Dequeue
{
    constructor()
    {
        this.front=null
        this.back=null;

    }
    enqueue(value)
    {
        const node=new Node(value)
        if(this.front==null)
        {
            this.front=node;
            this.back=node;
        }
        this.back.next=node;
        this.back=node;


    }
    pop()
    {
       let current=this.front;
       while(current.next.next)
       {
        current=current.next;

       }
       current.next=null;
       this.back=current;
    }
    unshift(value)
    {
        const node=new Node(value);
       node.next=this.front;
       this.front=node


    }
    dequeue()
    {
        this.front=this.front.next;

    }
    print()
    {
        let current=this.front;
        while(current)
        {
            console.log(current.data);
            current=current.next
        }
    }
}

const dequeues=new Dequeue()
dequeues.enqueue(1)
dequeues.enqueue(2)
dequeues.enqueue(3)
dequeues.enqueue(4);
dequeues.pop();

dequeues.dequeue();
dequeues.unshift(6);

dequeues.print();
