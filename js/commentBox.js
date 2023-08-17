// step -1 add event listener to the button
document.getElementById('btn-post').addEventListener('click',function(){
    // console.log('connected');

    // step-2 get the comment
    const commentBox = document.getElementById('new-comment');
    const commentText = commentBox.value;
    // console.log(commentText);

    // set the comment inside the comment container

    const commentContainer = document.getElementById('comment-container');

    const pa = document.createElement('p');

    pa.innerText = commentText;
    
    commentContainer.appendChild(pa);

    // clear the comment box

    commentBox.value = '';


})