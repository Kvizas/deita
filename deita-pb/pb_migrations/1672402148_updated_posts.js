migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4iumjazj9emoxoe")

  collection.name = "threads"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4iumjazj9emoxoe")

  collection.name = "posts"

  return dao.saveCollection(collection)
})
