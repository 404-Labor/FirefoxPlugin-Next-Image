(function () {
    // Überprüfen, ob die aktuelle URL auf .jpg oder .png endet
    const url = window.location.href;
    if (!url.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
        return; // Keine Aktion, wenn die URL nicht auf ein Bild verweist
    }

    // Hilfsfunktion zur Navigation zu einem neuen Bild
    function navigateImage(offset) {
        const urlParts = url.split('/');
        const lastPart = urlParts[urlParts.length - 1];
        const match = lastPart.match(/(.*?)(\d+)(\.(jpg|png))$/i);

        if (match) {
            const baseName = match[1]; // Alles vor der Zahl
            const numberStr = match[2]; // Die Nummer
            const extension = match[3]; // .jpg oder .png
            const number = parseInt(numberStr, 10) + offset;
            const newNumberStr = number.toString().padStart(numberStr.length, '0');
            const newUrl = urlParts.slice(0, -1).join('/') + '/' + baseName + newNumberStr + extension;
            window.location.href = newUrl;
        }
    }

    // Buttons erstellen
    const leftButton = document.createElement('button');
    leftButton.textContent = '<';
    leftButton.style.position = 'fixed';
    leftButton.style.top = '50%';
    leftButton.style.left = '10px';
    leftButton.style.transform = 'translateY(-50%)';
    leftButton.style.zIndex = '1000';
    leftButton.style.fontSize = '24px';
    leftButton.style.padding = '10px';
    leftButton.style.cursor = 'pointer';

    const rightButton = document.createElement('button');
    rightButton.textContent = '>';
    rightButton.style.position = 'fixed';
    rightButton.style.top = '50%';
    rightButton.style.right = '10px';
    rightButton.style.transform = 'translateY(-50%)';
    rightButton.style.zIndex = '1000';
    rightButton.style.fontSize = '24px';
    rightButton.style.padding = '10px';
    rightButton.style.cursor = 'pointer';

    // Event-Listener hinzufügen
    leftButton.addEventListener('click', () => navigateImage(-1));
    rightButton.addEventListener('click', () => navigateImage(1));

    // Buttons zum DOM hinzufügen
    document.body.appendChild(leftButton);
    document.body.appendChild(rightButton);
})();
