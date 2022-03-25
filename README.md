# studious-chainsaw


This project consists of several commands:

new       ->  node index new title="---" body="---"
delete    ->  node index delete title="---"
list      ->  node index list 
read      ->  node index read title="---"

Here --- denotes the name you want.

The functioning of the commands will be as follows:

new     -> It will create a new note with the title and body specified if the title not already taken.
                -> If the title is taken it will give a error message and the note won't be saved.
delete  -> It will delete the node with the title specified.
                -> If there isn't any node with the title specified it will give a error message.
list    -> It will list all the notes in the databse.
read    -> It will print the body of a note with the specified title.
