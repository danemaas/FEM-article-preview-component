const shareTab = document.getElementById('share-tab');

function display() {
    if(shareTab.classList.contains('show')) {
        shareTab.classList.remove('show');
    } else {
        shareTab.classList.add('show');
    } 

    if (shareTab.classList.contains('d-md-none')) {
        shareTab.classList.remove('d-md-none');
        shareTab.classList.add('d-md-flex');
    } else {
        shareTab.classList.remove('d-md-flex');
        shareTab.classList.add('d-md-none');
    }
}