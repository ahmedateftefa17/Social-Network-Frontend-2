/**
 *
 *
 *
 */
function Component () {
  /**
   *
   *
   *
   */
  this.nav = function (params) {
    return `<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="/"><i class="fa fa-telegram fa-fw"> </i> SocialNetwork</a>

      <div class="collapse navbar-collapse nav-right" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/users/all"><i class="fa fa-users fa-fw"> </i> Users</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/groups/all"><i class="fa fa-building fa-fw"> </i> Groups</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/posts/all"><i class="fa fa-rss fa-fw"> </i> Posts</a>
          </li>
        </ul>
      </div>
    </nav>
    <br>
    `;
  }


  /**
   *
   *
   *
   */
  this.footer = function (params) {
    return `<hr>
      <div class="row">
        <div class="col text-center text-muted">
          <i class="fa fa-telegram fa-fw"> </i> SocialNetwork <i class="fa fa-copyright fa-fw"> </i> 2018
        </div>
      </div>
    `;
  }


  /**
   *
   *
   *
   */
  this.user = function (user, view = false) {
    let link = ``;
    if(view)
      link = `<div class="col text-right">
          <a href="/users/${user._id}"><i class="fa fa-search fa-fw"> </i> View User</a>
        </div>`;

    return `<hr>
      <div class="row">
        <div class="col">
          ID: ${user._id}<br>
          Name: ${user.name}<br>
          Email: ${user.email}<br>
        </div>
        ${link}
      </div>
    `;
  }


  /**
   *
   *
   *
   */
  this.post = function (post, likes = false) {
    return `<hr>
      <div class="row">
        <div class="col">
          ID: ${post._id}<br>
          Body: ${post.body}<br>
          Likes: ${Object.keys(post.likes).length}
        </div>
        <div class="col text-right">
          <a href="/posts/${post._id}"><i class="fa fa-rss fa-fw"> </i> View Post</a>
        </div>
      </div>
    `;
  }
}


/**
 *
 *
 *
 */
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ')
      c = c.substring(1);
    if (c.indexOf(name) == 0)
      return c.substring(name.length + 2, c.length);
  }
  return "";
}


$(document).ready(function() {
  /**
   *
   *
   *
   */
  window.componentsLoaded = false;
  let __temp_params = getCookie('params');
  if(__temp_params == "defined")
    __temp_params = "{}";
  window.params = JSON.parse(__temp_params);
  let componentsSpans = Array.from(document.querySelectorAll('span.component'));
  for(let i = 0; i < componentsSpans.length; i++) {
    let componentAttr = componentsSpans[i].getAttribute('component');
    let component = new Component();
    componentsSpans[i].innerHTML = component[componentAttr](window.params);
    if(i + 1 == componentsSpans.length) window.componentsLoaded = true;
  }
});
