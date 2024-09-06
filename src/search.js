// search.js
// 원하는 제목의 영화만 검색(필터링)하는 기능을 담당

export const handleSearch = (searchKeyword) => {
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach((card) => {
    const title = card.querySelector(".movie-title").textContent.toLowerCase(); // toLowerCase : 소문자로 변환
    const searchedValue = searchKeyword.toLowerCase();

    if (title.includes(searchedValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};
