import clearDom from '../helpers/data/clearDom';

const showVocab = (array) => {
  clearDom();

  // FIXME: FILTER BUTTONS
  // document.querySelector('#')

  array.forEach((item) => {
    document.querySelector('#vocab-container').innerHTML += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.category_id}</h6>
          <p class="card-text">${item.definition}</p>
          <a href="#" class="card-link" id="edit--${item.firebaseKey}">Edit</a>
          <a href="#" class="card-link" id="delete--${item.firebaseKey}">Delete</a>
        </div>
      </div>
    `;
  });
};

const emptyVocab = () => {
  document.querySelector('#home').innerHTML = '<h1>No Vocab Entries</h1>';
};

export { showVocab, emptyVocab };
