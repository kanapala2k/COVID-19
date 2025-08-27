from fastapi import APIRouter
import query_expansion.sentence_transformer_wrapper
import elastic_search.elastic

router = APIRouter()

@router.get("/search/{str}")
async def lookup(query: str):
    expanded_query = query_expansion.sentence_transformer_wrapper.expanded_query(query)
    print("expanded_query", expanded_query)
    return elastic_search.elastic.multiMatchSearch(query=expanded_query)

@router.put("/search/{str}")
async def lookup(query: str):
    expanded_query = query_expansion.sentence_transformer_wrapper.expanded_query(query)
    print("expanded_query", expanded_query)
    return elastic_search.elastic.multiMatchSearch(query=expanded_query)