class Node
{
    constructor(value)
    {
        this.data=value;
        this.next=null;
    }
    
}
class Stcak
{
    constructor()
    {
        this.head=null;
    }
    push(value)
    {
       const node=new Node(value)
       node.next=this.head;
       this.head=node;
       return;
    }
    pop()
    {
        if(!this.head) return null;
        let temp = this.head;
        this.head= this.head.next;
        return temp.data;

    }
   
    
}
const stack = new Stcak();

stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
const a= stack.pop();
console.log(a);
console.log(stack.head.data);
console.log(stack.head.next.data);
console.log(stack.head.next.next.data);
// console.log(stack.head.next.next.data);