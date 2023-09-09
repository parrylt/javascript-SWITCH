document.write("<h1>Case<h1>");
var op = parseInt(prompt("Digite um número"));
switch(op)
{
	case 1: 
	document.write("+");
	break;
	case 2: 
	document.write("-");
	break;
	case 3: 
	document.write("*");
	break;
	default: 
	document.write("Opção inválida");
	break;
	
}