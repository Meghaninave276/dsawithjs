class Node
{
    constructor(value)
    {
        this.data=value;
        this.next=null;
    }
}

class Linkedlist
{
    constructor()
    {
        this.head=null;
    }
    push(value)
    {
        let node = new Node(value);
        if(this.head==null)
        {
            
            this.head=node;
            this.head.next=this.head;
            return;
        }
        let current=this.head;
       while(current.next!=this.head)
       {
        current=current.next;
       }
       current.next=node;
       node.next=this.head;
    }
    unshift(value)
    {
        let node = new Node(value)
       if(!this.head)
       {
         
        this.head=node;
        node.next=this.head;
        return;

       }
       let temp=this.head
       while(temp.next!==this.head)
       {
        temp=temp.next;
        
       }
       node.next=this.head;
       temp.next=node;
       this.head=node;


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
        if(current === this.head)
        {
            break;
        }
       }
       return false;

    }


    delete(value)
    {
        if(this.head.data == value)
        {
            this.head=this.head.next;
            return;
        }
        let current = this.head;
        while(current)
        {
            if(current.next.data==value)
            {
                current.next=current.next.next;
                return;

            }
            current=current.next;
        }
    }

    sum()
    { 
        if (!this.head) return 0;
        let sum = this.head.data;
    let current = this.head.next;
        while(current!=this.head)
        {
            sum = sum+current.data;
            current=current.next;
           
        }
        return sum;

    }
    findemax()
    {
        if (!this.head) return 0;
            let max=this.head.data;
    
        let current=this.head.next;
        
        while(current !== this.head)
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
        if(!this.head) return 0;
        let min = this.head.data;
        let current=this.head.next;
        while(current !== this.head)
        {
            if(min>current.data)
            {
                min=current.data;
            }
            current=current.next;
        }
        return min;
    }
     print()
    {
        let current=this.head;
        let res=" ";
        while(current.next!=this.head)
        {
            res=res+current.data+"->";
            current=current.next;

        }
        console.log(res+current.data + "-> null");

      
    }
}
const list = new Linkedlist();
list.push(12);
list.push(15);
list.push(16);
list.push(17);
list.push(18);
list.push(19);
list.push(20);
list.unshift(13);
console.log(list.update(12,14))
console.log(list.delete(19))
console.log(list.sum())
console.log(list.findemax());
console.log(list.findmin());
list.print();
// console.log(list.head.data);
// console.log(list.head.next.data);
// console.log(list.head.next.next.data);



//insert at first