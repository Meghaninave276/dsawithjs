class Recursion
{
    print(a,i)
    {
        if(i==0)
        {
            return;
        }
        console.log(a+ " " +a);
        this.print(a-13, i-1);
        
    }
}


const r= new Recursion();
r.print(53,4);


