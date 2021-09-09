import { getCategories } from '../../helpers/data/categoryData';

const selectCategory = (userId, categoryId) => {
  let domString = `
    <label for="category">Category</label>
    <select class="form-control form-select" id="category_id" required>
    <option value="">Select a category</option>
  `;

  getCategories(userId).then((categoriesArray) => {
    categoriesArray.forEach((category) => {
      domString += `
        <option value="${category.firebaseKey}"
        ${categoryId === category.firebaseKey ? 'selected' : ''}>
        ${category.language}
        </option>
      `;
    });

    domString += '</select>';

    document.querySelector('#select-category').innerHTML = domString;
  });
};

export default selectCategory;
