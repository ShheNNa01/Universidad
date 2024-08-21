#Ejercicio 5. Imprimir números pares hasta un número dado
numero = int (input("Por favor ingrese el numero hasta el cual desea saber los numeros pares"))

i = 2
while i <= numero:
  if i % 2 == 0:
    print(i)
  i += 1