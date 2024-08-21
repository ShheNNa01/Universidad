#Ejercicio 6. Imprimir Números Primos.

def es_primo(n):
  if n <= 1:
    return False
  for i in range(2, n):
    if n % i == 0:
      return False
  return True

numero = int(input("Digite hasta donde quiere conocer los números primos"))

for i in range(2, numero + 1):
  if es_primo(i):
    print(f"El {i} es primo")
  else :
    print(f"El {i} no es primo")
