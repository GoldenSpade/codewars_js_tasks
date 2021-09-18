# (Anchorize me!)[https://www.codewars.com/kata/5722aeda785220c84900109b] #

Parse the text and replace Globally url with corresponding html syntax.

Supported protocols:

    http
    https
    ftp
    ftps
    file
    smb

NOTE: Ideal will be with ** Regex **

Input

    'hello FTP://world.com !'

Output

    'hello <a href="FTP://world.com">FTP://world.com</a> !'

Input

    'hello http://world.com !'

Output

    'hello <a href="http://world.com">http://world.com</a> !'
