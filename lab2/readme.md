# file system (fs Module)
- directly communicate with OS rather than browser. the common operation on the file or folder are:-
1. file -> righTfile ,readfile, apppemdFile.
2. Folder -> mkdir/md, rem/rmdir,readdir
3. filemetadat -> stat, lstat, rstat
4. watch -> watch, unwatch
5. stream -> readstream(),writestream()
all functions are promise, so it must be called with awaite keyward.
apeend:-
catch:- to handle  the errors/ exeption
finally:- to execute code whether an error occurs or not
throw :-we can generte our own exeption.
try:-if error occurs it moves the code to catch,
# file system (FS module)

# CRUD Project
assume we are making a cart relted project
1. user can add any product (id,name,orice,qnty) into cart
2. user can see all the items of the cart
3. user can remove item from cart
4. user can also update quantity of product
5. all the items should be stored after termination of project
crud:- create retrieve update delete