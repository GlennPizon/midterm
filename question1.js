// Git and GitHub Basics by Glenn Entia Pizon

// Step 1: Initialize a new git repository
console.log("Step 1: Initialize a new git repository named 'midterm' ");
console.log("Command: git init");

// Step 2: Add a file named 'git-basic.txt' with the content 'Glenn Entia Pizon'
console.log("Step 2: Add a file named 'git-basic.txt'");
console.log("Command:");
console.log("echo 'Glenn Entia Pizon' > git-basic.txt");
console.log("git add git-basic.txt");

// Step 3: Commit the change with a message
console.log("Step 3: Commit the change with a message");
console.log("Command: git commit -m 'Add git-basic.txt'");

// Step 4: Create a new repository on GitHub (manual step)
// You need to create a new repository on GitHub through the web interface or API
console.log("Step 4: Create a new repository on GitHub (manual step)");

// Step 5: Link the local repository to the GitHub repository using set-url and push changes
console.log("Step 5: Link the local repository to the GitHub repository and push");
console.log("Commands:");
console.log("git remote set-url origin https://github.com/GlennPizon/midterm");

//Entered my credentials

//THen when verified continue to push---
console.log("git push -u origin main");
