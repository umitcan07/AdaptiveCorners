/* Github: https://gist.github.com/danielpquinn/dd966af424030d47e476 */

/**
 * Get path data for a rounded rectangle. Allows for different radius on each corner.
 * @param  {Number} w   Width of rounded rectangle
 * @param  {Number} h   Height of rounded rectangle
 * @param  {Number} r   Corner radius
 * @return {String}     Rounded rectangle SVG path data
 */
const roundedRectData = function (w, h, r,) {
    return (
        "M 0 " +
        r +
        " A " +
        r +
        " " +
        r +
        " 0 0 1 " +
        r +
        " 0" +
        " L " +
        (w - r) +
        " 0" +
        " A " +
        r +
        " " +
        r +
        " 0 0 1 " +
        w +
        " " +
        r +
        " L " +
        w +
        " " +
        (h - r) +
        " A " +
        r +
        " " +
        r +
        " 0 0 1 " +
        (w - r) +
        " " +
        h +
        " L " +
        r +
        " " +
        h +
        " A " +
        r +
        " " +
        r +
        " 0 0 1 0 " +
        (h - r) +
        " Z"
    );
};

/* DOM Elements and Constants */

const path = document.querySelector(".myPath");
const svg = document.querySelector(".mySVG");
const radiusSlider = document.querySelector(".radius-slider");
const sizeSlider = document.querySelector(".size-slider");

let widthS = svg.getAttribute("width");
let widthI = parseInt(widthS);

/* Change This */

let intendedRadius = 8;

const RadiusAt32 = (intendedRadius * 32) / widthI;
if (intendedRadius > widthI / 2) {
    path.setAttribute("d", roundedRectData(32, 32, 16));
} else {
    path.setAttribute(
        "d",
        roundedRectData(32, 32, RadiusAt32)
    );
}

/* --ignore Handling Inputs for Demo  */


radiusSlider.oninput = () => {
    intendedRadius = radiusSlider.value;
    const RadiusAt32 = (intendedRadius * 32) / widthI;
    if (intendedRadius > widthI / 2) {
        path.setAttribute("d", roundedRectData(32, 32, 16));
    } else {
        path.setAttribute(
            "d",
            roundedRectData(32, 32, RadiusAt32)
        );
    }
};
sizeSlider.oninput = () => {
    widthI = sizeSlider.value;
    widthS = widthI + "px"
    svg.setAttribute("width", widthS);
    svg.setAttribute("height", widthS);
    const RadiusAt32 = (intendedRadius * 32) / widthI;
    if (intendedRadius > widthI / 2) {
        path.setAttribute("d", roundedRectData(32, 32, 16));
    } else {
        path.setAttribute(
            "d",
            roundedRectData(32, 32, RadiusAt32)
        );
    }
};

