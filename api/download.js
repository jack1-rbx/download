
window.onload = function () {
    const fileUrl = "https://github.com/jack1-rbx/download/raw/refs/heads/main/api/RO-SCH%20STARTER%20PACK.rbxm";

    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "RO-SCH STARTER PACK.rbxm"; 
    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
};
