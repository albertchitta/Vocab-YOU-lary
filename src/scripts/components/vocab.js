import clearDom from '../helpers/data/clearDom';

const emptyVocab = () => {
  document.querySelector('#vocab-container').innerHTML = '<h1>No Vocab Entries</h1>';
};

const showVocab = (array) => {
  clearDom();

  // FILTER BUTTONS
  document.querySelector('#filter-container').innerHTML = `
    <button type="button" class="btn btn-primary" id="sort--CSS">CSS</button>
    <button type="button" class="btn btn-primary" id="sort--Firebase">Firebase</button>
    <button type="button" class="btn btn-primary" id="sort--HTML">HTML</button>
    <button type="button" class="btn btn-primary" id="sort--Javascript">Javascript</button>
  `;

  if (array.length === 0) {
    emptyVocab();
  } else {
    array.forEach((item) => {
      document.querySelector('#vocab-container').innerHTML += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.category}</h6>
        <p class="card-text">${item.definition}</p>
        <a href="#" class="card-link" id="edit--${item.firebaseKey}">Edit</a>
        <a href="#" class="card-link" id="delete--${item.firebaseKey}">Delete</a>
        </div>
        </div>
      `;
    });
  }
};

export { showVocab, emptyVocab };
