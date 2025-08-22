from sentence_transformers import SentenceTransformer, util
from sympy.printing.pytorch import torch

def expanded_model_query (query:str, mocked_data:str) -> str:
    # 1. Load a pre-trained Sentence Transformer model
    # 'all-MiniLM-L6-v2' is a good general-purpose model for semantic similarity.
    model = SentenceTransformer('all-MiniLM-L6-v2')

    # 2. Define a corpus of sentences and a query sentence
    # mocked_data = [
    #    "A man is eating food.",
    #    "The girl is carrying a baby.",
    #    "A man is riding a horse.",
    #    "A woman is playing violin.",
    #    "The man is enjoying his meal at the table.",
    #    "This is an example for POC purpose"
    # ]
    # query = "A person is having dinner." ***/

    # 3. Encode the corpus and the query into embeddings
    corpus_embeddings = model.encode(mocked_data, convert_to_tensor=True)
    query_embedding = model.encode(query, convert_to_tensor=True)

    # 4. Calculate cosine similarity between the query and corpus embeddings
    # Cosine similarity measures the angle between two vectors, indicating their similarity.
    cosine_scores = util.cos_sim(query_embedding, corpus_embeddings)[0]

    # 5. Find the top N most similar sentences
    top_k = min(3, len(mocked_data))
    top_results = util.topk(cosine_scores, k=top_k)

    print("Query:", query)
    print("\nTop 3 most similar sentences in corpus:")
    expanded_terms = [mocked_data[idx] for score, idx in zip(top_results[0], top_results[1])]

    print(f"Original Query: {query}")
    print(f"Expanded Terms: {expanded_terms}")
    print(f"Expanded Query: {query} {' '.join(expanded_terms)}")

    return query.join(expanded_terms)