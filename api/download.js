
window.onload = function () {
    const fileUrl = "https://raw.githubusercontent.com/<USERNAME>/<REPOSITORY>/main/API/RO-SCH%20STARTER%20PACK.rbxm";

    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "RO-SCH STARTER PACK.rbxm"; 
    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
};
