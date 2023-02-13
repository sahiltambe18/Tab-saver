var myleads = []
let tabbtn = document.getElementById("tab-btn")
let ipbtn = document.getElementById("ip-btn")
let delbtn = document.getElementById("del-btn")

let ipEl = document.getElementById("ip-el")
let ulEl = document.getElementById("ulel")

let localLeads = JSON.parse(localStorage.getItem("myleads"))

if (localLeads) {
    myleads = localLeads
    list()
}

// tabbtn.addEventListener("click", function () {
//     chrome.tabs.query({active : true , currentWindow : true},function (tabs){
//         myleads.push(tabs[0].url)
//         localStorage.setItem("myleads" , JSON.stringify(myleads))
//         list()
//     })
// })

tabbtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myleads) )
        list()
    })
})

ipbtn.addEventListener("click", function () {
    myleads.push(ipEl.value)

    ipEl.value = ""
    localStorage.setItem("myleads" , JSON.stringify(myleads))
    list()
})

delbtn.addEventListener("click" ,function(){
    localStorage.clear()
    myleads = []
    list()
})

function list() {
    ulEl.innerHTML =" " 
    for (let i = 0; i < myleads.length; i++) {
        ulEl.innerHTML += "<li><a href ='"+myleads[i]+"' target = '_blank'>"+myleads[i]+"</a></li>"
    }
}
