class Recursion
{
    print(a,b,i,limit)
    {
        if(i>limit)
        {
            return;
        }

        console.log(a);
       
        

        this.print(a*i-b,b+1,i+1,limit);
    }
}

const r = new Recursion();
r.print(8,2,1,7);





