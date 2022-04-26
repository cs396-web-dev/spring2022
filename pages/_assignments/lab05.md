---
layout: assignment-two-column
title: REST API Endpoint Activity
type: lab
abbreviation: Lab 5
draft: 0
points: 5
num: 5
due_date: 2022-04-29
---

<style>
    .compact li {
        margin-bottom: 2px;
        line-height: 1.5em;
    }
    table li {
        margin-bottom: 0px;
    }
</style>

## Introduction
For this week's lab, you will complete the tasks specificied in HW3 for the following 2 routes:

{:.compact}
* `/api/posts` (GET, POST)
* `/api/posts/<id>` (GET, PATCH, DELETE)

You will know that you are done when all of the `tests/test_posts.py` pass.

<!-- Sarah has made some walkthrough videos to get you started on HW3. Once you go through a few routes on your own, it should get easier! -->

## Your Tasks
Please complete the following tasks by editing your `/views/posts.py` file:

<table>
    <thead>
        <tr>
            <th>Method/Route</th>
            <th>Description and Examples</th>
            <th>Parameters</th>
            <th>Response Type</th>
            <th>Points</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET /api/posts</td>
            <td>
                All posts in the current users' feed. This includes the current user's posts, as well as the people that the current user is following. You will need to modify this endpoint to get it to work as specified.
                <ul>
                    <li><a href="https://photoapp-spring.herokuapp.com/api/posts">/api/posts</a></li>
                    <li><a href="https://photoapp-spring.herokuapp.com/api/posts?limit=5">/api/posts?limit=5</a></li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><code class="highlighter-rouge">limit (int, optional)</code>: Limits the number of posts returned (defaults to 10, maximum is 50)</li>
                </ul>
            </td>
            <td>List of Post objects</td>
            <td>2</td>
        </tr>
        <tr>
            <td>GET /api/posts/&lt;int:id&gt;</td>
            <td>
                The post associated with the id (already started for you).
                <ul>
                    <li><a href="https://photoapp-spring.herokuapp.com/api/posts/274">/api/posts/274</a></li>
                    <li><a href="https://photoapp-spring.herokuapp.com/api/posts/273">/api/posts/273</a></li>
                </ul>
            </td>
            <td></td>
            <td>Post object</td>
            <td>1</td>
        </tr>
        <tr>
            <td>POST /api/posts</td>
            <td>
                Should create a new post (already started for you).
            </td>
            <td>
                <ul>
                    <li>image_url: string (required)</li>
                    <li>caption: string</li>
                    <li>alt_text: string</li>
                </ul>
            </td>
            <td>Post Object</td>
            <td>2</td>
        </tr>
        <tr>
            <td>PATCH /api/posts/&lt;int:id&gt;</td>
            <td>
                Should update the post (already started for you).
            </td>
            <td>
                <ul>
                    <li>image_url: string (optional)</li>
                    <li>caption: string (optional)</li>
                    <li>alt_text: string (optional)</li>
                </ul>
            </td>
            <td>User Object</td>
            <td>1</td>
        </tr>
        <tr>
            <td>DELETE /api/posts/&lt;int:id&gt;</td>
            <td>
                Should delete the post (already started for you).
                Note that the delete is configured to cascade (all associated comments, likes, bookmarks, etc. will also be deleted).
            </td>
            <td></td>
            <td>User Object</td>
            <td>1</td>
        </tr>
    </tbody>
</table>

## What to turn in
Please upload your `views/posts.py` file. If you used any additional python files to get your code to work, please upload those as well!