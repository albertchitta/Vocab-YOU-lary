const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a id="home" class="navbar-brand" href="#">
          <img src="https://user-images.githubusercontent.com/83558122/132958195-6c8d6afc-fd76-4c02-ba0a-63896092abdd.PNG" alt="" width="150" height="100" class="d-inline-block align-text-top">
        </a>
        <ul class="navbar-nav">
        <li class="nav-item">
          <a id="create-entry" class="nav-link" href="#">Create Entry</a>
        </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="searchBar">
          <button class="btn btn-outline-success" type="submit" id="search-btn">Search</button>
        </form>
        <div id="logout-button"></div>
      </div>
    </nav>
  `;
};

export default navBar;
