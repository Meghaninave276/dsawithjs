class Recursion
{
    print(a,b,count)
    {
        if(count==0)
        {
            return
        }

        console.log(a);
        console.log(b);
        this.print(a+1,b+1,count-1);
        
    }
}

const r= new Recursion();
r.print(7,10,5);