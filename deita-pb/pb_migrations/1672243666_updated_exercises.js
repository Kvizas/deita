migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e0ului29inq1shw")

  collection.listRule = "section.book.premiumOnly != true || @request.auth.role.name = \"Premium\""
  collection.viewRule = "section.book.premiumOnly != true || @request.auth.role.name = \"Premium\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e0ului29inq1shw")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
