export const schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Данные для модели",
    "type": "object",
    "required": [
      "studentData",
      "parentsData"
    ],
    "properties": {
      "studentData": {
        "description": "Данные по студенту",
        "type": "object",
        "required": [
          "age",
          "residenceRegion",
          "averageScore",
          "profession",
          "administrativeOffense",
          "overdueLoanStudent"
        ],
        "properties": {
          "age": {
            "description": "Возраст студента",
            "type": "integer"
          },
          "residenceRegion": {
            "description": "Код региона проживания студента",
            "type": "string"
          },
          "averageScore": {
            "description": "Средний балл студента",
            "type": "number"
          },
          "profession": {
            "description": "Будущая специальность студента (согласно словарю)",
            "type": "string"
          },
          "administrativeOffense": {
            "description": "Количество административных нарушений",
            "type": "integer"
          },
          "overdueLoanStudent": {
            "description": "%  кредитов с просрочкой студента",
            "type": "number"
          }
        }
      },
      "parentsData": {
        "description": "Данные по родителям",
        "type": "object",
        "required": [
          "overdueLoanParents",
          "parentsBankruptcy"
        ],
        "properties": {
          "overdueLoanParents": {
            "description": "%  кредитов с просрочкой родителей",
            "type": "number"
          },
          "parentsBankruptcy": {
            "description": "Банкротство родителей",
            "type": "boolean"
          }
        }
      }
    }
  }