function postComment() {
    var commenter = document.getElementById("commenterName").value;
    var comment = document.getElementById("commentText").value;
    //insert comment into "comments" div in this format:
    //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>
}

var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';

var templateFn = _.template(commentTemplate);

var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

commentsDiv.innerHTML += templateHTML;
}