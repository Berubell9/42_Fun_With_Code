let TodoList = [];

function createTodo(text) {
    return $('<div class="todo"></div>').html('<p>' + text + '</p>' + '<button onclick="remove(\'' + text + '\')">x</button>');
}

function render() {
    $('#ft_list').empty();
    $.each(TodoList, function(index, element) {
        $('#ft_list').append(createTodo(element));
    });
    document.cookie = encodeURIComponent(JSON.stringify(TodoList));
}

function newTodo() {
    let name = prompt("Name the todo.");
    if (name.length > 0) {
        TodoList.unshift(name);
        render();
    }
}

function remove() {
    let yes = confirm('Are you sure to remove.');
    if (yes) {
        TodoList.splice($.inArray(yes,TodoList));
        render();
    }
}

$(document).ready(function() {
    let save = document.cookie;
    if (save.length > 0) {
        TodoList = JSON.parse(decodeURIComponent((save)));
        render();
    }
});