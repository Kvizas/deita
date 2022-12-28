migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0r1hvqwwgwboqhx")

  collection.listRule = "book.premiumOnly != true || @request.auth.role.name = \"Premium\""
  collection.viewRule = "book.premiumOnly != true || @request.auth.role.name = \"Premium\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0r1hvqwwgwboqhx")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
