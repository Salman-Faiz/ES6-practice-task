function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => showData(data))
}
function showData(json){
    console.log(json);
}