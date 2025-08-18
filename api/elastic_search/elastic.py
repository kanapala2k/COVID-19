from elasticsearch import Elasticsearch

# Connect to Elasticsearch
es = Elasticsearch(
    "https://my-elasticsearch-project-dcdc60.es.us-east-1.aws.elastic.cloud:443",
    api_key="WXY3dHBKZ0J0aFZlM1hLRWp2V206cmlmR1Q0ODlkOGNCU1BVaTBsUFpLdw=="
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
                        "abstract"
                    ]
                }
            }
        }
    }
    search_response = es.search(
        index="covid_19",
        retriever=retriever_object
    )
    return search_response["hits"]["hits"]