window.addEventListener('scroll', event => {
    if (window.scrollY>200){
        document.querySelector('#header').className = 'header-fixed';
        document.querySelector('#introduce').style.paddingTop = '120px';
    }
    else{
        document.querySelector('#header').className = '';
        document.querySelector('#introduce').style.paddingTop = '0';
    }
});

var menusInner = document.querySelectorAll('.menu-inner')
var pageIsSelecting = 'Home'
menusInner.forEach(item => {
    item.addEventListener('click', event => {
        item.style.color = '#ff014f'
        pageIsSelecting = item.textContent
        menusInner.forEach(element => {
            if (element.textContent != item.textContent)
                element.style.color = '#3C3E31'
        })
    })
})

menusInner.forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.opacity = '1'
        menusInner.forEach(element => {
            if (element.textContent != item.textContent && element.textContent != pageIsSelecting)
                element.style.opacity = '0.6'
        })
    })
})

menusInner.forEach(item => {
    item.addEventListener('mouseout', event => {
        item.style.opacity = '1'
        menusInner.forEach(element => {
            element.style.opacity = '1'
        })
    })
})


resumeMenuIsSelected = 'Education'
var resumeMenus = document.querySelectorAll('.resume-menu')
resumeMenus.forEach(item => {
    item.addEventListener('click', event => {
        item.className = 'resume-menu active'
        resumeMenuIsSelected = item.textContent
        resumeMenus.forEach(element => {
            if (element.textContent != item.textContent)
                element.className = 'resume-menu'
        })
    })
})

resumeMenus.forEach(item => {
    item.addEventListener('mouseover', event => {
        item.className = 'resume-menu active'
        resumeMenus.forEach(element => {
            if (element.textContent != item.textContent && element.textContent != resumeMenuIsSelected)
                element.className = 'resume-menu'
        })
    })
})

resumeMenus.forEach(item => {
    item.addEventListener('mouseout', event => {
        if (item.textContent != resumeMenuIsSelected)
            item.className = 'resume-menu'
    })
})

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("tes-slider")
  var y = document.getElementsByClassName("tes-radio-btn")
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].className = "tes-radio-btn"  
  }
  x[slideIndex-1].style.display = "block"; 
  y[slideIndex-1].className = 'tes-radio-btn active' 
}

function btnShowDivs(n) {
    var i;
    var x = document.getElementsByClassName("tes-slider")
    var y = document.getElementsByClassName("tes-radio-btn")
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
      y[i].className = "tes-radio-btn"
    }
    x[n].style.display = "block";  
    y[n].className = 'tes-radio-btn active'
}






