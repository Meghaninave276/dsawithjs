class Node{
    constructor(value)
    {
        this.data=value;
        this.next=null;
    }
}
class Linkedlist{
    constructor()
    {
        this.head=null;
        this.length=0;
        this.countlength()
    }
    countlength()
    {
        this.length=0;
        let current=this.head;
        
        while(current)
        {
            this.length++;
            current=current.next
        }
    }
    push(value)
    {
        const node=new Node(value);
        if(this.head==null)
        {
            this.head=node;
            return;
        }
        let current=this.head;
        while(current.next)
        {
           
            current=current.next;
        }
        current.next=node;
        this.countlength();

    }
    unshift(value)
    {
       
       const node=new Node(value);
       node.next=this.head;
       this.head=node;
       this.countlength();
    }
   include(value)
   {
    let current=this.head;
    while(current)
    {
        if(current.data===value)
        {
            return true;
        }
        current=current.next;
        
    }
    return false;

   }
   update(o,n)
   {
    let current=this.head;
    while(current)
    {
        if(current.data==o)
        {
            current.data=n;
            return true;
        }
        current=current.next;
    }
    return false;
   }
   delete(value)
   {
    if(this.head.data===value)
    {
        this.head=this.head.next;
        return;

    }
    let current=this.head;
    while(current)
    {
        if(current.next.data===value)
        {
            current.next=current.next.next;
                 this.countlength();
            return;

        }
        current=current.next;
    }

   }
   findmax()
   {
    let current=this.head;
    let max = current.data;
    while(current)
    {
        if(max<current.data)
        {
            max=current.data;
        }
        current=current.next;
    }
    return max;

   }
   findmin()
   {
    let current=this.head;
    let min = current.data;
    while(current)
    {
        if(min>current.data)
        {
            min=current.data;
        }
        current=current.next;
    }
    return min;

   }
   sum()
   {
        let sum=0;
    let current=this.head;

    while(current)
    {
        sum=sum+current.data;
        current=current.next;
    }
    return sum;

   }

   reversebylength()
   {
    let n=this.length;
    let i;
    
    while(n>0)
    {
        let current=this.head;
        for(i=1;i<n;i++)
    {

        current=current.next;
    }
    console.log(current.data);
    n--;
    }
   }
   reverse()
   {
    let prev=null;
    let current=this.head;
    let next=null;
    while(current)
    {
        next=current.next;
        current.next=prev;
        prev=current;
        current=next;

    }
    this.head=prev;
   }
    print()
    {
        let current=this.head;
        let res=" ";
        while(current)
        {
            res=res+current.data+"->";
            current=current.next;

        }
        console.log(res+"null");

      
    }
}
const list=new Linkedlist();
list.push(18);
list.push(19);
list.push(20);
list.push(21);
list.unshift(25);
// console.log(list.include(25));
console.log(list.update(25,27));
list.delete(19);
console.log(list.findmax());
console.log(list.findmin());
console.log(list.sum());
list.reversebylength()
console.log(list.reverse());
list.print();
console.log(list.length);
