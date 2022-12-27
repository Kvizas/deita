migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sm65sdgsphi0bsa");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "sm65sdgsphi0bsa",
    "created": "2022-12-23 19:54:48.223Z",
    "updated": "2022-12-23 19:59:00.410Z",
    "name": "userRoles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i6yr7qx3",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cjtkuwqr",
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
})
