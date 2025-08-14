from fastapi import APIRouter

router = APIRouter()

@router.get("/search/")
async def lookup(query: str):
    return {"search": query }