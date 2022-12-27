migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sm65sdgsphi0bsa")

  // remove
  collection.schema.removeField("xl8zav48")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sm65sdgsphi0bsa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xl8zav48",
    "name": "isDefault",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
