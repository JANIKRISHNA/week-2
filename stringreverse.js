let reverse = (string) =>
{
   let a= string.length;
   console.log(a);
   let output = '';
   for(let i=a-1; i>=0; i--)
    {
        output += string[i];
    }
    return output;
}
let string = "i am learing js";
console.log(reverse(string));