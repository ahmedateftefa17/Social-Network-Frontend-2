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

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-users fa-fw"> </i> Users
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/users/mostfollowed"><i class="fa fa-users fa-fw"> </i> Most Followed Users</a>
              <a class="dropdown-item" href="/users/all"><i class="fa fa-users fa-fw"> </i> All Users</a>
              <a class="dropdown-item" href="/users/create"><i class="fa fa-plus fa-fw"> </i> Create User</a>
              <a class="dropdown-item" href="/users/login"><i class="fa fa-sign-in fa-fw"> </i> Login as User</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-building fa-fw"> </i> Groups
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/groups/all"><i class="fa fa-building fa-fw"> </i> All Groups</a>
              <a class="dropdown-item" href="/groups/create"><i class="fa fa-plus fa-fw"> </i> Create Group</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-rss fa-fw"> </i> Posts
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/posts/mostLiked"><i class="fa fa-rss fa-fw"> </i> Most Liked Posts</a>
              <a class="dropdown-item" href="/posts/all"><i class="fa fa-rss fa-fw"> </i> All Posts</a>
              <a class="dropdown-item" href="/posts/create"><i class="fa fa-plus fa-fw"> </i> Create Post</a>
            </div>
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
  this.not_exist = function (model) {
    return `<hr>
      <div class="row">
        <div class="col text-center text-muted">
          <h3>
            <i class="fa fa-exclamation-circle fa-3x"></i>
            <br><br>
            There is no ${model}
          <h3>
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
          <form id="AddUserForm">
            <input type="hidden" value="${user._id}" name="GroupId">
            <button class="btn btn-info btn-sm">Follow ${user.name}</button>
          </form>
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
  this.mostFollowed = function (user, view = false) {
    let link = ``;
    if(view)
      link = `<div class="col text-right">
          <a href="/users/${user._id}"><i class="fa fa-search fa-fw"> </i> View User</a>
        </div>`;

    return `<hr>
      <div class="row">
        <div class="col">
          Followers Count: ${user.follower_count}<br>
          Name: ${user.name}<br>
          ID: ${user._id}<br>
          <form id="AddUserForm">
            <input type="hidden" value="${user._id}" name="GroupId">
            <button class="btn btn-info btn-sm">Follow ${user.name}</button>
          </form>
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
          Body: ${post.body}<br>
          Likes: <span post-id="${post._id}">${Object.keys(post.likes).length}</span>
          <br>
          <form id="addLikeForm">
            <input type="hidden" value="${post._id}" name="postId">
            <button class="btn btn-info btn-sm"><i class="fa fa-thumbs-up fa-fw"></i></button>
          </form>
          <small class="text-danger" post-error="${post._id}"></small>
        </div>
        <div class="col text-right">
          <a href="/posts/${post._id}"><i class="fa fa-rss fa-fw"> </i> View Post</a>
        </div>
      </div>
    `;
  }  


 /**
   *
   *
   *
   */
  this.mostLiked = function (post, likes = false) {
    return `<hr>
      <div class="row">
        <div class="col">
          Body: ${post.body}<br>
          Likes: <span post-id="${post._id}">${Object.keys(post.likes).length}</span>
          <br>
          <form id="addLikeForm">
            <input type="hidden" value="${post._id}" name="postId">
            <button class="btn btn-info btn-sm"><i class="fa fa-thumbs-up fa-fw"></i></button>
          </form>
          <small class="text-danger" post-error="${post._id}"></small>
        </div>
        <div class="col text-right">
          <a href="/posts/${post._id}"><i class="fa fa-rss fa-fw"> </i> View Post</a>
        </div>
      </div>
    `;
  }  


  /**
   *
   *
   *
   */
  this.group = function (group, count = 0) {
    return `<hr>
      <div class="row">
        <div class="col">
          ID: ${group._id}<br>
          Title: ${group.title}<br>
          Number of Members: <span group-id="${group._id}">${group.users.length}</span>
          <br>
          <form id="JoinGroupForm">
            <input type="hidden" value="${group._id}" name="GroupId">
            <button class="btn btn-info btn-sm">Join Group</button>
          </form>

            <div class="col text-right">
              <a class="btn btn-info btn-sm" href="/groups/${group._id}">
               Show Posts
              </a>
            </div>

          <small class="text-danger" group-error="${group._id}"></small>
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
