class Recursion
{
    print(a,b,i)
    {
        if(i==0)
        {
            return;
        }
        console.log(a);
        console.log(b);
        
        
       this.print(a-10,b+5,i-1);
    }
}

const r = new Recursion();
r.print(80,10,6)



