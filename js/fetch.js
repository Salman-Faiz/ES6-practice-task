function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => showData(data))
}
function showData(users){
    // console.log(users);
    const userData =document.getElementById('user-list');

    for(const user of users){
        // console.log(user);
        const list=document.createElement('li');
        
        list.innerText= user.name;
        userData.appendChild(list);


    }
}
function postsData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => showPosts(json))
}
function showPosts(data){
    const userPosts =document.getElementById('posts-div');
    for(const user of data){
        // console.log(user);
        const divPost=document.createElement('div')
        divPost.classList.add('posts')
        divPost.innerHTML=`
                        <h4>User ID:${user.id}</h4>
                        <h4>User Title${user.title} </h4>
                        <p> User Description${user.body}</p>
        `
       
        userPosts.appendChild(divPost);
    }
}
postsData();