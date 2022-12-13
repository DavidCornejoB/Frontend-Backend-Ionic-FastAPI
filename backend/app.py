from typing import Union
from fastapi import FastAPI
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.middleware.cors import CORSMiddleware

import database

#SepUp CORS

#correr con: uvicorn app:app --reload --host 0.0.0.0 --port 80
origins = ["*"]

conexion = database.DBConnector()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"hello":"world"}

@app.post("/crear/{cedula},{nombres},{apellidos},{telefono},{direccion}")
def read_item(cedula: str, nombres: str, apellidos: str, telefono: str, direccion: str):
    print(cedula, nombres, apellidos, telefono, direccion)
    try:
        conexion.execute_query(conexion.sql_dict.get("crearUsuario"),(cedula, nombres, apellidos, telefono, direccion))
        conexion.execute_query('commit', None)
        return {"mensaje": "Usuario creado"}
    except:
        return {"mensaje": "Error"}

@app.get("/listar")
def getCLients():
    usuario=conexion.execute_query(conexion.sql_dict.get('obtener'),())
    return usuario