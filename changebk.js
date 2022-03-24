const colorPicker = document.getElementById("bk")
colorPicker.addEventListener("input", watchColorPicker, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
    document.querySelectorAll("canvas").forEach(function(p) {
        p.style.backgroundColor = event.target.value;
    });
}