window.addEventListener('load', function() {
  const loader = document.querySelector('.loader-wrapper');
  const content = document.querySelector('.content');

  setTimeout(function() {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease';

    setTimeout(function() {
      loader.style.display = 'none';
      content.style.display = 'block';
    }, 500);
  }, 2000);
});

function displayText(section) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');

  const indentation = '    ';

  switch (section) {
    case 'Motivation':
      modalTitle.textContent = 'Motivation';
      modalContent.textContent = `${indentation}Voice interaction stands as the pinnacle of natural expression, capturing nuanced emotions and enriching data for analysis. Its accessibility, particularly beneficial for the elderly, eliminates the need for mastering unfamiliar technologies. Aligning technological advancements with human needs is crucial to prevent potential alienation among certain demographic segments.`;
      break;
    case 'Principles':
      modalTitle.textContent = 'Principles';
      modalContent.textContent = `${indentation}Voice recognition systems convert analog audio into digital signals, essential for interpreting spoken language and enhancing data for analysis. This process involves deciphering and recognizing speech patterns stored in memory, contributing to the understanding of human speech.`;
      break;
    case 'Applications':
      modalTitle.textContent = 'Applications';
      modalContent.textContent = `${indentation}Vocal biomarkers enable early detection of cognitive impairment and self-mutilation behaviors, revolutionizing healthcare. AI Caregivers, personalized self-health management devices, and Voice Assistants offer tailored assistance. However, challenges persist in language, accent, and data security.`;
      break;
    case 'Challenges':
      modalTitle.textContent = 'Challenges';
      modalContent.textContent = `${indentation}Voice recognition technology faces hurdles related to language, accent, age, and culture-specific issues. Addressing these challenges involves building and sharing large databanks of highly qualified audio recordings with clinical data, emphasizing data collection transparency and prioritizing privacy preservation.`;
      break;
    case 'Future':
      modalTitle.textContent = 'Future';
      modalContent.textContent = `${indentation}Future advancements aim to integrate video functions for precision, augmenting the technology's capability to comprehend and respond to visual cues in addition to audio. Furthermore, ensuring alternative access methods during system shutdowns becomes imperative, enhancing the technology's reliability and accessibility.`;
      break;
    default:
      modalTitle.textContent = 'Text not available';
      modalContent.textContent = 'Text not available';
  }
  modalContent.style.whiteSpace = 'pre-wrap';
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}
