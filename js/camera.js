//Event Listeners
document.addEventListeners("appMobi.camera.picture.add");
document.addEventListeners("appMobi.camera.picture.busy");
document.addEventListeners("appMobi.camera.picture.cancel");

//Take a picture
function takePicture(){
    AppMobi.camera.takePicture();
}

//Import picture
function importPicture(){
    AppMobi.camera.importPicture();
}

//Clear pictures
function clearPictures(){
    AppMobi.camera.clearPictures();
    alert('Pictures are cleared!');
    location.reload();
}

function showPictureList(){
    var pictureListArray = AppMobi.camera.getPictureList();
    if(pictureListArray.length > 1){
        pictureListArray = AppMobi.camera.getPictureList();
    }
    var output= '';
    for(var x=0;x < pictureListArray.length;x++){
        output += '<li><img width="90" height="90" src="'+AppMobi.camera.getPictureURL(pictureListArray[x])+'" /></li>';
    }
    
    $('#picList').html(output);
    
}
