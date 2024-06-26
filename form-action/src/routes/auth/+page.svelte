<script>
  import {page} from '$app/stores';
  import {enhance} from '$app/forms';
  export let form;

  const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
</script>
<form method="post" action="?/login&redirectTo={redirectTo}" use:enhance>
  <div class="container">
    <p>{form?.message || ''}</p>
    <label for="username"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" id="username" name="username" required >
    <br>
    <label for="password"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" id="password" name="password" required >
    <br>
    <button type="submit">Login</button>
    <button formaction="?/register&redirectTo={redirectTo}">Register</button>
  </div>
</form>

<style>
form {
  border: 3px solid #f1f1f1;
}
input[type=text], input[type=password] {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
button {
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 10%;
}
button:hover {
    opacity: 0.8;
}
.container {
    padding: 160px;
}

@media screen and (max-width: 600px) {
    input[type=text], input[type=password] {
        font-size: 14px;
    }
}

</style>