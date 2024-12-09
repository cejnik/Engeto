class TodoItem {
  constructor(args) {
    const { title, completed } = args;

    if (typeof title !== "string") {
      throw new Error("Chyba string!!!");
    }

    if (typeof completed !== "boolean") {
      throw new Error("Chyba boolean!!!");
    }

    this.title = title;
    this.completed = completed;
  }

  render(parent) {
    const listItem = document.createElement("li");
    const done = this.completed ? "v" : "X";
    listItem.innerText = this.title + " " + done;

    listItem.addEventListener("click", () => {
      this.completed = !this.completed;

      const done = this.completed ? "v" : "X";
      listItem.innerText = this.title + " " + done;
    });

    parent.appendChild(listItem);
  }
}

const root = document.getElementById("todo");
const textInput = document.createElement("input");
textInput.type = "text";
root.appendChild(textInput);

const list = document.createElement("ul");
root.appendChild(list);

textInput.addEventListener("keyup", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  const title = event.target.value;

  if (title.length < 3) {
    return;
  }

  event.target.value = "";

  const item = new TodoItem({
    title: title,
    completed: false,
  });

  item.render(list);
});
