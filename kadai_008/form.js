$(function() {
    //クリックボタンをクリック時
    $(".btn").on("click", function() {
        //テキストボックスに「クリックしました！」と表示
        $(".text-box").val("クリックしました！");
    });
});