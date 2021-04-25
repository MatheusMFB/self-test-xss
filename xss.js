/* 
Self test XSS
*/

document.write ("Test XSS ORION" + document.cookie);
alert ("ORION" + document.cookie);
