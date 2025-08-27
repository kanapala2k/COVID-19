from fastapi import APIRouter

router = APIRouter()

@router.get("/lookup/{str}")
async def lookup(query: str):
    return {"looking up": query }

@router.put("/lookup/{str}")
async def lookup(query: str):
    return {"looking up": query }