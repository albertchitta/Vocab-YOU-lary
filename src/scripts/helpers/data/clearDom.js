const clearDom = () => {
  document.querySelector('#welcome').innerHTML = '';
  document.querySelector('#filter-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#vocab-container').innerHTML = '';
};

export default clearDom;
