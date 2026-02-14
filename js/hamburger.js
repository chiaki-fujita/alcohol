// $(".openbtn").click(function () {
//     $(this).toggleClass('active');
// });

// HTMLの中から特定の要素を取得して、変数に入れている
const openBtn = document.querySelector('.openbtn');
const menu = document.querySelector('.menu-list');
const overlay = document.querySelector('.overlay');


openBtn.addEventListener('click', () => {
  // classList...要素が持っている classの一覧
  openBtn.classList.toggle('active'); // ボタンの×アニメーション
  menu.classList.toggle('active');    // メニューのスライド表示
  overlay.classList.toggle('active'); // 画面全体の暗転
});


overlay.addEventListener('click', () => {
  // 必ずとじたいときはremoveを
  openBtn.classList.remove('active');
  menu.classList.remove('active');
  overlay.classList.remove('active');
});
