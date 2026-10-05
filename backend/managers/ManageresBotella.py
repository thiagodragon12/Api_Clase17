from models.BaseModel import Botella
from sqlite3 import Connection

class ViendoBotellas:
    def __init__(self):
        pass

    def VerBotellas(self, conexion: Connection):
        res = conexion.execute("SELECT * FROM botellas").fetchall()
        return [dict(item) for item in res]
    
    def VerBotella(self, conexion: Connection, id: int):
        res = conexion.execute("SELECT * FROM botellas WHERE id = ?", (id,)).fetchone()
        return [res]

    def AgregarBotella(self, botella: Botella, conexion: Connection):
        conexion.execute("INSERT INTO botellas (nombre, creador, fechaV, tipo, cantidad) VALUES (?, ?, ?, ?, ?)", (botella.nombre, botella.creador, botella.fechaV, botella.tipo, botella.cantidad))
        return "Botella Agregada"
    
    def ModificarBotella(self, id: int, botella: Botella, conexion: Connection ):
        conexion.execute("UPDATE botellas SET nombre = ?, creador = ?, fechaV = ?, tipo = ?, cantidad = ? WHERE id = ?", (botella.nombre, botella.creador, botella.fechaV, botella.tipo, botella.cantidad, id))
        return "Botella Cambiada"

    def EliminarBotella(self, id: int, conexion: Connection):
        conexion.execute("DELETE FROM botellas WHERE id = ?", (id,))
        return "Botella Eliminada"