document.addEventListener("DOMContentLoaded", function () {
    const textColorInput = document.querySelector('input[name="textColor"]');
    const backgroundColorInput = document.querySelector('input[name="backgroundColor"]');

    if(textColorInput && backgroundColorInput) {
        const contrastWarning = document.createElement('p');
        contrastWarning.classList.add('contrast-warning');
        contrastWarning.style.color = 'red';
        contrastWarning.textContent = "Warnung: Der Kontrast zwischen Text- und Hintergrundfarbe ist zu gering und erfüllt nicht die WCAG 2.1 Anforderung.";

        function hexToRgb(hex) {
            var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            hex = hex.replace(shorthandRegex, function (m, r, g, b) {
                return r + r + g + g + b + b;
            });

            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        }

        function getLuminance(r, g, b) {
            var a = [r, g, b].map(function (v) {
                v /= 255;
                return v <= 0.03928
                    ? v / 12.92
                    : Math.pow((v + 0.055) / 1.055, 2.4);
            });
            return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
        }

        function getContrastRatio(color1, color2) {
            const color1Rgb = hexToRgb(color1);
            const color2Rgb = hexToRgb(color2);

            const luminance1 = getLuminance(color1Rgb.r, color1Rgb.g, color1Rgb.b);
            const luminance2 = getLuminance(color2Rgb.r, color2Rgb.g, color2Rgb.b);

            return luminance1 > luminance2
                ? (luminance2 + 0.05) / (luminance1 + 0.05)
                : (luminance1 + 0.05) / (luminance2 + 0.05);
        }

        function checkContrast() {
            const textColor = textColorInput.value;
            const backgroundColor = backgroundColorInput.value;

            if (textColor && backgroundColor) {
                const contrastRatio = getContrastRatio(textColor, backgroundColor);

                if (contrastRatio > 1 / 4.5) {
                    if (!textColorInput.parentNode.contains(contrastWarning)) {
                        textColorInput.parentNode.appendChild(contrastWarning);
                    }
                } else if (contrastWarning.parentNode) {
                    contrastWarning.parentNode.removeChild(contrastWarning);
                }
            }
        }

        textColorInput.addEventListener('input', checkContrast);
        backgroundColorInput.addEventListener('input', checkContrast);
        checkContrast();
    }
});
