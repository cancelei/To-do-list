import './style.css';

// Array of objects (For test phase)

const staticlistitems = [
  {
  id: 0, 
  description: "Clean my room", 
  status: 0 
  },
  {
    id: 1,
    description: "Do the dishes",
    status: 0
  },
  {
    id: 2,
    description: "Take out the trash",
    status: 0
  },
  {
    id: 3,
    description: "Walk the dog",
    status: 0
  },
  {
    id: 4,
    description: "Do the laundry",
    status: 0
  },
  {
    id: 5,  
    description: "Go to the gym",
    status: 0
  },]

const todolist = () => {

  const listparent = document.getElementsByClassName('listparent');
  const listtitle = document.createElement('div');

  listparent.append(listtitle);

  const title = document.createElement('h2');
  const refresher = document.createElement('div');

  const inputparent = document.createElement('div');
  inputparent.className = 'inputparent';

  const listinput = document.createElement('input');
  listinput.className = 'listinput';
  listinput.type = 'text';
  listinput.placeholder = 'Add a new task';

  const itemsgrandparent = document.createElement('div');
  itemsgrandparent.className = 'itemsgrandparent';
  const itemparent = document.createElement('div');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const itemdescription = document.createElement('p');
  itemdescription.className = 'itemdescription';
  const itemoptions = document.createElement('div');
  itemoptions.className = 'itemoptions';

  title.innerHTML = "To Do List";
  title.className = 'title';
  refresher.className = 'refresher';
  listtitle.className = 'listtitle';




  listtitle.appendChild(title);
  listtitle.appendChild(refresher);

}

todolist();