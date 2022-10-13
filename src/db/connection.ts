import Knex from 'knex'
import KnexTinyLogger from 'knex-tiny-logger'
import db from './knexfile'

export default KnexTinyLogger(Knex(db))