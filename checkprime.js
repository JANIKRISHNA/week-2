function prime(n)
{
    i = parseint(n/2); // i = n-1;
    if(n<=0)
    {
        console.log(`${n} is not an integer`);
        return;
    }
    else
    {
        while(i>=2)
        {
            z= n% i;
            i--;
            if(z===0)
            {
                flag++;
            }
        }
    }
    result = flag===1 ? `number ${n} is prime` : `${n} is not prime`
    console.log(result);
    //if(fiag === 1)
    //console.log(`number ${n} is a prime`);
    //else
    //console.log(`number ${n} is not a prime`);
}

i,z;
flag=1;
n=127;
prime(n);
