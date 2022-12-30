migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4iumjazj9emoxoe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ojvtyvna",
    "name": "slug",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l8of5vg5",
    "name": "posts",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "48t550lqbhv1ozv",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4iumjazj9emoxoe")

  // remove
  collection.schema.removeField("ojvtyvna")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l8of5vg5",
    "name": "comments",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "48t550lqbhv1ozv",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
