var schema = {
  "type": "object",
  "properties": {
    "auth": {
      "type": "object",
      "properties": {
        "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1
          }
        },
    },
    "projects": {
      "type": "array",
      "minItems": 1,
      "maxItems": 10,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1
          },
          "name": {
            "type": "string"
          },
          "category": {
            "type": "string",
            "faker": "commerce.color"
          },
          "initial_date": {
            "type": "string",
            "faker": "date.past"
          },
          "final_date": {
            "type": "string",
            "faker": "date.future"
          },
          "status": {
            "type": "string",
            "faker": "lorem.word"
          },
          "feedbacks": {
            "type": "integer",
            "minimum": 1,
            "maximum": 1000
          }
        }
      }
    }
  },
  "required": ["auth", "projects"]
};

module.exports = schema;
