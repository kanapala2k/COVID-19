from fastapi import FastAPI
from elastic_search import elastic

app = FastAPI()
es = elastic.es

from routers import lookup, search
app.include_router(lookup.router)
app.include_router(search.router)

@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}

# test Elasticsearch connection
@app.get("/test_es")
def test_es():
    if es.ping():
        return {"status": "Connected to Elasticsearch"}
    else:
        return {"status": "Failed to connect"}
