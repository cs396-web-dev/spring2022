---
layout: assignment-two-column
title: HTML & CSS Practice
type: lab
abbreviation: Lab 1
draft: 1
num: 1
points: 5
due_date: 2022-04-01
---

<style>
    blockquote h2 {
        margin: auto !important;
        padding: 0px !important;
    }
</style>

{:.blockquote-no-margin}
> ## Readings
> If you are relatively new to git and GitHub, please complete the GitHub tutorial before coming to lab this week:
> * <a href="https://guides.github.com/activities/hello-world/">GitHub Tutorial</a> and <a href="https://www.git-tower.com/blog/git-cheat-sheet/" target="_blank">Git Cheat Sheet</a>
>

## Introduction
The goal of today's lab is to help you get you started using GitHub (if you're new to using it). Specifically, you will:

{:.compact}
1. [Install VS Code](#vscode)
1. [Configure a new repository](#github) (on GitHub.com)
1. [Configure git locally](#git) (on your laptop)
1. [Review some git basics](#basics) (add, commit, push, and branch)
1. [Practice branching](#branching)
1. Optional: HTML Practice


## Your Tasks

{:#vscode}
### 1. Install Visual Studio Code
We recommend that you use Visual Studio Code as your code editor:
1. Download and install Visual Studio Code: <a href="https://code.visualstudio.com" target="_blank">https://code.visualstudio.com/</a>
1. Also install the <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank">Live Server" extension</a> (click the green "Install" button).

{:#github}
### 2. Configure your GitHub repository
1. If you haven't already, register for GitHub: <a href="https://github.com/join" target="_blank">https://github.com/join</a>. 
1. Then, create a new **public** repository called `webdev-labs` (see tutorial above if you don't know how). Please make sure that you mark your repo "public." 
    * Do **NOT** check the `Add a README file`, `Add .gitignore`, or `Choose a license` options.
1. Finally, create a personal access token as follows:
    * Navigate to "Settings" in the top, right-hand menu
    * In the left-hand navigation panel, scroll down to the bottom until you see the "Developer settings" link. Click it.
    * Then click the "Personal access tokens" link in the left-hand navigation panel.
    * Generate a new token:
        * Name the token webdev
        * Make it so that it "never expires"
        * Check the "repo" checkbox (which should check all of the child settings as well).
    * Save the token somewhere safe (you'll need it later, and you won't be able to view it again after you first create it).

{:#git}
### 3. Configure git on your computer
1. Install git on your computer: <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank">https://git-scm.com/book/en/v2/Getting-Started-Installing-Git</a>
1. On your computer, create a folder called `webdev-labs` (create it somewhere that you can find it later). Next, download `lab01.zip` (below), unzip it, and move your `lab01` folder inside of your `webdev-labs` folder. 

<a class="nu-button" href="/spring2022/course-files/labs/lab01.zip">lab01.zip<i class="fas fa-download" aria-hidden="true"></i></a>

Your directory structure should look like this:

```bash
webdev-labs
└──lab01
    ├── exercise01
    └── exercise02
```

When you're done, you're going to run a few commands on the command line (on your laptop) to (a) initialize an empty git repository, (b) add your lab01 files to your repository, (c) commit them, (d) point your local repository to the GitHub repository that you just created, and (e) "push" your files to GitHub. 

To do this, navigate into your `webdev-labs` directory from the command line, and issue the following commands (one at a time, in the order shown):

```shell
git init
git add .
git commit -m "first commit"
git branch -M main

# IMPORTANT: Replace <USERNAME> and <REPOSITORY> with YOUR github username and
# YOUR repository (webdev-labs). For example, Sarah's remote address would be: 
#   https://github.com/vanwars/webdev-labs.git
git remote add origin https://github.com/<USERNAME>/<REPOSITORY>.git  
git push -u origin main
```

When you're done, navigate back to the GitHub repository you just made and verify that your files have been uploaded.

{:#basics}
### 4. Git Basics
What did I just do? Well, please read the cheatsheet summary below to see an annotated explanation of each command used. It is tempting to not read and skip over this section, but please do (and ask your peer mentor some questions if you have them)!

{:.git}
| | Command | What it does | When to you use it |
|--|--|--|--|
| 1. | `git init` | Creates a brand new git repo on your local machine. If you look in your file manager, you'll see a new `.git` folder that has been created at the root of your `webdev-labs` directory. | **Just once** (when you're first setting up your repo) |
| 2. | `git add .` | The git `add` command stages changes in the working directory to the staging area. It tells Git that you want to include updates to one or more files in the next commit. The dot (.) indicates that you want to add "all" your files. | **Often:** Anytime you create a new file and want to ensure that file is under version control. |
| 3. | `git status` | Shows you all of the files that have changed since you last committed. Also tells you which files are tracked and which are not. | **Often:** Anytime you want to check the status of your files. |
| 4. | `git commit -m 'My first commit'` | Committing is like "saving" a version of all of your staged changes. This is useful if you ever needed to later revert to a previous version of your code. | **Often:** Anytime you want to save a version of your work. |
| 5. | `git branch -M main"` | Creates a new branch called `main` and switches to it. A branch is named version of your code. Technically, they are actually pointers to a snapshot of your code changes. | **Occasionally:** Anytime you want to create a new named branch of your work. |
| 6. | `git remote add origin <your_repo_address>` | Connects the local repo you just created (on your computer) to your GitHub repo (in the cloud). Replace `<your_repo_address>` with the address of the GitHub repo you just made, using the HTTPS protocol | **Just once** (when you're first setting up your repo) |
| 7. | `git push -u origin main` | "Pushing" copies all of your committed files to your GitHub repo (on the cloud). `origin` refers to your current branch and `main` refers to your remote branch. If the remote branch does not exist, it will be created when you push for the first time. | **Often:** Anytime you want to save a version of your files to the cloud (or submit your homework)! |

To continue saving and tracking your changes using git / GitHub, repeat steps 2, 3, 4, and 7 as needed.

### 5. Practice branching
Now that you've set up your GitHub, let's try to understand how "branching" works. To do this, you'll start by making a new branch from your command line as follows:

```
git checkout -b lab01-before
git branch
```

After issuing these commands, you should see something like this...

```bash
* lab01-before
  main
```
...where there is an asterik before lab01-before (which may also be green). The asterik indicates that `lab01-before` is now your "working branch." Next, create a second branch as follows:

```
git checkout -b lab01-after
git branch
```

After issuing these commands, you should see something like this...

```bash
* lab01-after
  lab01-before
  main
```

...where lab01-after is now your current branch. In total, you now have three branches (or pointers to different snapshots of your code): `main`, `lab01-before`, and `lab01-after`. Now, let's make some changes to some of the files in the `lab01` folder.




## 4. HTML & CSS Introduction
Once you've set up your git repository, try the following three HTML / CSS Exercises.

### 1. Box Model Practice
1. Open the `lab01/exercise01` folder.
1. Open `index.html` and uncomment the stylesheet link. 
    * Note that in order for a stylesheet to be applied to an HTML file, you have to explicitly link to it in the `<head></head>` section.
1. Change out the photo to another photo that you find on the Internet.
    * Hint: [image reference](/spring2022/html-reference/images/)
1. Make your card look like the one shown below by using various selectors:
    * Hint: [box model reference](/spring2022/css-reference/box-model/)

<img class="small" src="/spring2022/assets/images/labs/lab01/card.png" />

### 2. Layout Practice
Using any approach you want, please create the following screens for desktop, tablet, and mobile (pictured below). To do this:

1. Open the `lab01/exercise02` folder.
1. You will need to use media queries, which have been set up for you in the `exercise02/style.css` file.
    * Hint: [media queries reference](/spring2022/css-reference/media-queries/)
1. You will also need to uncomment the viewport meta tag in the `<head></head>` section of your HTML file.
    * Read more about the viewport meta tag on <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag" target="_blank">MDN</a>. In the context of mobile web design, this tag tells the browser to honor the dimensions of the device (versus assuming that the website was designed for a desktop screen).

#### Desktop

<img class="large" src="/spring2022/assets/images/labs/lab01/desktop.png" />

#### Tablet

<img class="medium" align="top" src="/spring2022/assets/images/labs/lab01/tablet1.png" />
<img class="medium" align="top" src="/spring2022/assets/images/labs/lab01/tablet2.png" />

#### Mobile

<img class="small" src="/spring2022/assets/images/labs/lab01/mobile.png" />


### 3. Jazz it Up
If you have time, please experiment with one or more of the following enhancements:
1. Try changing the font of the Card header (H2 tag) to use a Google Font.
    * Hint: Give <a href="https://www.freecodecamp.org/news/how-to-use-google-fonts-in-your-next-web-design-project-e1ad48f1adfa/" target="_blank">this tutorial</a> a shot (or find one you like better)
1. Change out one of the images for an embedded video (from YouTube of Vimeo).
    * Hint: [Embedding media](/spring2022/html-reference/media-tags/)
1. Try modifying your HTML and CSS files however you want. 

## 5. What to Turn In
Note: if you weren't able to complete all three of the exercises in the time alotted, that's fine. This was just a warm-up and you are being assessed on evidence of a good-faith effort. The most important thing is that you set up your GitHub

To submit Lab 1:

### 1. Push all of your files to GitHub
Please copy the latest version of your files to GitHub by issuing the following commands:

```shell
git add .    # in case you created any new files
git commit -am 'Committing all of my files'
git status   # to make sure that all of your files are being tracked
git push     # sends your files to GitHub
```

### 2. Paste a link to your repo on Canvas
Paste a link to your `webdev-labs` GitHub repository into the Canvas textbox for <a href="https://canvas.northwestern.edu/courses/157233/assignments/1007942" target="_blank">Lab 1</a>.

### 3. Answer the following question on Canvas
**Below the link to your repo**, in a brief reflective response (about 4-8 sentences total), please consider the following questions:
- Why, and to whom, is accessibility important?
- How might you make a site (or app) like Instagram more accessible?
