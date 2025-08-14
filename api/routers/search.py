from fastapi import APIRouter
import query_expansion.sentence_transformer_wrapper

router = APIRouter()

@router.get("/search/")
async def lookup(query: str):
    expanded_query = query_expansion.sentence_transformer_wrapper.expanded_query(query)
    print("expanded_query", expanded_query)
    return {"search": query }
