class Node
{
    constructor(value)
    {
        this.prev=null
        this.data=value;
        this.next=null
    }
}
class Linkedlist
{
    constructor()
    {
        this.head=null;
        this.length=0;
    }
    countlength()
    {
        let current=this.head;
        this.length=0;
        while(current)
        {
            this.length++;
            current=current.next;
        }
    }
    push(value)
    {
        const node = new Node(value);
        if(this.head==null)
        {
            this.head=node;
            this.countlength();
            return;

        }
        let current=this.head;
        while(current.next)
        {
            current=current.next;
        }
        node.prev=current;
        current.next=node;
        this.countlength();

    }
    printforward()
    {
        let current=this.head
        
        while(current)
        {
            console.log(current.data);
            current=current.next

        }
        
    }
    printbackward()
    {
           let current=this.head
       
           while(current.next)
           {
            current=current.next
           }
           while(current)
           {
            console.log(current.data);
            current=current.prev
           }
    }
    insertatindex(value,index)
    {
        if(index>=this.length || index<0)
        {
            return;


        }
        const node = new Node(value)
        if(!this.head)
        {
            this.head=node;
            return;



            
        }
        if(index==0)
        {
            this.head.prev=node;
            node.next=this.head;
            this.head=node;
            return;
        }
        let current=this.head;
        for(let i=0;i<index-1;i++)
        {
            current=current.next;

        }
        node.prev=current;
       node.next=current.next;
        current.next=node;


    }

}

const list = new Linkedlist();
list.push(4);
list.push(5);
list.push(6);
list.insertatindex(2,1)
list.printforward();
console.log("");

list.printbackward();
// list.insertatindex(2,1)

