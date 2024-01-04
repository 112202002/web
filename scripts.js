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
  enableScroll();
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  const modalSources = document.getElementById('modalSources');

  switch (section) {
    case 'Motivation':
      modalTitle.textContent = 'Motivation';
      modalContent.innerHTML = `<b>Why Opt for Voice Recognition Technology?</b>\n    Voice interaction represents the epitome of natural expression, encapsulating nuanced emotions that enrich the data available for analysis. This mode of communication boasts superior accessibility, particularly advantageous for the elderly, as it obviates the need for mastering unfamiliar technologies. In the trajectory of technological evolution, a paramount objective is aligning advancements with human needs, thus averting the potential alienation of specific demographic segments. Efficiency emerges as a linchpin across diverse aid systems, notably in the realms of rapid first-aid interventions, with a focal emphasis on healthcare and emergencies. The prospect of multitasking becomes increasingly viable, a pivotal consideration given the declining mobility typically associated with the elderly demographic.\n\n<b>Why the Elderly?</b>\n    According to recent findings, the elderly population continues to burgeon, underscoring the imperative to address their unique challenges. The specter of isolation looms large, exacerbated by a rising dependency ratio that diminishes the likelihood of having familial support readily available. Concurrently, the progressive decline in health further accentuates the need for personalized assistance, especially considering the limited time spent with healthcare professionals. Voice recognition technology, functioning as a constant companion, can guide the elderly through daily routines and serve as a memory aid, alleviating the challenges posed by memory deterioration. This innovative approach is poised to enhance the overall well-being of the elderly populace, reinforcing the argument for the adoption of voice recognition as an indispensable tool in their personal aid repertoire.`;
      modalSources.innerText = '';
      break;
    case '動機':
      modalTitle.textContent = '動機';
      modalContent.innerHTML = `<b>為什麼選擇語音辨識技術？</b>\n　　科技進步的方向應該是滿足人們需求，不讓特定人群感到被孤立。語音互動是最貼近自然的表達方式，能捕捉更多情緒細節，讓分析的數據更豐富，這種溝通方式易用性高，讓身體機能不便的年長者，無需掌握不熟悉的技術，也能輕鬆上手。此外，效率是各種醫療援助系統的關鍵，特別是在緊急情況下能夠迅速幫助。考慮到老年人活動能力下降的情況，可以同時處理多項任務的技術對他們來說越來越重要。\n\n<b>為什麼選擇老年人口？</b>\n　　根據近年的研究發現，高齡人口仍在不斷地增長，因應他們的需求成為當今社會一個相當棘手的難題。不斷增長的扶養比使得子女陪伴變得更加困難，許多老年人面臨晚年孤獨的問題。與此同時，健康逐漸惡化進一步凸顯了個人化援助的需求，特別是考慮到他們與醫療專業人員接觸時間的有限。語音辨識技術作為持續的陪伴，可以引導長者進行日常生活，並作為記憶輔助，減輕記憶力衰退所帶來的挑戰。這種創新方法有望提升老年人口的整體福祉。`;
      modalSources.innerText = '';
      break;
    case 'Principle':
      modalTitle.textContent = 'Principle';
      modalContent.innerHTML = `    When a computer receives audio signals, known as analog signals, these signals represent sound in a continuous, varying form. To enable the computer to comprehend these sounds, the signals must first undergo analog-to-digital (A/D) conversion, transforming them into digital signals for processing by the computer. Then, the computer requires a digital database containing information about various words or phonetic segments. This database is utilized to compare and analyze the received audio. The speech patterns are stored on the hard drive and loaded into memory when the program is run. Ultimately, a comparator is employed to verify whether these models align with the output of the A/D converter, a process referred to as pattern recognition. Through these sequential steps, the computer incrementally identifies and interprets the speech, enabling the functionality of speech recognition software.`;
      modalSources.innerHTML = 'References: <a href="https://www.g2.com/articles/voice-recognition" target="_blank">ttps://www.g2.com/articles/voice-recognition</a>';
      break;
    case '原理':
      modalTitle.textContent = '原理';
      modalContent.innerHTML = `　　當電腦接收到聲音訊號時，這些訊號以類比形式存在，即以連續變化的方式表示聲音。為了讓電腦能夠理解這些聲音，首先需要將類比訊號轉換成數位訊號，這個過程稱為類比數位 (A/D) 轉換。這種轉換讓聲音以數位方式被電腦處理。然後，電腦必須具備一個數位資料庫，其中包含了各種單字或音節的資訊。這些數位資料庫是用來比對與分析接收到的聲音。這些語音模型通常存儲在硬碟上，並在程式執行時被載入到記憶體中，以便更快速地辨識和解析語音。最後，電腦會使用比較器來檢查這些模型是否與A/D轉換器的輸出相符，這個過程就是圖型識別。透過這樣的處理步驟，電腦能夠逐步識別並解析聲音，使得語音辨識軟體得以運作。`;
      modalSources.innerHTML = '參考來源: <a href="https://www.g2.com/articles/voice-recognition" target="_blank">https://www.g2.com/articles/voice-recognition</a>';
      break;
    case 'Applications':
      modalTitle.textContent = 'Applications';
      modalContent.innerHTML = `<b>Vocal Biomarker</b>\n    By recognizing subtle emotional changes in speech, Vocal Biomarker not only aids in identifying emotional fluctuations that may indicate self-harm behaviors but also detect alterations in language structure, allowing early detection of cognitive function changes. This technology can provide assistance even before symptoms of cognitive impairments like dementia appear, enabling earlier intervention and treatment.\n\n<b>AI Caregiver</b>\n    Integrated with cloud analysis, IoT, and voice recognition, this system is tailored for the elderly who might not be familiar with technological products. Combining voice control with medical needs, it supports Bluetooth connectivity between smart speakers and devices like thermometers, blood pressure monitors, and glucose meters. This enables real-time uploading and automatic recording of the elderly's health data in the cloud. These data can be quickly shared with remote family members, helping them stay updated on the elderly's health status, even during telemedicine appointments, providing accurate data for physicians' assessments. Additionally, this system allows multiple users, effectively managing different users' data while ensuring comprehensive health monitoring. Through voice interaction, it can record dietary conditions, offer understandable health education, and promptly notify emergency contacts if there's no response to medication reminders, functioning as a portable caregiver.\n\n<b>Voice Assistants</b>\n    Understanding natural language and executing requested operations or providing relevant information, voice assistants are a blend of natural language processing (NLP), voice recognition, and speech synthesis technologies. For seniors, voice assistants serve as reliable personal aides, assisting in setting medication reminders, scheduling appointments, and creating to-do lists.`;
      modalSources.innerHTML = 'References: <a href="https://www.hyro.ai/glossary/voice-assistant-va/" target="_blank">https://www.hyro.ai/glossary/voice-assistant-va/</a><br>　　　　　　<a href="https://monkeylearn.com/natural-language-processing/" target="_blank">https://monkeylearn.com/natural-language-processing/</a><br>　　　　　　<a href="https://www.ankecare.com/article/2065-2022-07-22-18-12-21" target="_blank">https://www.ankecare.com/article/2065-2022-07-22-18-12-21</a>';
      break;
    case '應用':
      modalTitle.textContent = '應用';
      modalContent.innerHTML = `<b>聲音生物標誌</b>\n　　透過辨識語音中微妙的情緒變化，不僅有助於在語音中標識出可能預示自我傷害行為的情緒波動，同時也能在語言結構中發現認知功能的變化，進行早期檢測，甚至在失智症等認知障礙出現症狀之前提供幫助，進而實現更早的介入和治療。\n\n<b>語音健康照護系統</b>\n　　整合了雲端分析、物聯網和語音辨識技術，專為不熟悉科技產品的年長族群設計。系統將口語聲控和醫療需求結合，並支援以藍芽連結智慧音箱與額溫槍、血壓計、血糖機等裝置，使年長者的健康數據能夠即時上傳雲端自動記錄留存。而這些數據也能迅速傳送給遠距的家人，幫助他們隨時掌握年長者的健康狀況，即便在視訊看診的情況下，也能提供醫師精準的數據進行診療。此外，這套系統還具有多人使用的便利性，能分門別類管理不同用戶的數據，全面守護家中老人的健康。透過語音互動，還能記錄飲食狀況、提供易懂的衛教資訊，並在用藥提醒無回應時立即通知緊急聯絡人，就像隨身的家庭看護一般。\n\n<b>語音助手</b>\n　　理解自然語言並提供相關信息或執行所請求的操作，它是自然語言處理（NLP）、語音辨識和語音合成等技術的結合，以自然語言與用戶溝通。語音助手對年長者可以作為可靠的個人助手，例如設置藥物提醒、安排預約、創建待辦清單等。`;
      modalSources.innerHTML = '參考來源: <a href="https://www.hyro.ai/glossary/voice-assistant-va/" target="_blank">https://www.hyro.ai/glossary/voice-assistant-va/</a><br>　　　 　 <a href="https://monkeylearn.com/natural-language-processing/" target="_blank">https://monkeylearn.com/natural-language-processing/</a><br>　　　 　 <a href="https://www.ankecare.com/article/2065-2022-07-22-18-12-21" target="_blank">https://www.ankecare.com/article/2065-2022-07-22-18-12-21</a>';
      break;
    case 'Challenges':
      modalTitle.textContent = 'Challenges';
      modalContent.innerHTML = `    When applied in elderly care, voice recognition technology faces several critical challenges. With age, speech clarity might diminish, and variations in speech pace and pronunciation due to age-related changes can affect the accuracy of voice recognition. Moreover, safeguarding the privacy of seniors is crucial when using voice recognition technology, particularly in the collection, storage, and utilization of personal data, where the risk of data leakage exists.\n\n    Current solutions involve establishing and sharing extensive, high-quality audio recording databases supported by clinical data. These databases identify and select crucial vocal biomarker candidates. To ensure data security, secure methods for data collection and storage are employed, and algorithms are trained using high-quality, standardized clinical data. Additionally, transparent privacy regulations are provided, enabling seniors to understand how their personal data is collected, used, and protected to safeguard their privacy. These measures, integrating various resources, contribute to enhancing the efficiency and reliability of voice recognition technology in elderly care.`;
      modalSources.innerText = '';
      break;
    case '挑戰':
      modalTitle.textContent = '挑戰';
      modalContent.innerHTML = `　　語音辨識技術應用於老年照護領域時，面臨幾項重要挑戰。隨著年齡增長，語音清晰度可能會變得模糊不清，語速和發音也可能因年齡變化而有所不同，這可能影響語音辨識的準確性。此外，保護長者的隱私在使用語音辨識技術時至關重要，特別是在個人資料的收集、儲存和使用過程中，可能會有資料外洩的風險。\n\n　　當前的解決方案包括建立並分享具有臨床數據支持的大型高品質音訊記錄數據庫。這些數據庫識別和挑選出關鍵的聲音生物標誌候選者。為確保數據的安全，採取了安全的數據收集和儲存措施，並以高品質且符合標準的臨床數據來訓練相應的算法。同時，提供透明的隱私規定，讓長者了解他們的個人資料將如何被收集、使用和保護，以確保個人隱私。這些措施整合了各方面的資源，有助於提高語音辨識技術在老年照護中的效能和可靠性。`;
      modalSources.innerText = '';
      break;
    case 'Future':
      modalTitle.textContent = 'Future';
      modalContent.innerHTML = `    The future of voice recognition is poised for significant advancements, with key developments addressing both precision and safety concerns. One notable enhancement involves integrating video functionality with audio recognition systems to bolster accuracy. By combining visual cues with audio input, the technology gains a more comprehensive understanding of context and improves recognition precision.\n\n    Additionally, addressing safety concerns is crucial for ensuring reliable access, especially in scenarios where the primary control system may experience disruptions or shutdowns. Future voice recognition systems are likely to incorporate robust alternative access mechanisms, ensuring users can maintain control even in the absence of the main system. This dual-focus on precision and safety marks a promising trajectory for the evolution of voice recognition technologies.`;
      modalSources.innerText = '';
      break;
    case '未來':
      modalTitle.textContent = '未來';
      modalContent.innerHTML = `　　語音辨識技術的未來發展將涉及重要的改進，旨在解決精準度和安全性問題。其中一項重要改進是將視訊功能與音訊辨識系統結合，以提高辨識系統的準確性。通過結合音訊輸入與動作、表情等視覺提示，系統可以更全面地理解語境，幫助系統更準確地理解語音內容。\n\n　　同時，關於安全性的考量也變得至關重要。當主要控制系統發生故障或關閉時，保障替代存取方式成為安全議題的重點之一。這意味著系統需要建立備用機制，以確保即使在主要系統失效的情況下，仍能夠順利地切換到其他可靠的控制方式。同時，對於這些替代存取方式的設計，也需要考慮安全性。確保替代控制方式的合法使用，避免未經授權的存取或濫用。因此，這些安全議題需要被充分考慮和實施，以確保在主控制系統發生問題時，整體系統能夠安全穩定地運行。未來，這些趨勢將進一步推動語音識別技術的發展，為我們的生活帶來更多便利和創新。`;
      modalSources.innerText = '';
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
  disableScroll();
}

let isChinese = true;

function toggleLanguage() {
  const elementsToTranslate = document.querySelectorAll('.translate');
  const toggleBtn = document.querySelector('.toggle-btn');
  const englishButtons = document.querySelector('.english-buttons');
  const chineseButtons = document.querySelector('.chinese-buttons');

  elementsToTranslate.forEach(element => {
    if (isChinese) {
      element.textContent = element.dataset.english;
      toggleBtn.textContent = 'EN';

    } else {
      element.textContent = element.dataset.chinese;
      toggleBtn.textContent = '中';
    }
  });

  if (isChinese) {
    englishButtons.style.display = 'block';
    chineseButtons.style.display = 'none';
  }
  else {
    englishButtons.style.display = 'none';
    chineseButtons.style.display = 'block';
  }

  isChinese = !isChinese;
}


window.onload = function() {
  disableScroll();
  toggleLanguage();
};

function disableScroll() {
  const scrollY = window.scrollY;
  document.body.style.overflow = 'hidden';
  document.body.style.top = `-${scrollY}px`;
}

function enableScroll() {
  const scrollY = document.body.style.top;

  document.body.style.overflow = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}