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

def es_search(query: str):
    retriever_object = {
        "standard": {
            "query": {
                "knn": {
                    "field": "embedding",
                    "num_candidates": 100,
                    "query_vector_builder": {
                        "text_embedding": {
                            "model_id": "sentence-transformers__all-minilm-l6-v2",
                            "model_text": query
                        }
                    }
                }
            }
        }
    }
    search_response = es.search(
        index="documents",
        retriever=retriever_object
    )
    return search_response["hits"]["hits"]