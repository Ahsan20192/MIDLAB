// script.js

import { surahNames, surahDetails } from './QuranData.js';

const surahListElement = document.getElementById('surahList');

// Function to display Surahs
function displaySurahs(surahs) {
    surahListElement.innerHTML = '';
    surahs.forEach(surah => {
        const listItem = document.createElement('li');
        listItem.textContent = `${surah.english} - ${surah.arabic}`;
        surahListElement.appendChild(listItem);
    });
}

// Function to search Surah
function searchSurah() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredSurahs = surahNames.filter(surah => 
        surah.english.toLowerCase().includes(searchInput) || 
        surah.arabic.includes(searchInput)
    );
    displaySurahs(filteredSurahs);
}

// Function to toggle dark/light mode
function toggleMode() {
    document.body.classList.toggle('dark-mode');
}
