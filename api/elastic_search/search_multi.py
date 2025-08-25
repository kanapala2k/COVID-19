def multi_match_search(es, index_name, query):
    return es.search(index=index_name, body={
        "query": {
            "multi_match": {
                "query": query
            }
        }
    })