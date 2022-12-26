migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("k2y4eezwos16nxk");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "k2y4eezwos16nxk",
    "created": "2022-12-23 17:44:54.851Z",
    "updated": "2022-12-23 17:44:54.851Z",
    "name": "sda",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rynhkvgx",
        "name": "field",
        "type": "select",
        "required": false,
        "unique": true,
        "options": {
          "maxSelect": 1,
          "values": [
            "1",
            "2",
            "3"
          ]
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
