# Is Your Birthday Lucky

## List of Contents
- <a href="#description">Description</a>
- <a href="#input">Input</a>
- <a href="#output">Output</a>
- <a href="#processing">Processing</a>
- <a href="#screenshots">Screenshots</a>
- <a href="#link">Link</a>

> <p id="descrtiption"> <strong>Description:</strong> is your birthday lucky or your born lucky, checkout with one click (just enter your date of birth and your lucky number). If your lucky we respect you and if not then we laugh at you. If your ready to be part of awesome lucky birthday community, then click on the link below.
</p>

<br>

> <p id="input"> <strong>Input:</strong> user has to enter his/her date of birth in format <em>dd/mm/yyyy</em> and lucky number. A user cannot pass either of the inputs empty and partial(dob), if then user will be informed with message. Lucky number input cannot be zero, negative number and floating-point number, only positive numbers are allowed.
</p>

<br>

> <p id="output"><strong>Output:</strong> user will get to know with a message whether his/her birthday is lucky or not, if lucky then informed as <em>Your Birthday is lucky. 🙇</em> or if not lucky then as <em>Your Birthday is not lucky. 🤣</em>. If any error or input entered is correct then user is informed with desired message, stating what went wrong and where.
</p>

<br>

> <p id="processing"><strong>Processing:</strong><ul><li>Get date of birth(dob) from the user and check for not empty and partial, using function <strong>checkDateOfBirth</strong>, if correct then move to next to lucky number input function.</li><li>Get lucky number from user, using function <strong>checkLuckyNumber</strong> which checks for input constraints.</li><li>After that function <strong>isYourBirthdayLucky</strong> computes sum of user date of birth using function <strong>calculateDOBSum</strong> and then modulo operator is applied on previous function output and lucky number as: <pre>sum % luckyNumber</pre></li><li>If remainder(r) is zero then user birthday is lucky or if remainder is not zero then birthday is not lucky. Then user is informed with messaged based on outcome.</li>
</ul>
</p>

<br>

>**Screenhosts:**<p id="screenshots"></p>
![Home screen of the app](https://github.com/shmbajaj/is-your-birthday-lucky/blob/main/screenshots/initial.png?raw=true)
![When user clicks on button, with incorrect inputs.](https://github.com/shmbajaj/is-your-birthday-lucky/blob/main/screenshots/wo_dob.png?raw=true)
![When user birthday is lucky](https://github.com/shmbajaj/is-your-birthday-lucky/blob/main/screenshots/input.png?raw=true)
![When user birthdat is not lucky](https://github.com/shmbajaj/is-your-birthday-lucky/blob/main/screenshots/output.png?raw=true)

<br>

> <p id="link"><strong>Link:</strong> <a href="https://lucky-or-unlucky.netlify.app/" target="blank">Is Your Birtday lucky</a></p>