migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("48t550lqbhv1ozv")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("48t550lqbhv1ozv")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
