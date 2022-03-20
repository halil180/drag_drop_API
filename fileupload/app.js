const dropZone = document.querySelector('#dropzone');

dropZone.addEventListener('dragover',(e)=>{
    e.preventDefault()
    document.getElementById("dropzone").style.border = "10px dashed #0000FF";
})
dropZone.addEventListener('dragleave',(e)=>{
    e.preventDefault()
    document.getElementById("dropzone").style.border = "10px dashed #eee";
})
dropZone.addEventListener('drop',(e)=>{
    e.preventDefault()
    console.log(e.dataTransfer.files)
    for (let file of e.dataTransfer.files) {
        if (file.type === 'image/jpeg') {
            // upload(file)
            successAlert()
        }else{
            warning()
        }
    }
    document.getElementById("dropzone").style.border = "10px dashed #eee";
})
function successAlert(){
    Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
}
function warning(){
    Swal.fire({
        icon: 'error',
        title: 'This file type is not supported',
        showConfirmButton: false,
        timer: 1500
    })
}