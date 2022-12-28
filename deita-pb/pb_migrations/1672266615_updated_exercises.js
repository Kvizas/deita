migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e0ului29inq1shw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bo6nfl3q",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e0ului29inq1shw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bo6nfl3q",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
