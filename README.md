# POSTGRES DATABASE

- To create a database

* docker run --name code_drops_tests -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=courses_prisma -p 5432:5432 -d postgres

- To create a database for tests

* docker run --name supertest -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=courses_prisma -p 5433:5433 -d postgres
