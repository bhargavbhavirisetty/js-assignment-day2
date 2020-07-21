let num;
do
{ num = Number(prompt("enter positive number"));
   if(num > 0)
   {
   console.log(num,typeof num);
   }
   else
   {
       console.log('enter positive number')
   }
}while(!(num > 0))
let arr = [];
for(let i=1;i<=num;i++)
{
    arr.push(i)
}
console.log(arr);

//3.to filter odd numbers
let odd=arr.filter(el=>el%2!=0);
console.log(odd);

//4.cubes of filtered numbers
let oddcubes=arr.filter(el=>el%2!=0).map(el=>el**3);
console.log(oddcubes);