from elasticsearch import Elasticsearch

# Connect to Elasticsearch
es = Elasticsearch(
    "https://my-elasticsearch-project-f98124.es.us-central1.gcp.elastic.cloud:443",
    api_key="SW53VjNaZ0JjMDNHb0tIc0dNSTA6UElxa0s3TDhWaldIZjlTWHprVU1DUQ=="
)

# Test connection
if es.ping():
    print("Connected to Elasticsearch!")
else:
    print("Connection failed.")

def multi_match_search(query: str):
    retriever_object = {
        "standard": {
            "query": {
                "multi_match": {
                    "query": query,
                    "fields": [
                        "title",
                        "text",
                        "section"
                    ]
                }
            }
        }
    }
    search_response = es.search(
        index="sentences_poc",
        retriever=retriever_object
    )
    return search_response["hits"]["hits"]