function validateMail()
{
    var mail = document.getElementById('mail').value;
    var ex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if(mail.includes('.com') && mail.includes('@'))
    {
        
        document.getElementById('test').innerHTML = "validate Mail id";
    }
    else
    {
        
        document.getElementById('test').innerHTML = "Invalid Mail id";
    }
    
}
function genrateRandom()
{
    var rand = Math.floor((Math.random() * 50)+ 1);
    document.getElementById('test1').innerHTML = "Random number is : "+rand;
}
function Convert()
{
    var str = document.getElementById('val').value;
    var type;
    for(let i=0;i<str.length;i++)
    {
        var x = str.charAt(i);
        if((x.codePointAt(0)>=65 && x.codePointAt(0)<=91) || (x.codePointAt(0)>=97 && x.codePointAt(0)<=123))
        {
            var res= x.toString();
            type = 'string';
            break;
        }
        else
        {
            x = Number.parseInt(x);
            type='number';
        }
    }
    if(type=='number')
    {
        document.getElementById('test2').innerHTML = "Number is : "+str;
    }
    else
    {
        document.getElementById('test2').innerHTML = "String is : "+str;
    }
}
function minMax()
{
    var x = document.getElementById('size').value;
    var array =[];
    for(let i=0;i<x;i++)
    {
        array[i] = prompt('Enter an array element');
    }
    var min = Number.MAX_VALUE;
    var max= Number.MIN_VALUE;
    for(let i=0;i<x;i++)
    {
        if(min>array[i])
        {
            min = array[i];
        }
        if(max<array[i])
        {
            max = array[i];
        }
    }
    document.getElementById('test3').innerHTML ='Minimum : ' +min +' Maximum :'+max;
}
function duplicates()
{
    var x = document.getElementById('len').value;
    var arr =[];
    for(let i=0;i<x;i++)
    {
        arr[i] = prompt('Enter an array element');
    }
    let res =[];
    let j=0;
    for(let i=0;i<x;i++)
    {
        if(!res.includes(arr[i]))
        {
            res[j] = arr[i];
            j++;
        }
    }
    document.getElementById('test4').innerHTML = res;
}
function joining()
{
    var x = document.getElementById('l').value;
    var arr =[];
    for(let i=0;i<x;i++)
    {
        arr[i] = prompt('Enter an array element');
    }
    var res = arr.join('+');
    document.getElementById('test5').innerHTML =res;
}
function Reverse()
{
    var x = document.getElementById('num').value;
    var res =0;
    while(x>0)
    {
        let r = x%10;
        res = res*10 +r;
        x = parseInt(x/10);
    }
    document.getElementById('test6').innerHTML =res;
}
function Capital()
{
    var x = document.getElementById('str').value;
    var words = x.split(' ');
    var arr =[];
    for(let i=0;i<words.length;i++)
    {
        arr[i] = words[i].charAt(0).toUpperCase() +words[i].slice(1,words[i].length);
    }
    document.getElementById('test7').innerHTML = arr.join(" ");
    
}