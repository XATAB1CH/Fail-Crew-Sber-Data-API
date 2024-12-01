
export const scheme = [
    {
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
            "description" : "Данные по родителям",
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
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Федресурс",
        "type": "object",
        "required": [
          "result"
        ],
        "properties": {
          "result": {
            "description": "История банкротства и правонарушений по участнику сделки",
            "type": "object",
            "required": [
              "fio",
              "birthDate",
              "birthplace",
              "INN",
              "SNILS",
              "bankruptcy",
              "offesnseHistory"
            ],
            "properties": {
              "fio": {
                "description": "ФИО участника сделки",
                "type": "string"
              },
              "birthDate": {
                "description": "Дата рождения",
                "type": "string"
              },
              "birthplace": {
                "description": "Место рождения",
                "type": "string"
              },
              "INN": {
                "description": "ИНН",
                "type": "string"
              },
              "SNILS": {
                "description": "СНИЛС",
                "type": "string"
              },
              "bankruptcy": {
                "description": "Данные о банкротстве",
                "type": "object",
                "required": [
                  "currentBankruptcyProcedure"
                ],
                "properties": {
                  "currentBankruptcyProcedure": {
                    "description": "Есть ли текущая процедура банкротства",
                    "type": "boolean"
                  },
                  "date": {
                    "description": "Дата начала процедуры банкротства",
                    "type": "string"
                  },
                  "stage": {
                    "description": "Стадия процедуры банкротства",
                    "type": "string"
                  },
                  "reason": {
                    "description": "Причина процедуры банкротства",
                    "type": "string"
                  },
                  "court": {
                    "description": "Суд, в котором рассматривается банкротство",
                    "type": "string"
                  },
                  "bankruptcyHistory": {
                    "description": "История банкротств",
                    "type": "array",
                    "items": {
                      "type": "object",
                      "required": [
                        "date",
                        "reason",
                        "court"
                      ],
                      "properties": {
                        "date": {
                          "description": "Дата получения статуса банкрота",
                          "type": "string"
                        },
                        "reason": {
                          "description": "Причина банкротства",
                          "type": "string"
                        },
                        "court": {
                          "description": "Суд, который принял решение о банкротстве",
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              },
              "offesnseHistory": {
                "description": "История правонарушений",
                "type": "array",
                "items": {
                  "type": "object",
                  "required": [
                    "date",
                    "court",
                    "type",
                    "offense"
                  ],
                  "properties": {
                    "date": {
                      "description": "Дата правонарушения",
                      "type": "string"
                    },
                    "court": {
                      "description": "Суд, который принял решение о правонарушении",
                      "type": "string"
                    },
                    "type": {
                      "description": "Тип правонарушения - административное/уголовное и т.д.",
                      "type": "string"
                    },
                    "offense": {
                      "description": "Описание правонарушения",
                      "type": "string"
                    },
                    "fineAmount" : {
                      "description": "Сумма штрафа",
                      "type": "number"
                    }
                  }
                }
              }
            }
          }
        }
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Анкета на получение образовательного кредита",
        "type": "object",
        "required": [
          "applicationInfo",
          "personInfo"
        ],
        "properties": {
          "applicationInfo": {
            "description": "Информация о заявке",
            "type": "object",
            "required": [
              "applicationID",
              "applicationDate"
            ],
            "properties": {
              "applicationID": {
                "description": "ID заявки на получение образовательного кредита",
                "type": "string"
              },
              "applicationDate": {
                "description": "Дата заявки на получение образовательного кредита",
                "type": "string"
              },
              "loanAmount": {
                "description": "Сумма кредита",
                "type": "number"
              },
              "loanTerm": {
                "description": "Срок кредита",
                "type": "integer"
              }
            }
          },
          "personInfo": {
            "description": "Информация об учащемся",
            "type": "object",
            "required": [
              "firstName",
              "lastName",
              "gender",
              "birthDate",
              "citizenship",
              "addresses",
              "document",
              "educationInfo",
              "contactInfo",
              "parentsInfo"
            ],
            "properties": {
              "firstName": {
                "description": "Имя учащегося",
                "type": "string"
              },
      
              "lastName": {
                "description": "Фамилия учащегося",
                "type": "string"
              },
              "middleName": {
                "description": "Отчество учащегося",
                "type": "string"
              },
              "gender": {
                "description": "Пол",
                "type": "string"
              },
              "birthDate": {
                "description": "Дата рождения",
                "type": "string"
              },
              "citizenship": {
                "description": "Гражданство",
                "type": "string"
              },
              "addresses": {
                "description": "Информация об адресах",
                "type": "object",
                "required": [
                  "registrationAddress",
                  "residentialAddress"
                ],
                "properties": {
                  "registrationAddress": {
                    "description": "Адрес регистрации",
                    "type": "string"
                  },
                  "residentialAddress": {
                    "description": "Адрес проживания",
                    "type": "string"
                  }
                }
              },
              "document": {
                "description": "Основной документ учащегося",
                "type": "object",
                "required": [
                  "documentType",
                  "documentNumber",
                  "documentSerie"
                ],
                "properties": {
                  "documentType": {
                    "description": "Тип документа",
                    "type": "string"
                  },
                  "documentNumber": {
                    "description": "Номер документа",
                    "type": "string"
                  },
                  "documentSerie": {
                    "description": "Серия документа",
                    "type": "string"
                  }
                }
              },
              "educationInfo": {
                "description": "Данные об образовании участника сделки",
                "type": "object",
                "required": [
                  "educationStatus",
                  "universityName",
                  "universityAddress",
                  "educationSpecialty"
                ],
                "properties": {
                  "educationStatus": {
                    "description": "Код ступени образования 1 - высшее, 2 - среднее, 3 - неоконченное высшее и т.д.",
                    "type": "string"
                  },
                  "universityName": {
                    "description": "Название учебного заведения",
                    "type": "string"
                  },
                  "universityAddress": {
                    "description": "Адрес учебного заведения",
                    "type": "string"
                  },
                  "educationSpecialty": {
                    "description": "Специальность",
                    "type": "string"
                  },
                  "educationStartDate": {
                    "description": "Дата начала обучения",
                    "type": "string"
                  },
                  "educationEndDate": {
                    "description": "Дата окончания обучения",
                    "type": "string"
                  }
                }
              },
              "contactInfo": {
                "description": "Контактная информация",
                "type": "object",
                "required": [
                  "phone"
                ],
                "properties": {
                  "email": {
                    "description": "Электронная почта",
                    "type": "string"
                  },
                  "phone": {
                    "description": "Телефон",
                    "type": "string"
                  }
                }
              },
              "parentsInfo": {
                "description": "Информация о родителях",
                "type": "object",
                "required": [
                  "parentsCount",
                  "parents"
                ],
                "properties": {
                  "parentsCount": {
                    "description": "Количество родителей/опекунов",
                    "type": "number"
                  },
                  "parents": {
                    "description": "Информация о родителях/опекунах",
                    "type": "array",
                    "items": {
                      "type": "object",
                      "required": [
                        "firstName",
                        "lastName",
                        "gender",
                        "birthDate",
                        "citizenship",
                        "addresses",
                        "document"
                      ],
                      "properties": {
                        "firstName": {
                          "description": "Имя родителя/опекуна",
                          "type": "string"
                        },
                        "lastName": {
                          "description": "Фамилия родителя/опекуна",
                          "type": "string"
                        },
                        "middleName": {
                          "description": "Отчество родителя/опекуна",
                          "type": "string"
                        },
                        "gender": {
                          "description": "Пол",
                          "type": "string"
                        },
                        "birthDate": {
                          "description": "Дата рождения",
                          "type": "string"
                        },
                        "citizenship": {
                          "description": "Гражданство",
                          "type": "string"
                        },
                        "addresses": {
                          "description": "Информация об адресах",
                          "type": "object",
                          "required": [
                            "registrationAddress",
                            "residentialAddress"
                          ],
                          "properties": {
                            "registrationAddress": {
                              "description": "Адрес регистрации",
                              "type": "string"
                            },
                            "residentialAddress": {
                              "description": "Адрес проживания",
                              "type": "string"
                            }
                          }
                        },
                        "document": {
                          "description": "Основной документ родителя/опекуна",
                          "type": "object",
                          "required": [
                            "documentType",
                            "documentNumber",
                            "documentSerie"
                          ],
                          "properties": {
                            "documentType": {
                              "description": "Тип документа",
                              "type": "string"
                            },
                            "documentNumber": {
                              "description": "Номер документа",
                              "type": "string"
                            },
                            "documentSerie": {
                              "description": "Серия документа",
                              "type": "string"
                            }
                          }
                        },
                        "contactInfo": {
                          "description": "Контактная информация",
                          "type": "object",
                          "properties": {
                            "email": {
                              "description": "Электронная почта",
                              "type": "string"
                            },
                            "phone": {
                              "description": "Телефон",
                              "type": "string"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Ресурс  комитета по образованию",
        "type": "object",
        "properties": {
          "personData": {
            "description" : "Описание данных по участнику сделки",
            "type": "object",
            "required": [
              "firstName",
              "lastName",
              "gender",
              "birthDate",
              "citizenship",
              "educationStatus"
            ],
            "properties": {
              "firstName": {
                "description" : "Имя",
                "type": "string"
              },
              "lastName": {
                "description" : "Фамилия",
                "type": "string"
              },
              "middleName": {
                "description" : "Отчество",
                "type": "string"
              },
              "gender": {
                "description" : "Пол",
                "type": "string"
              },
              "birthDate": {
                "description" : "Дата рождения",
                "type": "string"
              },
              "citizenship": {
                "description" : "Гражданство",
                "type": "string"
              },
              "educationStatus": {
                "description" : "Код ступени образования 1 - высшее, 2 - среднее, 3 - неоконченное высшее и т.д.",
                "type": "string"
              },
              "universityInfo": {
                "description" : "Данные по университету",
                "type": "object",
                "required": [
                  "universityName",
                  "universityAddress",
                  "educationSpecialty",
                  "educationStartDate",
                  "educationEndDate"
                ],
                "properties": {
                  "universityName": {
                    "description" : "Название университета",
                    "type": "string"
                  },
                  "universityAddress": {
                    "description" : "Адрес университета",
                    "type": "string"
                  },
                  "educationSpecialty": {
                    "description" : "Специальность",
                    "type": "string"
                  },
                  "educationStartDate": {
                    "description" : "Дата начала обучения",
                    "type": "string"
                  },
                  "educationEndDate": {
                    "description" : "Дата окончания обучения",
                    "type": "string"
                  }
                }
              },
              "schoolInfo": {
                "description" : "Данные по школьному образованию",
                "type": "object",
                "required": [
                  "schoolName",
                  "schoolAddress",
                  "schoolStartDate",
                  "schoolEndDate",
                  "diplomaID",
                  "subjects"
                ],
                "properties": {
                  "schoolName": {
                    "description" : "Номер школы",
                    "type": "string"
                  },
                  "schoolAddress": {
                    "description" : "Адрес школы",
                    "type": "string"
                  },
                  "schoolStartDate": {
                    "description" : "Дата начала обучения",
                    "type": "string"
                  },
                  "schoolEndDate": {
                    "description" : "Дата окончания обучения",
                    "type": "string"
                  },
                  "diplomaID": {
                    "description" : "Номер аттестата",
                    "type": "string"
                  },
                  "finalExamSubjects" : {
                    "description" : "Список предметов на ЕГЭ",
                    "type" : "array"
                  },
                  "participationOlympiad" : {
                    "description" : "Участие в Олимпиаде",
                    "type" : "boolean"
                  },
                  "prizePlaceOlympiad" : {
                    "description" : "Количество призовых мест на Олимпиадах",
                    "type" : "integer"
                  },
                  "subjects": {
                    "description" : "Предметы",
                    "type": "array",
                    "items": {
                      "type": "object",
                      "required": [
                        "subjectName",
                        "grade"
                      ],
                      "properties": {
                        "subjectName": {
                          "description" : "Название предмета",
                          "type": "string"
                        },
                        "grade": {
                          "description" : "Оценка",
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Данные из БКИ Объединенное кредитное бюро",
        "type": "object",
        "required": [
          "loaner"
        ],
        "properties": {
          "loaner": {
            "type": "object",
            "required": [
              "firstName",
              "lastName",
              "birthplace",
              "birthDate",
              "citizenship",
              "gender",
              "personID",
              "addresses",
              "phones",
              "creditHistory"
            ],
            "properties": {
              "firstName": {
                "description": "Имя",
                "type": "string"
              },
              "lastName": {
                "description": "Фамилия",
                "type": "string"
              },
              "middleName": {
                "description": "Отчество",
                "type": "string"
              },
              "birthplace": {
                "description": "Место рождения",
                "type": "string"
              },
              "birthDate": {
                "description": "Дата рождения",
                "type": "string"
              },
              "citizenship": {
                "description": "Гражданство",
                "type": "string"
              },
              "gender": {
                "description": "Пол",
                "type": "string"
              },
              "personID": {
                "description": "Документ заемщика",
                "type": "object",
                "required": [
                  "type",
                  "numberID",
                  "issueDate",
                  "issueOrg"
                ],
                "properties": {
                  "type": {
                    "description": "Ти документа",
                    "type": "string"
                  },
                  "numberID": {
                    "description": "Номер",
                    "type": "string"
                  },
                  "issueDate": {
                    "description": "Дата выдачи",
                    "type": "string"
                  },
                  "issueOrg": {
                    "description": "Кем выдан",
                    "type": "string"
                  }
                }
              },
              "addresses": {
                "description": "Адреса заемщика",
                "type": "object",
                "required": [
                  "registrationAddress",
                  "residentialAddress"
                ],
                "properties": {
                  "registrationAddress": {
                    "description": "Адрес регистрации",
                    "type": "string"
                  },
                  "residentialAddress": {
                    "description": "Адрес проживания",
                    "type": "string"
                  }
                }
              },
              "phones": {
                "description": "Телефоны заемщика",
                "type": "object",
                "required": [
                  "mobilePhone"
                ],
                "properties": {
                  "homePhone": {
                    "description": "Домашний телефон",
                    "type": "string"
                  },
                  "mobilePhone": {
                    "description": "Мобильный телефон",
                    "type": "string"
                  }
                }
              },
              "creditHistory": {
                "description": "Данные о кредитной истории",
                "type": "object",
                "required": [
                  "totalCreditAccounts",
                  "presentCreditAccounts",
                  "pastCreditAccounts"
                ],
                "properties": {
                  "totalCreditAccounts": {
                    "description": "Общее количество кредитных счетов",
                    "type": "integer"
                  },
                  "presentCreditAccounts": {
                    "description": "Количество действующих кредитных счетов",
                    "type": "integer"
                  },
                  "pastCreditAccounts": {
                    "description": "Количество закрытых кредитных счетов",
                    "type": "integer"
                  },
                  "accounts": {
                    "description": "Кредитные счета",
                    "type": "array",
                    "items": {
                      "type": "object",
                      "required": [
                        "type",
                        "status",
                        "accountNumber",
                        "creditor",
                        "paymentDates",
                        "balance"
                      ],
                      "properties": {
                        "type": {
                          "description": "Тип счета",
                          "type": "string"
                        },
                        "status": {
                          "description": "Статус счета",
                          "type": "string"
                        },
                        "accountNumber": {
                          "description": "Номер счета",
                          "type": "string"
                        },
                        "creditor": {
                          "description": "Кредитор",
                          "type": "string"
                        },
                        "paymentDates": {
                          "description": "Даты",
                          "type": "object",
                          "required": [
                            "openDate",
                            "finalPaymentDate",
                            "lastPaymentDate",
                            "frequency"
                          ],
                          "properties": {
                            "openDate": {
                              "description": "Дата открытия",
                              "type": "string"
                            },
                            "finalPaymentDate": {
                              "description": "Ожидаемая дата финального платежа",
                              "type": "string"
                            },
                            "lastPaymentDate": {
                              "description": "Дата последнего платежа",
                              "type": "string"
                            },
                            "frequency": {
                              "description": "Периодичность платежей",
                              "type": "string"
                            }
                          }
                        },
                        "balance": {
                          "description": "Платежи",
                          "type": "object",
                          "required": [
                            "account",
                            "monthlyPayments",
                            "outstanding",
                            "pastDue"
                          ],
                          "properties": {
                            "account": {
                              "description": "Сумма кредита",
                              "type": "number"
                            },
                            "monthlyPayments": {
                              "description": "Ежемесячный платеж",
                              "type": "number"
                            },
                            "outstanding": {
                              "description": "Остаток",
                              "type": "number"
                            },
                            "pastDue": {
                              "description": "Просрочка",
                              "type": "number"
                            }
                          }
                        },
                        "latePayments": {
                          "description": "Просрочки",
                          "type": "object",
                          "required": [
                            "30-59",
                            "60-89",
                            "90+"
                          ],
                          "properties": {
                            "30-59": {
                              "description": "Просрочка от 30 до 59 дней",
                              "type": "integer"
                            },
                            "60-89": {
                              "description": "Просрочка от 60 до 89 дней",
                              "type": "integer"
                            },
                            "90+": {
                              "description": "Просрочка от 90 дней и более",
                              "type": "integer"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
]  
