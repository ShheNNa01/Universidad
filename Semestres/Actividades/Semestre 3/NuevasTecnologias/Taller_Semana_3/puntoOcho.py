#Ejercicio 8. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años que ha cumplido (desde 1 hasta su edad).

edad = int(input("Por favor digite su edad"))
i = 1
while i <= edad:
  print(f"los años que a cumplido son :{i}")
  i += 1