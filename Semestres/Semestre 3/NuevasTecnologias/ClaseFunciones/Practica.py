def registrar_productos():
    productos = []  # Lista para almacenar los productos

    # Solicitar información de 5 productos
    for i in range(5):
        print(f"\nRegistro del producto {i + 1}")

        # Solicitar nombre del producto
        nombre = input("Ingrese el nombre del producto: ")

        # Solicitar valor del producto y convertirlo a float
        valor = float(input("Ingrese el valor del producto: "))

        # Solicitar tipo de producto
        tipo = input("Ingrese el tipo de producto: ")

        # Solicitar cantidad del producto y convertirlo a int
        cantidad = int(input("Ingrese la cantidad del producto: "))

        # Crear un diccionario con la información del producto
        producto = {
            "nombre": nombre,
            "valor": valor,
            "tipo": tipo,
            "cantidad": cantidad
        }

        # Agregar el diccionario a la lista de productos
        productos.append(producto)

    # Mostrar todos los productos registrados
    print("\nProductos registrados: ")
    for producto in productos:
        print(f"Nombre: {producto['nombre']}, Valor: {producto['valor']}, Tipo: {producto['tipo']}, Cantidad: {producto['cantidad']}")

    registrar_productos();

