Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore

@lakshmydivyasharma
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


cjordanball
/
ByteBites
2
68
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
ByteBites/problems/medium/M067SimplePassword.js /

Jordan Ball clean up incorrect code, add tests, set up M068
Latest commit fc26358 on Dec 2, 2018
 History
 0 contributors
35 lines (30 sloc)  980 Bytes

/*
Have the function SimplePassword(str) take the str parameter being passed and determine if it passes
as a valid password that follows the list of constraints:0
1. It must have a capital letter.
2. It must contain at least one number.
3. It must contain a punctuation mark.
4. It cannot have the word "password" in the string.
5. It must be longer than 7 characters and shorter than 31 characters.
If all the above constraints are met within the string, the your program should return the
string true, otherwise your program should return the string false. For example: if str is
"apple!M7" then your program should return "true".
*/

const info = {
	name: 'SimplePassword',
	number: 67,
	level: 'medium',
	methods: [''],
	concepts: ['regular expressions']
};

const SimplePassword = str => (
		/[A-Z]/.test(str) &&
		/\d/.test(str) &&
		/[^\w\s/]/.test(str) &&
		!/password/i.test(str) &&
		str.length > 7 && str.length < 31
	);

module.exports = {
	SimplePassword,
	info
};
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
