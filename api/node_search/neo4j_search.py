from neo4j import GraphDatabase

uri = "neo4j+s://9e2ab377.databases.neo4j.io"
username = "neo4j"
password = "ejkuKHHXQEK9G_jBVSu8bdwlH4TyXTxsHtTswFllvHM"
driver = GraphDatabase.driver(uri, auth=(username, password))
driver.verify_connectivity()

def add_strain_vaccine_relation(strain, vaccine):
    with driver.session() as session:
        session.write_transaction(exec_add_strain_vaccine_relation, strain, vaccine)


def exec_add_strain_vaccine_relation(tx, strain, vaccine):
    query = """
        CREATE (a:Strain {name: $strain})
        CREATE (b:Vaccine {name: $vaccine})
        CREATE (b)-[:CURES]->(a)
        """
    tx.run(query, strain=strain, vaccine=vaccine)


def find_strain_vaccine_relations_exec(tx):
    query = """
    MATCH (p:Vaccine)-[:CURES]->(s:Strain)
    RETURN p.name AS vaccine_name, s.name AS strain_name
    """
    result = tx.run(query)
    return [{"vaccine": record["vaccine_name"], "strain": record["strain_name"]} for record in result]

def find_strain_vaccine_relations() :
    with driver.session() as session:
        relation_data = session.read_transaction(find_strain_vaccine_relations_exec)
        print("\nStrain Vaccine relationships:")
        for data in relation_data:
            print(f"{data['vaccine']} cures {data['strain']}")
        return relation_data