function coneProperties(r, h) {
    let volume = (Math.PI * r * r * h) / 3;
    console.log(volume.toFixed(4));

    let s = Math.sqrt(r * r + h * h);

    let totalSurface = Math.PI * r * (s + r);
    console.log(totalSurface);
}
coneProperties(3, 5);