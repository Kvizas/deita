migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sm65sdgsphi0bsa")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xl8zav48",
    "name": "isDefault",
    "type": "bool",
    "required": false,
    "unique": true,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sm65sdgsphi0bsa")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xl8zav48",
    "name": "isDefault",
    "type": "bool",
    "required": true,
    "unique": true,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
