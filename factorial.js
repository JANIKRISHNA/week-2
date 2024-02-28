function factorial(i)
{
    if(i<=0)
    {
        console.log("not an integer");
        return 1;
    }
    else
    {
        while( i>=1)
        {
            z *= i //z= i* Z;
            i--;
        }
        console.log(z);
    }
}
let i=9;
let z=1;
factorial(i);