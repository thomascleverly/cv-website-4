window.addEventListener('scroll',(event) => {
    // document.querySelector('#header').style.height = '90px'
    document.querySelector('#header').style.boxShadow = '5px 5px 15px #d1d9e6,-5px -5px 15px #fff';
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
        // resumeMenus.forEach(element => {
        //     if (element.textContent != item.textContent)
        //         item.className = 'resume-menu'
        // })
    })
})







