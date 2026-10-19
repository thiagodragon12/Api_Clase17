from fastapi import FastAPI, Depends
from database import getConexion, initDB
from models.BaseModel import Botella
from managers.ManageresBotella import ViendoBotellas
from fastapi.middleware.cors import CORSMiddleware
ViendoBotellas = ViendoBotellas()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500", "http://localhost:5500"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup():
    initDB()

@app.post("/Agregar-Botella")
def AgregarBotella(botella: Botella, db = Depends(getConexion)):
    print(botella)
    return ViendoBotellas.AgregarBotella(botella, db)

@app.put("/Modificar-Botella/{id}")
def ModificarBotella(id: int, botella: Botella, db = Depends(getConexion)):
    print(botella)
    return ViendoBotellas.ModificarBotella(id, botella, db)

@app.delete("/Eliminar-Botella/{id}")
def EliminarBotella(id: int, db = Depends(getConexion)):
    return ViendoBotellas.EliminarBotella(id, db)

@app.get("/Ver-Botellas")
def VerBotellas(db = Depends(getConexion)):
    return ViendoBotellas.VerBotellas(db)

@app.get("/Ver-Botella/{id}")
def VerBotella(db = Depends(getConexion), id = int):
    return ViendoBotellas.VerBotella(db, id)
