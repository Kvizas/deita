migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4iumjazj9emoxoe")

  // remove
  collection.schema.removeField("m1nivepr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6gtx5vzq",
    "name": "book",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "jckd5fge07myamm",
      "cascadeDelete": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8ax4kzmg",
    "name": "authorPost",
    "type": "relation",
    "required": true,
    "unique": true,
    "options": {
      "maxSelect": 1,
      "collectionId": "48t550lqbhv1ozv",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4iumjazj9emoxoe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m1nivepr",
    "name": "body",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("6gtx5vzq")

  // remove
  collection.schema.removeField("8ax4kzmg")

  return dao.saveCollection(collection)
})
