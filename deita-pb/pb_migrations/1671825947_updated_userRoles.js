migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("avfj6tyik7btza9")

  collection.listRule = "@request.auth.id != \"\""
  collection.viewRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("avfj6tyik7btza9")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
