class Recursion
{
    print(a,i)
    {
        if(i==0)
        {
            return;
        }
        console.log(a);
        if(i%2!=0)
        {
            this.print(a+1,i-1);
        }
        else
        {
            this.print(a+3,i-1);
        }
        
    }
}

const r= new Recursion();
r.print(3,5)