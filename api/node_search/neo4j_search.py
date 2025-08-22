from neo4j import GraphDatabase


def __connect():
    uri = "neo4j+s://9e2ab377.databases.neo4j.io"
    username = "neo4j"
    password = "ejkuKHHXQEK9G_jBVSu8bdwlH4TyXTxsHtTswFllvHM"
    driver = GraphDatabase.driver(uri, auth=(username, password))
    driver.verify_connectivity()
    return driver

def add_strain_vaccine_relation(strain, vaccine):
    driver = __connect()
    with driver.session() as session:
        session.execute_write(__add_strain_vaccine_relation, strain, vaccine)
        driver.close()


def __add_strain_vaccine_relation(tx, strain, vaccine):
    query = """
        CREATE (a:Strain {name: $strain})
        CREATE (b:Vaccine {name: $vaccine})
        CREATE (b)-[:CURES]->(a)
        """
    tx.run(query, strain=strain, vaccine=vaccine)


def __find_strain_vaccine_relations(tx):
    query = """
    MATCH (p:Vaccine)-[:CURES]->(s:Strain)
    RETURN p.name AS vaccine_name, s.name AS strain_name
    """
    result = tx.run(query)
    return [{"vaccine": record["vaccine_name"], "strain": record["strain_name"]} for record in result]

def find_strain_vaccine_relations() :
    driver = __connect()
    with driver.session() as session:
        relation_data = session.execute_read(__find_strain_vaccine_relations)
        driver.close()
        print("\nStrain Vaccine relationships:")
        for data in relation_data:
            print(f"{data['vaccine']} cures {data['strain']}")
        return relation_data