migrate((db) => {
  const collection = new Collection({
    "id": "9669ebwcn64z6eh",
    "created": "2022-12-23 17:24:41.164Z",
    "updated": "2022-12-23 17:24:41.164Z",
    "name": "knyga",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "u44r0kv1",
        "name": "pavadinimas",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ildfheff",
        "name": "sprendimas",
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
  const collection = dao.findCollectionByNameOrId("9669ebwcn64z6eh");

  return dao.deleteCollection(collection);
})
