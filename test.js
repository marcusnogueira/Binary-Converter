function convert(num, base) {
return parseInt(num,10).toString(2);
}
function convert(n, base) {

switch (base)
{
case 'bin':
return parseInt(n, 10).toString(2);
break;
case 'hex':
return parseInt(n, 10).toString(16);
break;
case 'oct':
return parseInt(n, 10).toString(8);
break;
default:
return("You messed up not us");
}
}
