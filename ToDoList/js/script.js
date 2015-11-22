$(function() {

    $('#todoList ul').sortable({
        items: "li:not('.listTitle, .addItem')", //listTitle、addItem 不要排序
        connectwith: "ul",
        dropOnEmpty: true,
        placeholder: "emptySpace",
        update: function() { //儲存
            var order = $(this).sortable('toArray').toString(); //存一個陣列
            alert(order); //跳視窗通知現在的內容
        }
    });

    $('input').keydown(onKeydown);


    function onKeydown(event) {
        if (event.keyCode == 13) { //每個鍵盤都有一個代號
            var item = $(this).val();
            $(this).parent().parent().append('<li >' + item + '</li>');
            $(this).val(''); //把欄位清空
        }
    }

    $('#trash').droppable({ //拖曳至垃圾桶區域丟掉
        drop: function(event, ui) {
            ui.draggable.remove();
        }
    });



});
