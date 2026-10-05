import pydantic 

class Botella(pydantic.BaseModel):
    nombre: str
    creador: str
    fechaV: float
    tipo: str
    cantidad:str