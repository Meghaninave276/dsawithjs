class Recursion
{
    print(a,i)
    {
        if(i==0)
        {
            return;
        }
        console.log(a);
       
        this.print(a+2,i-1);
    }
}

const r = new Recursion();
r.print(2,6)