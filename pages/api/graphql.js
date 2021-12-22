'use strict'

const Fastify = require('fastify')
const mercurius = require('mercurius')

const app = Fastify()

const todoList = require('./db.json')
const fs = require('fs');
// const { parse } = require('path/posix')

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
        list: () => todoList,
    },
    Mutation: {
        addItemMutation (_,  { input } ){
            console.log('Title: ', input);
            const newItem = new Item(input);
            console.log(newItem)
            // todoList.items.push(newItem);

            // fs.readFile('./pages/api/db.json',function(err,content){
            //   if(err) throw err;
            //   var obj = {
            //     'list': []
            //   };
            //   var parseJson = JSON.parse(content);
            //   parseJson.push(JSON.stringify(newItem));
            //   var pushObject = JSON.stringify(parseJson);
            //   obj.list.push(JSON.stringify(newItem));
            //   fs.writeFile('./pages/api/db.json', pushObject, function(err){
            //     if(err) throw err;
            //   })
            // })

            // fs.appendFile('./pages/api/db.json', JSON.stringify(newItem), function (err) {
            //   if (err) throw err;
            //   console.log('Saved!');
            // });

            // fs.readFile('./pages/api/db.json', "utf8", (err, jsonString) => {
            //   if (err) {
            //     console.log("File read failed:", err);
            //     return;
            //   }
            //   console.log("File data:", jsonString);
            // });

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
        // createItem (title){
        //     const newItem = new Item(title);
        //     todoList.items.push(newItem);
        //     return newItem;
        // },
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
// app.get('/api/graphql', async function (req, reply) {
//     const query = '{ list { title }}'
//     return reply.graphql(query)
// })
// app.post('/api/graphql/post', async function (req, reply) {
//     const mutation = 'mutation addItemMutation { createItem(input: "bruh") { title } }';
//     return reply.graphql(mutation);
// })
// app.put('/api/graphql', async function (req, reply) {
//     console.log("put");
//     const mutation = `{ deleteItem (title: "Item1") { title } }`;
//     return reply.graphql(mutation);
// })

const config = {
  api: {
    bodyParser: false,
  },
}
module.exports = {config, resolvers}

app.listen(3001);