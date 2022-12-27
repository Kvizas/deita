migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jckd5fge07myamm")

  collection.viewRule = "premiumOnly != true || @request.auth.role.name = \"Premium\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jckd5fge07myamm")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
