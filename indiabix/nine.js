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
        this.print(a,b+6,i-1);
    }
}

const r = new Recursion();
r.print(8,22,6)