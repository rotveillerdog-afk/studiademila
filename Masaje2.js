 const btnzagalovok = document.getElementById("BtnZagalovok");
    const btnvidiMassaja = document.getElementById("BtnVidiMassaja");
    const btnzaslugi = document.getElementById("BtnZaslugi");
    const btnotziv = document.getElementById("BtnOtziv");
    const btnkontakt = document.getElementById("BtnKontakt");

window.onload = function () {
    const zagalovok = document.getElementById("Zagalovok");
    console.log("Zagalovok найден?", zagalovok);
    const vidiMassaja = document.getElementById("VidiMassaja");
    console.log("BtnVidiMassaja найден?", btnvidiMassaja);
    const zaslugi = document.getElementById("Zaslugi");
    const otziv = document.getElementById("Otziv");
    const kontakt = document.getElementById("Kontakt");

    // Функция для скрытия всех блоков
    function hideAllSections() {
        zagalovok.style.display = "none";
        vidiMassaja.style.display = "none";
        zaslugi.style.display = "none";
        otziv.style.display = "none";
        kontakt.style.display = "none";
    }

    // Показать только нужный блок
    function showSection(section) {
        hideAllSections();
        section.style.display = "flex";
    }

    // Сначала показываем Заголовок
    showSection(zagalovok);

    // Назначаем обработчики кнопкам
    btnzagalovok.onclick = function () {
        showSection(zagalovok);
    };

    btnvidiMassaja.onclick = function () {
        showSection(vidiMassaja);
    };

    btnzaslugi.onclick = function () {
        showSection(zaslugi);
    };

    btnotziv.onclick = function () {
        showSection(otziv);
    };

    btnkontakt.onclick = function () {
        showSection(kontakt);
    };
};
 