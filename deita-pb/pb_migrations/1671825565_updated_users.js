migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("4qu8rwyk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "42afwobn",
    "name": "role",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "sm65sdgsphi0bsa",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4qu8rwyk",
    "name": "role",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Premium",
        "Nemokama",
        "Svečias"
      ]
    }
  }))

  // remove
  collection.schema.removeField("42afwobn")

  return dao.saveCollection(collection)
})
