#Procedemos a solicitar la informacion al usuario
print("Bienvenido al programa de validacion de pensiones")
nombre = input("Ingrese su nombre: ")
edad = input("Por favor ingrese su edad: ")
genero = input("Por favor ingrese su genero (MASCULINO O FEMENINO)")

#hacemos la validacion del proceso segun la edad y el genero
if edad >= 65 and genero == "MASCULINO":
    print(f"El señor {nombre} es pensionado")
elif edad >= 60 and genero == "FEMENINO":
    print(f"La señora {nombre} es pensionada")
else:
    print(f"El señor/a {nombre} no es pensionado/a")
