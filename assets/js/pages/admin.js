let addBtn = document.querySelector('.add-btn-js')
let editBtn = document.querySelector('.edit-btn-js')
let removeBtn = document.querySelector('.remove-btn-js')
let removeDisplay = 'none'
let editDisplay = 'none'
removeBtn.addEventListener('click', function(e){
    if (removeDisplay == 'none'){
        document.querySelectorAll('.edit-icon-js').forEach(item => {
            item.style.display = 'none'
            editDisplay = 'none'
        })
        document.querySelectorAll('.remove-icon-js').forEach(item => {
            item.style.display = 'flex'
            removeDisplay = 'flex'
        })
    }
    else{
        document.querySelectorAll('.remove-icon-js').forEach(item => {
            item.style.display = 'none'
            removeDisplay = 'none'
        })
    }
})

editBtn.addEventListener('click', function(e){
    if (editDisplay == 'none'){
        document.querySelectorAll('.remove-icon-js').forEach(item => {
            item.style.display = 'none'
            removeDisplay = 'none'
        })
        document.querySelectorAll('.edit-icon-js').forEach(item => {
            item.style.display = 'flex'
            editDisplay = 'flex'
        })
    }
    else{
        document.querySelectorAll('.edit-icon-js').forEach(item => {
            item.style.display = 'none'
            editDisplay = 'none'
        })
    }
})

// editBtn.addEventListener('click', function(e){
//     document.querySelectorAll('.remove-icon-js').forEach(item => {
//         item.style.display = 'none'
//     })
//     document.querySelectorAll('.edit-icon-js').forEach(item => {
//         item.style.display = 'flex'
//     })
// })

// removeBtn.addEventListener('dblclick', function(e){
//     document.querySelectorAll('.remove-icon-js').forEach(item => {
//         item.style.display = 'none'
//     })
// })

// editBtn.addEventListener('dblclick', function(e){
//     document.querySelectorAll('.edit-icon-js').forEach(item => {
//         item.style.display = 'none'
//     })
// })