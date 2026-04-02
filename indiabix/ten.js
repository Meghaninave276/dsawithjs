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
        this.print(a-2,i-1);
       }
       else{
        this.print(a-5,i-1);

       }
    }
}

const r = new Recursion();
r.print(31,5)