'use strict'

const Fastify = require('fastify')
const mercurius = require('mercurius')

const app = Fastify()

const todoList = require('./db.json')
const fs = require('fs');

const schema = `
  type Item {
    title: String!
  }

  type Query {
    list: [Item]
  }

  type Mutation {
    addItemMutation(input: String!): Item
    removeItem(input: String!): Item
    deleteItem(id: String!): String
  }
`
class Item {
    constructor(input) {
      console.log("constructor: " + input);
      this.title = input;
    }
}
const resolvers = {
    Query: {
        list: () => todoList
    },
    Mutation: {
        addItemMutation (_,  { input } ){
            console.log('Title: ', input);
            const newItem = new Item(input);
            console.log(newItem)
        
            var data = fs.readFileSync('./pages/api/db.json');
            var obj = JSON.parse(data);

            let tmp = {
              "title": input
            }

            obj.push(tmp);
            var newData = JSON.stringify(obj);

            fs.writeFile('./pages/api/db.json', newData, err => {
              // error checking
              if(err) throw err;
              
              console.log("New data added");
            });

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
  methods: ['POST', 'GET', 'DELETE', 'OPTIONS', 'PUT', 'HEAD'],
})

const config = {
  api: {
    bodyParser: false,
  },
}
module.exports = {config, resolvers}

app.listen(3001);