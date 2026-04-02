class Recursion {
    
    printnton(i) {
      
        if(i>8)
        {
            return;
        }
        console.log("1/"+i);
        this.printnton(i*2);
       
    }
}

const r = new Recursion();
  console.log("2 1");
r.printnton(2);







