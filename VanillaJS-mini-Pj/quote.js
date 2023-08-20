const pixarQuotes = [
    {
      product: "당신의 모험은 지금부터 시작된다.",
      byAt: "업 (Up)"
    },
    {
      product: "사라지는 순간마다 세상에 남는 건 우리의 추억뿐이야.",
      byAt: "엘리멘탈 (Onward)"
    },
    {
      product: "내 친구야, 우리는 무엇이든 할 수 있을거야.",
      byAt: "토이 스토리 (Toy Story)"
    },
    {
      product: "슬픔도 필요한 감정이야. 너무 많이 느끼는 건 아니야.",
      byAt: "인사이드 아웃 (Inside Out)"
    },
    {
      product: "어려운 시간을 겪으면, 머뭇거리지 말고 앞으로 나아가봐.",
      byAt: "엘리멘탈 (Onward)"
    },
    {
      product: "우리 모두는 변화해야만 살아남을 수 있어.",
      byAt: "토이 스토리 4 (Toy Story 4)"
    },
    {
      product: "자유로운 삶을 살기 위해서는 과감한 결정이 필요해.",
      byAt: "업 (Up)"
    },
    {
      product: "나쁜 기억도 소중한 경험이야.",
      byAt: "인사이드 아웃 (Inside Out)"
    },
    {
      product: "작은 것 하나하나가 큰 이야기의 일부야.",
      byAt: "엘리멘탈 (Onward)"
    },
    {
      product: "친구들은 언제나 서로를 지켜준단다.",
      byAt: "토이 스토리 2 (Toy Story 2)"
    },
    {
      product: "삶은 어려움 속에서 빛을 찾아낼 수 있어.",
      byAt: "엘리멘탈 (Onward)"
    },
    {
      product: "슬픔은 단 하나의 감정이야. 행복, 화남, 놀람, 역겨움, 공포 모두 아니야.",
      byAt: "인사이드 아웃 (Inside Out)"
    },
    {
      product: "가족은 너와 함께할 때 더 큰 힘을 얻어.",
      byAt: "엘리멘탈 (Onward)"
    },
    {
      product: "남들이 나를 어떻게 생각하는지보다 내가 나를 어떻게 생각하는 게 더 중요해.",
      byAt: "토이 스토리 2 (Toy Story 2)"
    },
    {
      product: "눈물을 흘릴 때, 우리는 강해지는 거야.",
      byAt: "엘리멘탈 (Onward)"
    },
    {
      product: "가족은 영원히 끝나지 않아.",
      byAt: "코코 (Coco)"
    }
  ];
  
  
  const product = document.querySelector("#quote span:first-child");   
  const byAt = document.querySelector("#quote span:last-child");   
  
  const todaysQuote = pixarQuotes[Math.floor(Math.random() * pixarQuotes.length)];
  
  product.innerText = todaysQuote.product;
  byAt.innerText = todaysQuote.byAt;
  