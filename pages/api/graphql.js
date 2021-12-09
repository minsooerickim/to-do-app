'use strict'

const Fastify = require('fastify')
const mercurius = require('mercurius')

const app = Fastify()

const todoList = require('./db.json')

const schema = `
  type Item {
    title: String!
  }

  type Query {
    list: [Item]
  }

  type Mutation {
    createItem(input: String!): Item
    removeItem(input: String!): Item
    deleteItem(id: String!): String
  }
`
class Item {
    constructor({title}) {
      this.title = title
    }
}
const resolvers = {
    Query: {
        list: () => todoList.items,
    },
    Mutation: {
        createItem (title){
            const newItem = new Item(title);
            todoList.items.push(newItem);
            return newItem;
        },
        removeItem (title){
            const idx = todoList.items.findIndex(i => i.title === title)
            if (idx !== -1) {
              todoList.items.splice(idx, 1)
              return `Item ${title} deleted with success`
            }
            throw new Error('Item not found');
      }
    }
}

app.register(mercurius, {
    schema,
    resolvers
})
app.register(require('fastify-cors'), {
  origin: "*",
  methods: ["GET"]
})
app.get('/api/graphql', async function (req, reply) {
    const query = '{ list { title } }'
    return reply.graphql(query)
})
app.post('/api/graphql', async function (req, reply) {
    console.log("post");
    const mutation = `{ createItem(input: "newItemTitle") { title } }`;
    return reply.graphql(mutation);
})
app.put('/api/graphql', async function (req, reply) {
    console.log("put");
    const mutation = `{ deleteItem (title: "Item1") { title } }`;
    return reply.graphql(mutation);
})

app.listen(3001)
