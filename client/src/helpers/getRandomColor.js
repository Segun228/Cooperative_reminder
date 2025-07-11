export function getRandomColor(colors) {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}


function getRandomColorPink(){
    const colors_list = [
        "rgba(251, 221, 246, 1)",
        "rgba(234, 220, 244, 1)",
        "rgba(220, 201, 249, 1)",
        "rgba(212, 177, 255, 1)",
        "rgba(240, 219, 255, 1)",
        "rgba(243, 209, 244, 1)",
        "rgba(245, 204, 242, 1)",
    ]
    const index = Math.floor(Math.random() * colors_list.length);
    return colors_list[index];
}


export default getRandomColorPink