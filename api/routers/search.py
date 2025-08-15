from fastapi import APIRouter
from elastic_search import elastic

router = APIRouter()

@router.get("/search/")
async def lookup(query: str):
    retriever_object = {
        "standard": {
            "query": {
                "multi_match": {
                    "query": query,
                    "fields": [
                        "title",
                        "abstract"
                    ]
                }
            }
        }
    }
    search_response = elastic.es.search(
        index="covid_19",
        retriever=retriever_object
    )
    return [
        {
            "title": hit["_source"]["title"],
            "abstract": hit["_source"]["title"]
        }
        for hit in search_response["hits"]["hits"]
    ]