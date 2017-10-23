/**
 * Created by 李雅婷 on 2017/10/23.
 */
window.onload= function () {
    var ol=document.getElementById('ol');
    var li=document.getElementById('li');
    var olli=ol.getElementsByTagName('li');
    li.onmouseover= function () {
        ol.style.display='block';
    };
    li.onmouseout= function () {
        ol.style.display='none';
    };
    for(var i=0;i<olli.length;i++){
        olli[i].onmouseover=function(){
            this.style.color='#fff';
            this.style.background='dodgerblue'
        };
        olli[i].onmouseout=function(){
            this.style.color='';
            this.style.background=''
        };
    }


};






