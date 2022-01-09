'use strict'

const Fastify = require('fastify')
const mercurius = require('mercurius')

const app = Fastify()

const todoList = require('./db.json')
const fs = require('fs');
const { toGlobalId } = require('graphql-relay')

const schema = `
  type Item {
    title: String!
    id: ID!
  }

  type Query {
    list: [Item]
  }

  type Mutation {
    addItemMutation(input: String!): Item
    deleteItemMutation(input: String!): String
  }
`
class Item {
    constructor(input) {
      console.log("constructor: " + input);
      this.title = input;
      this.id = toGlobalId(Item, input);
    }
}
const resolvers = {
    Query: {
        list: () => todoList,
    },
    Mutation: {
        addItemMutation (_,  { input } ){
            const newItem = new Item(input);
        
            var data = fs.readFileSync('./pages/api/db.json');
            var obj = JSON.parse(data);

            console.log(newItem.title + " anddd " + newItem.id)
            let tmp = {
              "title": newItem.title,
              "id": newItem.id
            }

            obj.push(tmp);
            var newData = JSON.stringify(obj);

            fs.writeFile('./pages/api/db.json', newData, err => {
              // error checking
              if(err) throw err;
              
              console.log("'" + input + "' task added");
            });

            return newItem;
        },
        deleteItemMutation(_,  { input } ){
          var data = fs.readFileSync('./pages/api/db.json');
          var obj = JSON.parse(data);
          
          var filtered = obj.filter(function(item) { 
            return item.title !== input;  
          });

          var newData = JSON.stringify(filtered);

          fs.writeFile('./pages/api/db.json', newData, err => {
            // error checking
            if(err) throw err;
            
            console.log("'" + input + "' task deleted");
          });
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