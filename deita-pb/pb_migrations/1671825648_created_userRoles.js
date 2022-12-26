migrate((db) => {
  const collection = new Collection({
    "id": "avfj6tyik7btza9",
    "created": "2022-12-23 20:00:48.636Z",
    "updated": "2022-12-23 20:00:48.636Z",
    "name": "userRoles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jovlbxm1",
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
        "id": "emvkh40u",
        "name": "description",
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
  const collection = dao.findCollectionByNameOrId("avfj6tyik7btza9");

  return dao.deleteCollection(collection);
})
