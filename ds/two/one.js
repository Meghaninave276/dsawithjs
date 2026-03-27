class Stack
{
    #list
    constructor()
    {
        this.#list=[];
        this.length=0;
       

    }
   
    push(value)
    {
        this.#list.push(value);
        this.length=this.#list.length
        return this.length;
    }
    pop()
    {
        
       const res =  this.#list.pop();
       this.length=this.#list.length;
       return res;

    }
    peak()
    {
       return this.#list[this.#list.length-1];
    }
    isempty()
    {
        return this.#list.length==0;
    }
    reverse(str)
    {
        const stack=[];
        for(let char of str)
        {
            stack.push(char)
        }
        let reversed= "";
        while(stack.length>0){
            reversed=reversed+stack.pop();
        }
        return reversed;

    }
    print()
    {
        for(let i=this.#list.length-1; i>=0;i--)
        {
            console.log(this.#list[i]);
        }
    }
}
const stack= new Stack();
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
 stack.push(9);
  stack.pop();
console.log(stack.reverse("megha"));
  stack.isempty();

 console.log( stack.peak())
   console.log("\n")
stack.print()
