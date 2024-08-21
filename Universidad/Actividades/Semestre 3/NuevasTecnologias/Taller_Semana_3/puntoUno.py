#Ejercicio 1. Tabla de Multiplicar de un Número
numero = int ( input("Por favor ingrese un numero para iniciar la tabla de multiplicar: "))


for i in range(1, 11):
    print(f"{numero} x {i} = {numero * i}")
