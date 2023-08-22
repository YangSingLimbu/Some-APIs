//Create a button that adds 1 to a botScore stored in localStorage
document.querySelector("button").addEventListener("click", anothaOne);
document.querySelector("h3").innerText = localStorage.getItem("books");

function anothaOne() {
  const isbn = document.querySelector("input").value;
  console.log(isbn);
  const url = `https://openlibrary.org/isbn/${isbn}.json`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(res.statusCode);

      console.log(data);

      if (!localStorage.getItem("books")) {
        localStorage.setItem("books", data.title);
      } else {
        let books = localStorage.getItem("books") + " ; " + data.title;
        localStorage.setItem("books", books);
      }
      document.querySelector("h3").innerText = localStorage.getItem("books");
    })
    .catch((err) => {
      // console.log(`error ${err}`);
    });
}
