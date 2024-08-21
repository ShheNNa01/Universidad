print("Bienvenido al programa de validación de pensiones")
nombre = input("Ingrese su nombre: ")
edad = int(input("Por favor ingrese su edad: "))
genero = input("Por favor ingrese su género (M para masculino y F para femenino): ").upper()

# Hacemos la validación del proceso según la edad y el género
if edad >= 60 and genero == "M":
    print(f"El señor {nombre} es pensionado")
elif edad >= 62 and genero == "F":
    print(f"La señora {nombre} es pensionada")
else:
    if genero == "M":
        print(f"El señor {nombre} no es pensionado")
    elif genero == "F":
        print(f"La señora {nombre} no es pensionada")
    else:
        print(f"{nombre}, el género ingresado no es válido.")

