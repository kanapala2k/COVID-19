from fastapi import APIRouter
import query_expansion.sentence_transformer_wrapper
from elastic_search.elastic import es
from elastic_search.search_multi import multi_match_search
from elastic_search.search_faceted import faceted_search

router = APIRouter()

@router.get("/search/")
async def lookup(query: str):
    # expanded_query = query_expansion.sentence_transformer_wrapper.expanded_query(query)
    # print("expanded_query", expanded_query)
    # return elastic_search.elastic.multi_match_search(query=expanded_query)
    index_name = "kibana_sample_data_elasticsearch_documentation"

    # results = multi_match_search(es, index_name, query)
    results = faceted_search(es=es, index_name=index_name, query=query)

    return {
        "results": [hit["_source"] for hit in results["hits"]["hits"]],
        "facets": results.get("aggregations", {})
    }
