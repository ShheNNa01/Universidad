# Procedemos a solicitar la informacion al usuario
palabra1 = input("Ingresa la primera palabra: ")
palabra2 = input("Ingresa la segunda palabra: ")
palabra3 = input("Ingresa la tercera palabra: ")
palabra4 = input("Ingresa la cuarta palabra: ")

# Para el proceso de validacion de cual palabra tiene mas letras manejaremos el termino LEN
longitud1 = len(palabra1)
longitud2 = len(palabra2)
longitud3 = len(palabra3)
longitud4 = len(palabra4)

# Compara las longitudes para encontrar la mayor
PalabraMasLarga = palabra1

if longitud2 > len(PalabraMasLarga):
    PalabraMasLarga = palabra2

if longitud3 > len(PalabraMasLarga):
    PalabraMasLarga = palabra3

if longitud4 > len(PalabraMasLarga):
    PalabraMasLarga = palabra4

# Mostramos en consola cual seria la palabra mas larga despues de la validacion dela parte logica 
print("La palabra con mayor longitud es:", PalabraMasLarga)
