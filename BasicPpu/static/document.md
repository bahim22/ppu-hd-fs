
# Python Data/DBMS info

## SQL

### ORM

## Servers

### Express

### Python

### MIIS

### Apache

Automatically sets the Content-Type response header field. The callback fn(err) is invoked when the transfer is complete or when an error occurs. Be sure to check res.headersSent if you wish to attempt responding, as the header and some data may have already been transferred.

Options:

maxAge defaulting to 0 (can be string converted by ms)
root root directory for relative filenames
headers object of headers to serve with file
dotfiles serve dotfiles, defaulting to false; can be "allow" to send them
Other options are passed along to send.

Examples:

The following example illustrates how res.sendFile() may be used as an alternative for the static() middleware for dynamic situations. The code backing res.sendFile() is actually the same code, so HTTP cache support etc is identical.

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
