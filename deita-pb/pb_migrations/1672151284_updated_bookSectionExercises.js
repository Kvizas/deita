migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e0ului29inq1shw")

  collection.name = "exercises"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e0ului29inq1shw")

  collection.name = "bookSectionExercises"

  return dao.saveCollection(collection)
})
