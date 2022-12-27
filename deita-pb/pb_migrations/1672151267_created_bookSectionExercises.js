migrate((db) => {
  const collection = new Collection({
    "id": "e0ului29inq1shw",
    "created": "2022-12-27 14:27:47.213Z",
    "updated": "2022-12-27 14:27:47.213Z",
    "name": "bookSectionExercises",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kzpiilrt",
        "name": "section",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "0r1hvqwwgwboqhx",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "bo6nfl3q",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "c0wvjnxj",
        "name": "solution",
        "type": "text",
        "required": false,
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
  const collection = dao.findCollectionByNameOrId("e0ului29inq1shw");

  return dao.deleteCollection(collection);
})
