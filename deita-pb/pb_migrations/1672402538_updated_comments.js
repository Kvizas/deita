migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("48t550lqbhv1ozv")

  collection.name = "posts"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("48t550lqbhv1ozv")

  collection.name = "comments"

  return dao.saveCollection(collection)
})
