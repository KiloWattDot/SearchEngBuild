const db = require("../config/connection");
const { Book } = require("../models");
const { User } = require("../models");

db.once("open", () => {
  // User.create({"username": "Kilowattdot", "email": "dot@gmail.com", "password": "pasword1234", "savedBooks": [{"authors": ["Dorothy"], "description": "Book about engineering", "bookId": "engbook", "title": "Dorothy's Engineering book"}]})
  // .then(() => {
  //     console.log('Book inserted')
  // })
  User.create({
    username: "dorothedj",
    email: "jack@gmail.com",
    password: "pasword1234",
    savedBooks: [
      {
        authors: ["Jackie"],
        description: "Book about modeling",
        bookId: "modelbook",
        title: "Jackie's Modleing book",
      },
    ],
  }).then(() => {
    console.log("Book inserted");
  });
});

// Book.create({"authors": ["Dorothy"], "description": "Book about engineering", "bookId": "engbook", "title": "Dorothy's Engineering book"})

// const newBook = new Book ({"authors": ["Dorothy"], "description": "Book about engineering", "bookId": "engbook", "title": "Dorothy's Engineering book"})
//     console.log(newBook)
