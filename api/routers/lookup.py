from fastapi import APIRouter

router = APIRouter()

@router.get("/lookup/")
async def lookup(query: str):
    return {"looking up": query }