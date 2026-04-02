class Recursion
{
    print(i)
    {
      if(i<24)
      {
        return;
      }
      console.log(i);
      this.print(i-=2);
    }
   
    

    
}
const r = new Recursion();

r.print(36);




