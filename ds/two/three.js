class Min
{
    constructor()
    {
        this.stack=[];
        this.minstack=[];
    }
    push(value)
    {
        this.stack.push(value);
        if(this.minstack.length==0 || value <= this.minstack[this.minstack.length-1])
        {
            this.minstack.push(value);
        }

    }
    pop()
    {
        let removed= this.stack.pop();
        if(removed== this.minstack[this.minstack.length-1])
        {
            this.minstack.pop();
        }
    }
    getmin()
    {
        return this.minstack[this.minstack.length-1];
    }

}

const stcak=new Min();

 stcak.push(5);
 stcak.push(4);
 stcak.push(6);
 stcak.push(2);
 stcak.push(9);

 console.log(stcak.getmin());

 stcak.pop();
 
 console.log(stcak.getmin());



