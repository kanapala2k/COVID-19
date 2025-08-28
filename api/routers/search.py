from fastapi import APIRouter
import query_expansion.sentence_transformer_wrapper
import elastic_search.elastic

router = APIRouter()

@router.get("/search/")
async def lookup(query: str):
    expanded_query = query_expansion.sentence_transformer_wrapper.expanded_query(query)
    print("expanded_query", expanded_query)
    return elastic_search.elastic.es_search(query=expanded_query)

@router.post("/search/{str}")
async def lookup(query: str):
    expanded_query = query_expansion.sentence_transformer_wrapper.expanded_query(query)
    print("expanded_query", expanded_query)
    return elastic_search.elastic.es_search(query=expanded_query)

@router.get("/search_v2/")
async def lookup_2(query: str):
    print("query", query)
    expanded_query = query_expansion.sentence_transformer_wrapper.expanded_query(query)
    print("expanded_query", expanded_query)
    query_vector = query_expansion.sentence_transformer_wrapper.query_vector(query)
    print("query_vector", query_vector)
    return elastic_search.elastic.es_search_by_vector(query_vector=query_vector)
