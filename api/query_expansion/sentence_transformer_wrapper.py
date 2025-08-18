from sentence_transformers import SentenceTransformer, util
from sympy.printing.pytorch import torch


def expanded_query (query:str) -> str:
    # Load a pre-trained Sentence Transformer model
    model = SentenceTransformer('paraphrase-MiniLM-L6-v2')

    # Candidate expansion terms (can be extracted from a corpus)
    candidate_terms = ["corona virus", "vaccine", "contagious"]

    # Encode query and candidate terms
    query_embedding = model.encode(query, convert_to_tensor=True)
    candidate_embeddings = model.encode(candidate_terms, convert_to_tensor=True)

    # Calculate cosine similarity
    cosine_scores = util.cos_sim(query_embedding, candidate_embeddings)[0]

    # Get top-k expansion terms
    top_k = 3
    top_results = torch.topk(cosine_scores, k=top_k)

    expanded_terms = [candidate_terms[idx] for idx in top_results.indices]

    print(f"Original Query: {query}")
    print(f"Expanded Terms: {expanded_terms}")
    print(f"Expanded Query: {query} {' '.join(expanded_terms)}")
    return query.join(expanded_terms)