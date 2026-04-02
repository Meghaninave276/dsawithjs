class Recursion
{
    print(a,i)
    {
        if(i==0)
        {
            return;
        }
        console.log(a);
        this.print(a+0.8,i-1);
    }
}

const r = new Recursion();
r.print(1.5,5)