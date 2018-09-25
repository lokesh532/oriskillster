 const initialData = [{
    "name": "java",
    "id": 1,
    "subjects": [{
        "name": "core java",
        "id": 1
      },
      {
        "name": "advanced java",
        "id": 2
      },
      {
        "name": "android",
        "id": 3
      }
    ]
  },
  {
    "name": "js",
    "id": 2,
    "subjects": [{
        "name": "angular",
        "id": 1,
        "subjects": {}
      },
      {
        "name": "react",
        "id": 2
      },
      {
        "name": "ES6",
        "id": 3
      }
    ]
  },
  {
    "name": "python",
    "id": 3
  },
  {
    "name": "sql",
    "id": 4
  }
];


const questionData = [
  {
    "question" : "Which of the following is FALSE about arrays on Java ",
    "option" : [
      "A java array is always an object",
      "Length of array can be changed after creation of array",
      "Arrays in Java are always allocated on heap",
      "We can store duplicate values on array"
    ],
    "answer":2
  },
  {
    "question" : "Which of the following is FALSE about arrays on Java",
    "option" : [
      "A java array is always an object",
      "Length of array can be changed after creation of array",
      "Arrays in Java are always allocated on heap",
      "We can store duplicate values on array"
    ],
    "answer":2
  },
  {
    "question" : "Which of the following is FALSE about arrays on Java",
    "option" : [
      "A java array is always an object",
      "Length of array can be changed after creation of array",
      "Arrays in Java are always allocated on heap",
      "We can store duplicate values on array"
    ],
    "answer":2
  },
  {
    "question" : "Which of the following is FALSE about arrays on Java",
    "option" : [
      "A java array is always an object",
      "Length of array can be changed after creation of array",
      "Arrays in Java are always allocated on heap",
      "We can store duplicate values on array"
    ],
    "answer":2
  },
  {
    "question" : "Which of the following is FALSE about arrays on Java",
    "option" : [
      "A java array is always an object",
      "Length of array can be changed after creation of array",
      "Arrays in Java are always allocated on heap",
      "We can store duplicate values on array"
    ],
    "answer":2
  }
]

export var getQuestions = function() {


  return questionData;


}


export var getData = function() {


  return initialData;


}
