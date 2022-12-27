migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jckd5fge07myamm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yxpk4ymn",
    "name": "slug",
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
  const collection = dao.findCollectionByNameOrId("jckd5fge07myamm")

  // remove
  collection.schema.removeField("yxpk4ymn")

  return dao.saveCollection(collection)
})
