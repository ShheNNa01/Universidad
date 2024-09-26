import pandas as pd
#Actividad de la clase
lista = ["NOMBRE","ESTADO","03/08/2024","10/08/2024","17/08/2024","24/08/2024","31/08/2024","07/09/2024","17/09/2024"]
listaCount = [["Johan Sebasitan Rios Galvis", "matriculado", 1,1,1,0,1,1,1], 
            ["Diana Maria Arango Botero", "matriculado", 1,1,1,1,1,1,1],
            ["Ivett Yohana Barrios Perez ", "matriculado", 1,1,1,1,1,1,1],
            ["Yonis Alejandro Cabrales Barreto", "matriculado", 1,1,1,1,1,1,1],
            ["Jefferson Smith Cañas Espinosa", "matriculado", 1,1,1,1,1,1,1],
            ]
listaIndex = [1,2,3,4,5]
dicc1 = pd.DataFrame(listaCount, columns=lista,index=listaIndex)
print (dicc1)