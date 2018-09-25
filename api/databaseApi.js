import delay from "./delay";
import Firebase from "firebase";
var config = {
  apiKey: "AIzaSyA8IDk83Pvx-hk4WyHOwCeTibzGGp0Mvxs",
  authDomain: "reactskillster.firebaseapp.com",
  databaseURL: "https://reactskillster.firebaseio.com",
  projectId: "reactskillster",
  storageBucket: "reactskillster.appspot.com",
  messagingSenderId: "141970191809"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

/*const questions = [
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
  }
];*/

const subjects = [
  {
    name: "java",
    subjects: [
      {
        name: "core java"
      },
      {
        name: "advanced java"
      },
      {
        name: "android"
      }
    ]
  },
  {
    name: "js",
    subjects: [
      {
        name: "angular"
      },
      {
        name: "react"
      },
      {
        name: "ES6"
      }
    ]
  },
  {
    name: "python",
    subjects: []
  },
  {
    name: "sql",
    subjects: []
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = course => {
  return replaceAll(course.title, " ", "-");
};

class databaseApi {
  static postAllSubjects() {
    return new Promise((resolve, reject) => {
      subjects.forEach(function(subject) {
        var sub = {
          name: subject.name,
          subjects: subject.subjects
        };
        db.ref("subjects").push(sub);
      });
    });
  }

  static getAllQuestion() {
    return new Promise((resolve, reject) => {
      db.ref("questions").once("value", data => {
        //  console.log(data.toJSON());
        resolve(Object.assign([], data.toJSON()));
      });
    });
  }

  static getAllSubjects() {
    return new Promise((resolve, reject) => {
      db.ref("subjects").once("value", function(snapshot) {
        //  console.log(data.toJSON());
        // resolve(Object.assign([], data.toJSON()));
        var subjects = [];
        snapshot.forEach(function(subject) {
          var sub = {
            id: subject.val().id,
            name: subject.val().name,
            subjects: subject.val().subjects
          };
          subjects.push(subject);
        });
        resolve(Object.assign([], subjects));
      });
    });
  }
}

export default databaseApi;
