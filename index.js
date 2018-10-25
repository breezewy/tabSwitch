
// jQuery 写法
$('.mod-tab .tab').on('click',function(){
    $(this).addClass('active')
           .siblings()
           .removeClass('active')

    $(this).parents('.mod-tab')
           .find('.panel')
           .eq($(this).index())
           .addClass('active')
           .siblings()
           .removeClass('active')
})


// 原生JS写法
// document.querySelectorAll('.mod-tab .tab').forEach(function(node){
//     node.addEventListener('click',function(){
//         var index
//         this.parentElement.querySelectorAll('.tab').forEach(function(tab,idx){
//             tab.classList.remove('active');
//             if(node === tab){
//                 index = idx;
//             }
//         })
//         this.classList.add('active');
//         this.parentElement.nextElementSibling.querySelectorAll('.panel').forEach(function(panel){
//             panel.classList.remove('active');
//         })
//         this.parentElement.nextElementSibling.querySelectorAll('.panel')[index].classList.add('active');
        
//     })
// })
