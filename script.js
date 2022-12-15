<script>
function menuFunction() {
    document.getElementById("myMenu").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches(".button")) {
        var x = document.getElementsByClassName("menu");
        var i;
        for (i = 0 ; i < x.length ; i++ ) {
            var y = x[i];
            if (y.classList.contains('show')) {
                y.classList.remove('show');
            }
        }
    }
}
</script>
