<script>
	export let segment;
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      
	  	<li class="nav-item active"><a class="nav-link" aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li class="nav-item active"><a class="nav-link" aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
		<li class="nav-item active"><a class="nav-link" rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
    </ul>

  </div>
</nav>