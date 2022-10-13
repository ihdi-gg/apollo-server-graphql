create migration script:
go to db folder where knexfile.ts is and type:
```
knex migrate:make create_user_table -x ts
```

run migration:
```
knex migrate:latest
```