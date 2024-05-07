$(function() {
    $(window).on("load, scroll", (e) => {
        //ロード時
        if(e.type === "load") {
            console.log("loadイベントが発生しました");
        }
        //スクロール時
        if(e.type === "scroll") {
            console.log("scrollイベントが発生しました");
        }
    });
});