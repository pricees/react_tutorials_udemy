
render: function() {
    var visible;

    if(this.state.dropdownOpen) {
        visible = "visible";
    } else {
        visible = "hidden";
    }
    return <div class="dropdown">
      <Badge />
      <UnorderedList/ >
    </div>
}
  <button class="btn btn-default dropdown-toggle">
    Dropdown
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li><a>Action</a></li>
    <li><a>Another action</a></li>
    <li><a>Something else here</a></li>
    <li><a>Separated link</a></li>
  </ul>
</div>
