// Dummy articles array
const articles = [
    {
      title: "புதிய செய்திகள்: அரசு பள்ளியில் விழா",
      date: "September 24, 2025",
      image: "https://via.placeholder.com/800x400",
      content: "இன்று அரசு பள்ளியில் மாணவர்களுக்கான விழா நடைபெற்றது..."
    },
    {
      title: "புதிய செய்தி: டெங்கு பரவும் அபாயம்",
      date: "September 24, 2025",
      image: "https://via.placeholder.com/800x400",
      content: "டெங்கு காய்ச்சல் மாவட்டங்களில் பரவ வாய்ப்பு உள்ளது..."
    },
    {
      title: "புதிய செய்தி: நகரில் புதிய பூங்கா திறப்பு",
      date: "September 24, 2025",
      image: "https://via.placeholder.com/800x400",
      content: "நகரில் மக்கள் சந்தோஷமாக பொங்கல் கொண்டாடும் விதமாக புதிய பூங்கா திறக்கப்பட்டது..."
    }
  ];
  
  let currentArticleIndex = 0;
  
  function showNextArticle() {
    const article = articles[currentArticleIndex];
  
    document.getElementById("headline").innerText = article.title;
    document.getElementById("date").innerText = article.date;
    document.getElementById("image").src = article.image;
    document.getElementById("content").innerHTML = `<p>${article.content}</p>`;
  
    currentArticleIndex = (currentArticleIndex + 1) % articles.length;
  }
  
  // Change article every 10 seconds
  setInterval(showNextArticle, 10000);
  
  // Initial load
  showNextArticle();
  