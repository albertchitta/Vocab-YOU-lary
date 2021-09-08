const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
          Vocab-YOU-lary
        </a>
        <ul class="navbar-nav">
        <li class="nav-item">
          <a id="create-entry" class="nav-link" href="#">Create Entry</a>
        </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  `;
};

export default navBar;
