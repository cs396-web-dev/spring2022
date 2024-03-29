---
layout: assignment-two-column
title: Fetch API Lab
type: lab
abbreviation: Lab 7
draft: 0
num: 7
points: 5
due_date: 2022-05-13
---

<style>
    table.rubric th:nth-child(1), 
    table.rubric td:nth-child(1) {
        width: 70px !important;
        min-width: 70px !important;
    } 
    table.rubric th:nth-child(2), 
    table.rubric td:nth-child(2) {
        width: 200px !important;
        min-width: 200px !important;
    } 
</style>

In today's lab, your peer mentor will be walking you through how to implement the Follow / Unfollow functionality from [HW04](hw04) (including how to make it accessible). Sarah has also made a <a href="https://northwestern.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=92d9175e-5bd2-429d-b7db-ae8d0105709b" target="_blank">video walkthough of Lab 7</a>, if you would like to take a look at one approach to building the interactions. This walkthrough was made during the winter quarter (when it was "Lab 6"), but the lab is the same. Feel free to code along with the video or do it your own way! In the lab, the following tasks are covered:

{:.compact}
1. Making the HTML & CSS for the suggested accounts.
2. Populating the suggested accounts using the REST API.
3. Getting the "Follow" button to create a new `following` record using the REST API.
4. Getting the "Unfollow" button to remove an existing `following` record using the REST API.
5. Ensuring that the UI is accessible.

## Your Task
Before beginning the lab, please complete sections 1 & 2 (Introduction and Set Up) of [HW04](hw04). When you're done, please complete the following tasks:


<table class="rubric">
    <thead>
        <tr>
            <th>Num</th>
            <th>Task</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1.</td>
            <td>Right Panel: Suggested Accounts</td>
            <td>
                <ul>
                    <li>
                        Render an HTML representation of suggested user accounts in the right-hand panel (just like in HW1 & HW2) using data from the <code class="highlighter-rouge">/api/suggestions</code> endpoint.
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>2.</td>
            <td>
                Follow Account
            </td>
            <td>
                <ul>
                    <li>
                        When the user clicks the follow button of an "unfollowed" account, a POST request is issued to the <code class="highlighter-rouge">/api/following</code> endpoint.
                    </li>
                    <li>If the POST response indicates success, redraw the button to indicate that you are now following the account.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>3.</td>
            <td>
                Unfollow Account
            </td>
            <td>
                <ul>
                    <li>
                        When the user clicks the unfollow button of an "followed" account, a DELETE request is issued to the <code class="highlighter-rouge">/api/following/&lt;id&gt;</code> endpoint.
                    </li>
                    <li>If the DELETE response indicates success, redraw the button to indicate that you are no longer following the account.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>4.</td>
            <td>
                Accessibility: Keyboard Navigation
            </td>
            <td>
                <ul class="compact">
                    <li>Ensure that all of the buttons are tabbable</li>
                    <li>Ensure that all the event handlers can be triggered using the "spacebar" or "enter / return" keys.</li>
                    <li>Hint: if you use the HTML <code class="highlighter-rouge">&lt;button&gt;&lt;/button&gt;</code> element for all of your buttons, you get this functionality for free.
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>5.</td>
            <td>
                Accessibility: Aria attributes
            </td>
            <td>                
                <ul>
                    <li>
                        Use the 'aria-label' and 'aria-checked' attributes to indicate to the screen reader whether the follow / unfollow buttons are turned on or off.
                    </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>


<img class="screenshot frame" alt="screen shot of the post panel" style="width:80%;" src="/spring2022/assets/images/homework/hw04/following.gif"/>


## What to Turn In
To submit Lab 7, please upload a zip file that contains the HTML, CSS, and JavaScript files that make your follow / unfollow code work. If it's easier, you can just zip and submit your entire `photo-app` directory (minus your `env` and `git` directories).
