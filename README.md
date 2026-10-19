# README DEL TRABAJO EVALUATIVO DE LEO:
## TEMA ELEGIDO: 
### Elegi la tematica de marcas de botellas, porque, cuando estaba pensando en que elegir, vi una botella y se me ocurrio hacerlo de marcas de botellas.
## ejemplo de cada uno de los HTTP:
   ### # GET: permite ver los objetos o variables creadas en la base de datos
   ### # GET/ID: permite ver un objeto o variable en la base de datos mediante la id
   ### # POST: permite crear un objeto con los valores previamente creados, estos son:
| datos | tipo de datos | ejemplo |
|-------------|:------------:|:--------------:|
| ID       | int o entero | 1           |
| NOMBRE   | str o texto  | "coca-cola"  |
| CREADOR  | str o texto  | "pepsi"      |
| FECHAV   | float        | 3005,27     |
| TIPO     | str          | "vidrio"     |
| CANTIDAD | str          | "500ML"     |


   ### Si los valores estan bien argumentados saltara el codigo 201 CREATED, que indica que fue creado, en cambio, si hay un solo dato que este mal, saltara el ERROR 422, que indica que no se ha encontrado o se a puesto mal un dato a crear.
   ### # PUT: le permite al usuario modificar (mediante la id) uno de los objetos modificando todo en el proceso. si esta bien modificada te saltara 200 OK, que indica que todo a salido con exito, per si no es así, saldra el 422.
   ### # DELETE: este proceso le permitira al cliente eliminar una de los objetos ya guardados, si se elimino correctamente, saltara el codigo 200 OK, pero si el id no es existente saltara e 404 ERROR, que vendria a significar que el código no logra funcionar.

# COMO INSTALAR Y EJECUTAR EL ARCHIVO
   ## Instalar:
   ### lo primero y más importante es copiar el repositorio de github, esto se hace con este codigo:
```
   git clone https://github.com/thiagodragon12/Api_Clase17.git>
```
   ### Una vez hecho esto, deveras tener la terminal conectada con el archivo del repositorio, y... desde ahi crear el entorno virtual:
```
   py -m venv env
```
   ### desde ahi, lo activara con:
```
   source venv/bin/activate (para linux) y env/Scripts/activate (para windows)
```
   ### luego de todo esto, descargara todas las dependencias del archivo requirement.txt con el siguiente codigo:
```
   pip install -r requirements.txt
```
   ## ejecución
   ### y, abriras la api con uvicorn mediante el siguiente codigo:
```
   uvicorn main:app -- reload
```
   ### como ultima acción para ejecutarlo, iras al frontend y desde el index (teniendo instalado el Live Server) lo abriras

## CODIGO DE PRUEBA (GET)
***esto daria el código 200***
```
  { 
      "id": 1, 
      "nombre": "coquita",
      "creador": "CC",
      "fechaV": 300529,
      "tipo": "plastico",
      "cantidad": "500ml"      
   },
```
***esto al contrario del 200 daria 422***
```
  { 
      "id": 1, 
      "nombre": "coquita",
      "creador": "CC",
      "fechaV": "hola",
      "tipo": "plastico",
      "cantidad": "500ml"      
   },
```

# TECNOLOGIAS USADAS
## backend
      * Python
      * FastAPI
      * SQLite3
      * Pydantic
## frontend

      * HTML
      * CSS
      * JS 
# ESTRUCTURA DEL PROYECTO
```
Clase18/
├── backend/
│   ├── main.py                  → app FastAPI, rutas y CORS
│   ├── managers/
│   │   └── ManageresBotella.py    → consultas SQL (ver, agregar, modificar, borrar)
│   ├── models/
│   │   └── BaseModel.py           → modelo Pydantic
│   ├── database.py               
│   ├── botellas.db              → base de datos con los objetos creados
│   │                   
│   └── requirements.txt
├── docs           → diagramas, video del programa funcionando
├── frontend/                 
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── java/       
│       └── main.js    → conecta el front y el back
│   
│       
│
└── README.md

```
# Programa en funcionamiento:
![este es un texto alternativo](programacion\Clase18\docs\prueba.mp4)
## Pregunta 1 — El ciclo de vida de una petición  

#### 1°_ Cuando el usuario hace click en "Guardar", la acción solicita (mediante CORS) la conexion a la api, (si no escuentra la dirección o no tiene permiso dara el ERROR 422) luego, la acción envia los datos y el header como Json para que el Pydantic los defina y los registre para poder saber si los toma de forma correcta o no, gracias a lo anteriormente dicho, accede al agregar y a las acciones de este mismo (mediante el manager) y desde ahi, ejecuta la acción a realizar y por ultimo, lo ingresa al DB, le manda al usuario el codigo 201 CREATED y... la api regresa los datos de forma json para que se pueda volver a armar la tabla y así, el usuario podra visualizar el guardado del nuevo bojeto creado.

![este es un texto alternativo](programacion\Clase18\docs\punto1.png)

## Pregunta 2 — ¿Quién es el cliente y quién es el servidor?

#### 2°_ El Cliente vendria a ser la parte del Frontend, ya que... es la parte de la pagina en la que las solicitudes o acciones son pedidas, en cambio, el Servidor seria la parte contraria, que es en la que se realizan y se mandan las respuestas de esas acciones.
#### La diferencia más notoria vendria a ser que la aplicación de escritorio tradicional verndria a funcionar mayormente por los componentes de tu ordenador o laptop, en cambio, el modelo Cliente-Servidor (como su propio nombre lo indica) permite que el cliente mande una acción a realizar y, el servidor contiene los datos y responde a esa acción.
#### Ademas de que la aplicación de escritorio tradicional no se requiere conexion a internet para su buen funcionamiento, en cambio, en el modelo Cliente-Servidor se requiere de conexión a interntet para su funcionamiento.

![este es un texto alternativo](programacion\Clase18\docs\punto2.png)

## Pregunta 3 — HTTP como lenguaje común

* 3°_Los métodos HTTP son la manera en la que la solicitud HTTP espera que el servidor ejecute la acción.Existen 4 maneras de esta solicitud:
     * #GET: permite al cliente en cuestion poder ver los datos que se ingresaron o ya han sido ingresados en una base de datos.
     * #POST: permite que el cliente ingrese datos en una base de datos.
     * #PUT: permite al cliente lograr modificar los datos de una variable u objeto ya ingresados en una base de datos.
     * #DELETE: permite al cliente eliminar variables u objetos dentro de una base de datos mediante (en nuestro caso) la id.

* En estos métodos existen códigos de estado (son numeros de hasta 3 digitos que le notifican al programador de la API, si ese método funciona correctamente o si en el método a ocurrido un error), de este existen varios, pero los que voy a resaltar son:
     * 200 OK: esta indica que la solicitud se ha realizado con exito.
     * 201 CREATED: esta te indica que la solicitud dio resultado a un nuevo recurso en el servidor.
     * 404 NOT FOUND: este código te indica que no se logra encontrar la pagina o servicio solicitado.
     * 422 UNPROCESSABLE CONTENT: este codigo indica que la sintaxis y la solicitud se entendieron perfectamente, pero... la forma en la que se colocaron los datos no es valida.

| Operacion | Metodo | Ruta | Codigo de éxito | Código de Error|
|-------------|:------------:|:--------------:|:---------:|:--------:
| CREAR       | POST    |   /Agregar-Botella | 201|    |
| VER         | GET     |   /Ver-Botellas    | 200| 422|
| MODIFICAR   | PUT     | /Modificar-Botella | 201| 422|
| ELIMINAR    | DELETE  | /Eliminar-Botella  | 200| 422|
| VER(ID)     | GET     | /Ver-Botella/{id}  | 200| 422|


## Pregunta 4 — CORS

#### 4°_ El SOP (same-origin policy) es un concepto que regula la seguridad de las aplicaciones web, ya que esta solo permite que las paginas se accedan entre si, solo si tienen el mismo origen (combinación de esquemas URL, nombre de host y número de puerto).
#### Mayormente se bloquean las solicitudes entre orígenes distintos, ya que alguno de esas solicitudes podria ser una pagina que pueda acceder a datos confidenciales, por eso es que se usa el middleware CORS para permitir a ciertos origenes puedan o no entrar a la api.

![este es un texto alternativo](programacion\Clase18\docs\punto4.png)

## Pregunta 5 — Separación de responsabilidades

#### 5°_Por que la responsabilidad de los endpoint no se basa en acceder a la base de datos y agregar a la base de datos cada dato individualmente, sino, que lo endpoints lo unico que deberian hacer es solo trabajar o hacer lo que se les ordeno y para lo que fueron creados.
#### Los beneficios que tiene implementar la inyección de datos a la API es que la vuelve más organizada y, que los objetos o datos ya no son creados desde los endpoints, sino, que ya hay alguien que retiene o ya crea los datos para que los demas los utilizen.
#### Lo que terminaria pasando es que, la pagina web que estes creando en ese momento colapse de tantas cantidades de conexiones que se establecen por cada línea de código.

## Pregunta 6 — JSON como formato de intercambio

#### 6°_Por que (segun lo que yo llego a entender) es la forma más eficaz de lograr contactar a las API utilizadas y proporcionar toda la información completa de una sola vez, ademas de ser de vital importancia para paginas web donde su flujo de datos es de vital importancia.
#### Este transforma los datos mediante un proceso llamado "coerción de datos" que garantiza que los datos que hallas ingresado sean del correspondiente, la validación garantiza varias cosas muy importantes, una de ellas es que todos los valores requeridos esten presentes, que sean los tipos que se requieren y (si tiene limites) garantiza la revisión de la cantidad de caracteres minimos y maximos del campo y comprobar que no lo sobrepasen.

![este es un texto alternativo](programacion\Clase18\docs\punto6.png)

## Pregunta 7 — Apatridia (sin estado)

#### 7°_Esto significa que, trata cada petición realizada por el cliente como una transacción independiente que no tiene relación con cualquier solicitud anterior, es decir, no guarda información sobre las peticiones anteriores.
#### Si hablamos del estado como los datos son ingresados, el estado seria guardado en la base de datos, en cambio, si hablamos de las solicitudes anteriores que no se guardan, al HTTP ser sin estado, trata cada solicitud individualmente, por lo que no serian guardadas. Esta tiene varias ventajas, ya que al ser 3 en vez de 1 permite que sea más eficiente, pueda recibir muchas más slicitudes y no colapse de tantas solicitudes.