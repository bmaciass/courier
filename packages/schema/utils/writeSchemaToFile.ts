import { printSchema, lexicographicSortSchema } from 'graphql'
import { writeFileSync } from 'node:fs';
import {schema} from '~/index'
const schemaAsString = printSchema(lexicographicSortSchema(schema));

writeFileSync('../schema.graphql', schemaAsString);