from fastapi import APIRouter
import node_search.neo4j_search as neo4j_search

router = APIRouter()

# for now use GET to insert data... need to change to POST later
@router.get("/cure-found/")
async def insert(strain: str, vaccine:str):
    return neo4j_search.add_strain_vaccine_relation(strain, vaccine)

@router.get("/cures/")
async def all_cures():
    return neo4j_search.find_strain_vaccine_relations()