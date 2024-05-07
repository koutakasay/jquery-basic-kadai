//ロード時
$(window).on("load", function() {
    console.log("loadイベントが発生しました");
});

//スクロール時
$(function() {
    $(document).on("scroll", () => {
        console.log("scrollイベントが発生しました");
    });
});
