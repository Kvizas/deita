migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jckd5fge07myamm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ewnlujmc",
    "name": "premiumOnly",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jckd5fge07myamm")

  // remove
  collection.schema.removeField("ewnlujmc")

  return dao.saveCollection(collection)
})
