#Ejercicio 11. Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el número de años, y muestre por pantalla el capital obtenido en la inversión cada año que dura la inversión.

cant = float (input("Por favor ingresa la cantidad a invertir: "))

interes = float (input("Por favor ingresa el interés anual: "))

anos = int(input("Por favor ingrese los años a invetir: "))

for ano in range(1, anos+1):
  capital = cant * (1 + interes/100)**ano
  print(f"El capital obtenido en el año {ano} es: {capital:.2f}")