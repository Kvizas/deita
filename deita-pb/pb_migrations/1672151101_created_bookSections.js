migrate((db) => {
  const collection = new Collection({
    "id": "0r1hvqwwgwboqhx",
    "created": "2022-12-27 14:25:01.139Z",
    "updated": "2022-12-27 14:25:01.139Z",
    "name": "bookSections",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ilvpeiln",
        "name": "book",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "jckd5fge07myamm",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "nwrzcojs",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0r1hvqwwgwboqhx");

  return dao.deleteCollection(collection);
})
