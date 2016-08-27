Python 3.5.2 (v3.5.2:4def2a2901a5, Jun 26 2016, 10:47:25)
[GCC 4.2.1 (Apple Inc. build 5666) (dot 3)] on darwin
Type "copyright", "credits" or "license()" for more information.
>>> WARNING: The version of Tcl/Tk (8.5.9) in use may be unstable.
Visit http://www.python.org/download/mac/tcltk/ for current information.

>>> num = 10
>>> num
10
>>> name = input("what is you name:")
what is you name: Josh
>>> age = prompt("What is your age:")
Traceback (most recent call last):
  File "<pyshell#4>", line 1, in <module>
    age = prompt("What is your age:")
NameError: name 'prompt' is not defined
>>> age = input("What is your age: ")
What is your age: 31
>>> email = input("What is your email")
What is your email joshgressman@gmail.com
>>> name + email + age
' Josh joshgressman@gmail.com31'
>>> array = [name, age, email]
>>> array
[' Josh', '31', ' joshgressman@gmail.com']
>>> 
