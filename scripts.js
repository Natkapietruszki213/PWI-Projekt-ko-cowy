function showSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

window.onload = function() {
    showSection('biography'); 
};
    
let currentPhotoIndex = 0;
const photos = document.querySelectorAll('.photos_container img');

function showPhoto(index) {
    photos.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
}

function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    showPhoto(currentPhotoIndex);
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    showPhoto(currentPhotoIndex);
}

showPhoto(currentPhotoIndex);

function acceptCookies() {
document.getElementById('cookie').style.display = 'none';
}

const translations = {
en: {
    biography: "BIOGRAPHY",
    albums: "ALBUMS",
    tour: "THE ERAS TOUR GALLERY",
    earlyLife: "Early Life",
    earlyLife_info:`Taylor Alison Swift was born on December 13, 1989 in Reading, Pennsylvania. She grew up surrounded by music and
    Already as a little girl, she picked up the guitar, which resulted in her first attempts at writing songs. Her father, Scott Kingsley Swift, 
    was a financial advisor, and her mother, Andrea Gardner Swift, was a homemaker who later took on managing her daughter's career. 
    Taylor began performing in school plays and talent competitions at an early age. 
    She was a victim of bullying at school and spent her time writing songs to express her emotions. In Wyomissing, Taylor stayed 
    member of the Berks Youth Academic Theater. Once a week, she and her mother went to New York to take singing and acting lessons. 
    She also started showing up for auditions, but when no one paid attention to her, she became interested in country music. 
    Her decision to move to Nashville was based on her desire to be part of a larger music scene where she could 
    develop your composition and performance skills.`,
    musicCareer: "Music Career",
    musicCareer_info: `Taylor Swift's debut album was released in 2006 and quickly gained recognition in the country music community, becoming a commercial success. 
    Swift not only sang, but also had significant songwriting input on every song on the album, which was a rarity in the music industry, 
    especially for such a young artist. Her talent for telling stories through music quickly caught the attention of fans and critics. 
    The unique combination of tenderness and strength in her music has gained her a wide fan base. Within a few years, Taylor became one of the most 
    recognizable figures on the music scene, winning a number of awards and distinctions.`,
    awards:"Achievements and awards",
    awards_info: `So far, Taylor Swift has released over a dozen albums that have achieved huge commercial and critical success. Her albums such as "Speak Now",
    "Red", "1989", "Reputation", "Midnights", etc. not only dominated the charts, but also pushed the genre boundaries of music. Album "Fearless" 
    released in 2008, it is the most awarded country album in history and the best-selling album of 2008 and 2009 in the United States 
    United States. Taylor has won numerous prestigious awards, including the Grammys, Billboard Music Awards, and American Music Awards. Her album "1989" established 
    sales records and won a number of awards, confirming her status as an international pop star. In turn, her first, fully pop album,
    "1989" has been the most frequently purchased album since 2002. In total, Swift received 709 nominations and won 449 awards. Taylor Swift is a symbol 
    strength and independence for many young women around the world. Her music and public appearances often touch on important social issues,
    such as women's rights, equality and freedom of speech. Its influence is visible not only in music, but also in fashion, film and literature.`,
    charity: "Charity Work",
    charity_info: `Taylor Swift is known for her unwavering generosity and commitment to charity. He regularly supports organizations dealing with education, such as foundations supporting reading among children and youth and music programs in schools. In 2010, after severe flooding in Nashville, she donated $1 million to local victims. Taylor doesn't shy away from global topics either; responds to natural disasters and humanitarian crises by providing funds to those affected. In addition, it is involved in the fight against diseases such as cancer and childhood diseases, supporting 
    various research and aid organizations. Her support for the LGBT+ community and gender equality initiatives are also a testament to her 
    interest in social aspects of justice. This variety of charitable activities shows Taylor as someone deeply committed to betterment 
    living conditions and support for those in need around the world.`,
    cookies_info: "This website uses cookies. By continuing to browse, you agree to their use.",
    acceptCookies: "Accept",
    prev: "Previous",
    next: "Next"
},
pl: {
    biography: "BIOGRAFIA",
    albums: "ALBUMY",
    tour: "THE ERAS TOUR GALERIA",
    earlyLife: "Wczesne życie",
    earlyLife_info:`Taylor Alison Swift urodziła się 13 grudnia 1989 roku w Reading, w stanie Pensylwania. Dorastała w otoczeniu muzyki i
    już jako mała dziewczynka chwytała za gitarę, czego efektem były jej pierwsze próby pisania piosenek. Jej ojciec, Scott Kingsley Swift, 
    był doradcą finansowym, a matka, Andrea Gardner Swift, była gospodynią domową, która później zajęła się zarządzaniem karierą córki. 
    Taylor już w młodym wieku zaczęła występować w szkolnych przedstawieniach i konkursach talentów. 
    Była ofiarą prześladowania w szkole i spędzała swój czas pisząc piosenki, aby wyrazić swoje emocje. W Wyomissing Taylor została 
    członkinią Teatru Akademickiego Berks Youth. Raz na tydzień wspólnie z mamą jeździła do Nowego Jorku pobierać lekcje śpiewu i aktorstwa. 
    Zaczęła również pojawiać się na przesłuchaniach, ale gdy nikt nie zwrócił na nią uwagi zainteresowała się muzyką country. 
    Jej decyzja o przeprowadzce do Nashville została podyktowana pragnieniem stania się częścią większej sceny muzycznej, gdzie mogłaby 
    rozwijać swoje umiejętności kompozytorskie i wykonawcze.`,
    musicCareer: "Początki kariery muzycznej",
    musicCareer_info: `Debiutancki album Taylor Swift został wydany w 2006 roku i szybko zdobył uznanie w środowisku muzyki country, stając się komercyjnym sukcesem. 
    Swift nie tylko śpiewała, ale także miała znaczący wkład autorski w każdy utwór na albumie, co było rzadkością w przemyśle muzycznym, 
    zwłaszcza dla tak młodej artystki. Jej talent do opowiadania historii przez muzykę szybko przyciągnął uwagę fanów i krytyków. 
    Wyjątkowe połączenie czułości i siły w jej muzyce sprawiło, że zyskała szeroką bazę fanów. W ciągu kilku lat Taylor stała się jedną z najbardziej 
    rozpoznawalnych postaci na scenie muzycznej, zdobywając szereg nagród i wyróżnień.`,
    awards: "Osiągnięcia i nagrody",
    awards_info: `Do tej pory Taylor Swift wydała kilkanaście albumów, które odniosły ogromny sukces komercyjny i krytyczny. Jej albumy, takie jak "Speak Now",
    "Red", "1989", "Reputation", "Midnights" itd. nie tylko dominowały listy przebojów, ale także przesuwały granice gatunkowe muzyki. Album "Fearless" 
    wydany w 2008 roku jest najczęściej nagradzaną płytą country w historii oraz najlepiej sprzedającym się albumem 2008 i 2009 roku w Stanach 
    Zjednoczonych. Taylor zdobyła wiele prestiżowych nagród, w tym Grammy, Billboard Music Awards, i American Music Awards. Jej album "1989" ustanowił 
    rekordy sprzedaży i zdobył szereg nagród, potwierdzając jej status gwiazdy pop na międzynarodowej arenie. Z kolei jej pierwszy, w pełni popowy album,
    "1989" jest najczęściej kupowaną płytą od 2002 roku. Łącznie Swift otrzymała 709 nominacji, wygrała 449 nagród. Taylor Swift jest symbolem 
    siły i niezależności dla wielu młodych kobiet na całym świecie. Jej muzyka i publiczne wystąpienia często poruszają ważne tematy społeczne,
    takie jak prawa kobiet, równość i wolność słowa. Jej wpływ jest widoczny nie tylko w muzyce, ale również w modzie, filmie i literaturze.`,
    charity: "Działalność charytatywna",
    charity_info: `Taylor Swift jest znana z niezachwianej hojności i zaangażowania w działalność charytatywną. Regularnie wspiera organizacje zajmujące się edukacją, takie jak fundacje wspierające czytelnictwo wśród dzieci i młodzieży oraz programy muzyczne w szkołach. W 2010 roku, po poważnej powodzi w Nashville, przekazała milion dolarów na rzecz lokalnych ofiar. Taylor nie unika też tematów globalnych; reaguje na klęski żywiołowe i kryzysy humanitarne, przekazując środki na rzecz poszkodowanych. Poza tym, angażuje się w walkę z chorobami, takimi jak nowotwory i choroby dziecięce, wspierając 
    różnorodne organizacje badawcze i pomocowe. Jej wsparcie dla społeczności LGBT+ oraz inicjatywy na rzecz równości płci również są dowodem jej 
    zainteresowania społecznymi aspektami sprawiedliwości. Ta różnorodność działań charytatywnych ukazuje Taylor jako osobę głęboko zaangażowaną w poprawę 
    warunków życia i wsparcie potrzebujących na całym świecie.`,
    cookies_info: "Ta strona korzysta z plików cookie. Kontynuując przeglądanie, zgadzasz się na ich użycie.",
    acceptCookies: "Akceptuję",
    prev: "Poprzednie",
    next: "Następne"
}
};

function changeLanguage(lang) {
document.querySelector('#biography_button').textContent = translations[lang].biography;
document.querySelector('#albums_button').textContent = translations[lang].albums;
document.querySelector('#tour_button').textContent = translations[lang].tour;
document.querySelector('#earlyLife').textContent = translations[lang].earlyLife;
document.querySelector('#musicCareer').textContent = translations[lang].musicCareer;
document.querySelector('#awards').textContent = translations[lang].awards;
document.querySelector('#charity').textContent = translations[lang].charity;
document.querySelector('#earlyLife_info').textContent = translations[lang].earlyLife_info;
document.querySelector('#musicCareer_info').textContent = translations[lang].musicCareer_info;
document.querySelector('#awards_info').textContent = translations[lang].awards_info;
document.querySelector('#charity_info').textContent = translations[lang].charity_info;
document.querySelector('#cookies_info').textContent=translations[lang].cookies_info;
document.querySelector('#accept_cookies_button').textContent = translations[lang].acceptCookies;
document.querySelector('#prev').textContent=translations[lang].prev;
document.querySelector('#next').textContent = translations[lang].next;
}

document.addEventListener('DOMContentLoaded', function() {
changeLanguage('pl');
});

