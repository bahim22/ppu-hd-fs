
# Servers, DB, SQL v. noSQL, DBMS, ORM

## Express, Apache, MIIS, Uvicorn, Starlette

Automatically sets the Content-Type response header field. The callback fn(err) is invoked when the transfer is complete or when an error occurs. Be sure to check res.headersSent if you wish to attempt responding, as the header and some data may have already been transferred.

Options:

maxAge defaulting to 0 (can be string converted by ms)
root root directory for relative filenames
headers object of headers to serve with file
dotfiles serve dotfiles, defaulting to false; can be "allow" to send them
Other options are passed along to send.

Examples:

The following example illustrates how res.sendFile() may be used as an alternative for the static() middleware for dynamic situations. The code backing res.sendFile() is actually the same code, so HTTP cache support etc is identical.

```js
app.get('/user/:uid/photos/:file', function(req, res){
  var uid = req.params.uid
    , file = req.params.file;

  req.user.mayViewFilesFrom(uid, function(yes){
    if (yes) {
      res.sendFile('/uploads/' + uid + '/' + file);
    } else {
      res.send(403, 'Sorry! you cant see that.');
    }
  });
});
@api — public

app.get('/user/:uid/photos/:file', function(req, res){
  var uid = req.params.uid
    , file = req.params.file;

  req.user.mayViewFilesFrom(uid, function(yes){
    if (yes) {
      res.sendFile('/uploads/' + uid + '/' + file);
    } else {
      res.send(403, 'Sorry! you cant see that.');
    }
  });
});
```

```sh
url=$1 # or just use $1 in place where you'd insert the param.
branchname='name'
message=$2
git clone $url # git clone $1; then replace $1 w/ url when calling script
git status # what's changed since last commit
git checkout -b $branch_name
git add . # add all edited files to repo
git commit -m $message || $2
git push -u origin || git push ssh://git@ssh.github.com:443/($uname)/$repo.git

git add . && git commit -m 'commit message' \
git push -u origin dev
```

```js './file-serve.js'

// Request URL string. This contains only the URL that is present in the actual HTTP request. Take the following request:

GET /status?name=ryan HTTP/1.1
Accept: text/plain
// To parse the URL into its parts:

new URL(request.url, `http://${request.getHeaders().host}`);
/* When request.url is '/status?name=ryan' and
request.getHeaders().host is 'localhost:3000':
*/
$ node
> new URL(request.url, `http://${request.getHeaders().host}`)
URL {
  href: 'http://localhost:3000/status?name=ryan',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  pathname: '/status',
  search: '?name=ryan',
  searchParams: URLSearchParams { 'name' => 'ryan' },
  hash: ''
}
```

```sh
# mac
brew install ngrok/ngrok/ngrok

# Ubuntu
curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | \
  sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && \
  echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | \
  sudo tee /etc/apt/sources.list.d/ngrok.list && \
  sudo apt update && sudo apt install ngrok
```
