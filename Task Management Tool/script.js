$(document).ready(function(){
    
    var taskList = $("#task-list");
    var todoInput = $("#todo-input");
  
    taskList.find("li").each(function(){
        $(this).append("<button class='delete'>x</button>");
    });
    
    $("#add-btn").click(function(){
        var inputValue = todoInput.val();
        if(inputValue === ""){
            alert("Cannot proceed with empty task");
        } 
        var newTask = $("<li>" + inputValue + "</li>");
        taskList.append(newTask);
        newTask.append("<button class='delete'>x</button>");
        todoInput.val("");
    });
    
    $(document).on("click", "li", function(){
        $(this).toggleClass("checked");
    });
    
    $(document).on("click", ".delete", function(){
       $(this).parent().hide(); 
    });


});