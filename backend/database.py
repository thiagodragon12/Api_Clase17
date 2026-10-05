import sqlite3

def getConexion():
    conexion = sqlite3.connect("botellas.db")
    conexion.row_factory = sqlite3.Row
    try:
        yield conexion
    finally:
        conexion.commit()
        conexion.close()

def initDB():
    conexion = sqlite3.connect("botellas.db")
    conexion.execute("CREATE TABLE IF NOT EXISTS botellas (id INTEGER PRIMARY KEY, nombre TEXT, creador TEXT, fechaV FLOAT, tipo TEXT, cantidad TEXT)")
    conexion.commit()
    conexion.close()