def faceted_search(es, index_name, query, filters=None):
    base_query = {
        "bool": {
            "must": [ { "match": { "text": query } } ],
            "filter": [ { "term": {k:v} } for k, v in (filters or {} ).items() ]
        }
    }

    return es.search(index=index_name, body={
        "query": base_query,
        "aggs": {
            "product_names": { "terms": { "field": "product_name" } },
            "ai_tags": { "terms": { "field": "ai_tag" } },
        }
    })