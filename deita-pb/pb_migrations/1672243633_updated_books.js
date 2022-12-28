migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jckd5fge07myamm")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jckd5fge07myamm")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
