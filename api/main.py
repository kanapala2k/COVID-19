from fastapi import FastAPI

app = FastAPI()

from routers import lookup, search
app.include_router(lookup.router)
app.include_router(search.router)

@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}
