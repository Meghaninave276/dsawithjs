class Recursion
{
    print(a,i)
    {
        if(i>6)
        {
            return;
        }
        console.log(a);
       
       this.print(a+i,i+1);
    }
}

const r = new Recursion();
r.print(201,1)



