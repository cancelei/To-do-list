import _ from 'lodash';
import './style.css';

// Array of objects (For test phase)

staticlistitems = [
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

  document.addEventListener("", () => {

  const listparent = document.getElementsByClassName('listparent');
  const listtitle = document.createElement('div');
  listtitle.className = 'listtitle';
  listparent.appendChild(listtitle);

  const title = document.createElement('h2');
  const refresher = document.createElement('refresher');

  title.innerHTML = "To Do List";
  title.className = 'title';
  refresher.className = 'refresher';

  listtitle.appendChild(title);
  listtitle.appendChild(refresher);

  });