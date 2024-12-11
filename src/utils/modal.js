// 获取触发模态框的自定义属性
var modalButtons = document.querySelectorAll("[data-modal-action]");

// 获取模态框主体
var modals = document.querySelectorAll(".modal");

// 监听模态框的按钮事件
modalButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var targetId = this.dataset.modalTarget;
        var targetModal = document.getElementById(targetId);

        if (targetModal) {
            var action = this.dataset.modalAction;

            if (action === "open") {
                console.log("打开模态框：forEach " + targetId);
                openModal(targetModal);
            } else if (action === "close") {
                closeModal(targetModal);
            }
        }
    });
});

// 打开模态框
function openModal(modal) {
    modal.style.display = "block";
    modal.querySelector(".modal-content").classList.remove("modal-hide");
}

var show = false;
// window.onload = function() {
//     if (show) {
//         return;
//     }
//     // 页面加载完成后，等待 1 秒，然后打开模态框
//     setTimeout(function() {
//         show = true;
//         openModal(document.getElementById('myModal'));
//     }, 1000);
// };

// document.getElementById("myModal").style.display="none"
// document.getElementById("btn").style.display="none"

var modalContent = document.getElementById("modalContent");

modalContent.innerHTML = `
            <h4 style="color:red">2024.12.11 凌晨</h4>
            <p class="updateContent">
              1.  近期主要在搞博客，研究live2D看板娘和音乐播放器插件aplayer等。 live2D模型还是可以研究一下的，通过实例本地调整来联系html/css/javascript语法来加深理解。 <br />2.  计划把博客先搞起来，然后在博客里面整理技术文档，然后逐步搭建主页、自定义导航、diy音乐播放器、网站监测等等，后续应该还会更新本地jenkins维护心得、nginx反向代理、cloudflare worker/pages、https证书申请及配置. <br />3.  与其无所事事浪费精力，不如自己找点有意思的东西然后搞起来，哪怕别人觉得没什么意义。人生嘛，不是一条固定的轨道，而是一片旷野，充满着希望和挑战，你可以选择在列车上看风景，但不如走下来去看看更广阔的土地<br />
            </p>
            <h4 style="color:red">2024.12.12 凌晨</h4>
            <p class="updateContent">
              1. 主要对博客进行了主题美化 自定鼠标，live2D, 文章更新时间，多列显示友情链接等 <br />
              2. 后续有空可以看看live2d的东西自己diy一个
            </p>

            `;

document.onreadystatechange = function () { //当页面加载状态改变的时候执行function
    if (show) {
        return;
    }
    if (document.readyState == "complete") {//当页面加载状态为完全结束时进入 
        setTimeout(function () {
            show = true;
            console.log("打开模态框：onreadystatechange " + document.getElementById('myModal'));
            
            openModal(document.getElementById('myModal'));
        }, 1000);
    }
}

// 关闭模态框
function closeModal(modal) {
    modal.querySelector(".modal-content").classList.add("modal-hide");
    modal.querySelector(".modal-content").addEventListener("animationend", function () {
        modal.style.display = "none";
    }, { once: true });
}

// 监听模态框的关闭时事件
modals.forEach(function(modal) {
    var closeButton = modal.querySelector(".close");
    if (closeButton) {
        closeButton.addEventListener("click", function() {
            var targetModal = this.closest(".modal");
            closeModal(targetModal);
        });
    }
});

// 当用户点击模态框外部时，关闭模态框
window.onclick = function (event) {
    modals.forEach(function(modal) {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
};
