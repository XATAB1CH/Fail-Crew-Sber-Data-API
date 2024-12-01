import { Source } from "../types/Sourse"

export const adapter: Source[] = [
  {
    "id": 1,
    "name": "test1",
    "data": {
        "personInfo": {
          "firstName": "Иван",
          "lastName": "Иванов",
          "middleName": "Иванович",
          "gender" : "M",
          "birthDate" : "19.12.2005",
          "citizenship" : "Россия",
          "addresses" : {
            "registrationAddress" : "Владимирская область, г. Владимир ул.Ленина 3",
            "residentialAddress" : "Псковская область, г. Опочка ул.Некрасова 25 .д 3"
          },
          "documents" : {
            "documentType" : "PASSPORT",
            "documentSerie" : "4019",
            "documentNumber" : "3456780"
          },
          "contactInfo" : {
            "email" : "ivan.ivanov@gmail.com",
            "phone" : "+7(495) 555-55-55"
          },
          "applicationInfo" : {
            "applicationDate" : "2024-11-22T06:06:27.292Z",
            "product" : "Образовательный кредит"
          }
        }
      }
    },   
    {
        "id": 2,
        "name": "test2",
        "data": {
        "studentData": {
          "age": 19,
          "residenceRegion" : "60",
          "averageScore" : 4.5,
          "profession" : "Инженер",
          "administrativeOffense" : 1,
          "overdueLoanStudent" : 56.8
        },
        "parentsData": {
          "overdueLoanParents" : 23.8,
          "parentsBankruptcy" : true
        }
      },
    },
      {
       "id": 3,
        "name": "test3",
        "data": {
        "result": {
          "fio": "Иванов Иван Иванович",
          "birthDate": "19.12.2005",
          "birthplace": "г. Владимир",
          "INN": "732600000098",
          "SNILS": "10000003966",
          "bankruptcy": {
            "currentBankruptcyProcedure": true,
            "date": "19.12.2023",
            "stage": "Решение суда",
            "reason": "Утрата стабильного дохода",
            "court": "Суд г. Владимира",
            "bankruptcyHistory": [
              {
                "date": "19.12.2018",
                "reason": "Изменение состава семьи",
                "court": "Суд г. Владимира"
              }
            ]
          },
          "offesnseHistory": [
            {
              "date": "19.12.2018",
              "court": "Суд г. Владимира",
              "type": "Административное",
              "offense": "Продажа товаров и продукции без маркировки и (или) нанесения информации",
              "fineAmount" : 50000
            }
          ]
        }
      }
      },
      {
        "id": 4,
        "name": "test4",
        "data" : {
        "personData": {
          "firstName": "Иван",
          "lastName": "Иванов",
          "middleName": "Иванович",
          "gender" : "M",
          "birthDate" : "19.12.2005",
          "citizenship" : "RUSSIA",
          "educationStatus" : "3",
          "bachelorInfo" : {
            "universityName" : "Псковский Государственный университет",
            "universityAddress" : "Псковская область, г. Псков ул.Советская 21",
            "educationSpecialty" : "Информатика и вычислительная техника",
            "educationStartDate" : "01.09.2023",
            "educationEndDate" : "01.09.2027"
          },
          "schoolInfo" : {
            "schoolName" : "ГБОУ СОШ №1",
            "schoolAddress" : "Псковская область, г. Псков ул.Советская 21",
            "schoolStartDate" : "01.09.2012",
            "schoolEndDate" : "01.09.2023",
            "diplomaID" : "9283233923",
            "finalExamSubjects" : ["Русский", "Математика", "Информатика"],
            "participationOlympiad" : true,
            "prizePlaceOlympiad" : 0,
            "subjects" : [
              { "subjectName" : "Информатика", "grade" : "5" },
              { "subjectName" : "Литература", "grade" : "4" },
              { "subjectName" : "История", "grade" : "4" },
              { "subjectName" : "Английский", "grade" : "2" },
              { "subjectName" : "Математика", "grade" : "5" }
            ]
          }
        }
      }
      },
      {
       "id": 5,
    "name": "test5",
    "data" : {
        "loaner": {
          "firstName": "Иван",
          "lastName": "Иванов",
          "middleName": "Иванович",
          "birthplace" : "Владимир",
          "birthDate" : "19.12.2005",
          "citizenship" : "Российская Федерация",
          "gender" : "Мужской",
          "personID" : {
            "type" : "PASSPORT",
            "numberID" : "4019 345678",
            "issueDate" : "19.12.2019",
            "issueOrg" : "ОТДЕЛОМ УФМС РОССИИ ПО ВЛАДИМИРСКОЙ ОБЛАСТИ В ГОРОДЕ ВЛАДИМИР"
          },
          "addresses" : {
            "registrationAddress" : "Владимирская область, г. Владимир ул.Ленина 3 кв.35",
            "residentialAddress" : "Псковская область, г. Опочка ул.Некрасова 25 кв.3"
          },
          "phones" : {
            "homePhone" : "356-11-11",
            "mobilePhone" : "+7 (495) 555-55-55"
          },
          "creditHistory" : {
            "totalCreditAccounts" : 1,
            "presentCreditAccounts" : 1,
            "pastCreditAccounts" : 0,
            "accounts": [
              {
                "type" : "Потребительский кредит",
                "status" : "Счет открыт",
                "accountNumber" : "КД123456789",
                "creditor" : "Банк",
                "paymentDates" : {
                  "openDate" : "21.03.2024",
                  "finalPaymentDate" : "22.03.2025",
                  "lastPaymentDate" : "12.11.2024",
                  "frequency" : "Ежемесячно"
                },
                "balance" : {
                  "account" : 200000,
                  "monthlyPayments" : 34566.38,
                  "outstanding" : 110568.83,
                  "pastDue" : 13456.99
                },
                "latePayments" : {
                  "30-59" : 2,
                  "60-89" : 1,
                  "90+" : 1
                }
              }
            ]
          }
        }
      }
    }
]