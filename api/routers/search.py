from fastapi import APIRouter
from elastic_search import elastic

router = APIRouter()

@router.get("/search/")
async def lookup(query: str):
    return elastic.multiMatchSearch(query=query)