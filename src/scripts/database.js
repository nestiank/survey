const sample = [
  {
    "id": 1,
    "title": "설문 샘플 #1",
    "leftPoll": "O",
    "rightPoll": "X"
  },
  {
    "id": 2,
    "title": "설문 샘플 #2",
    "leftPoll": "많이",
    "rightPoll": "적게"
  },
  {
    "id": 3,
    "title": "설문 샘플 #3",
    "leftPoll": "길게",
    "rightPoll": "짧게"
  }
];

// 설문 내용 가져오기
const SomehowGetSurveyList = () => {
  return sample;
}
const SomehowGetSurveyItem = (id) => {
  id = Number(id)
  for (var i = 0; i < sample.length; i++) {
    if (sample[i].id === id) {
      return sample[i];
    }
  }
  return null;
}

const SomehowPickLeft = () => {
  // Somehow increment left vote (DB)
  console.log("Picked left");
}
const SomehowPickRight = () => {
  // Somehow increment right vote (DB)
  console.log("Picked right");
}

const SomehowGetSurveyResult = () => {
  // Somehow get vote result (DB)
  return {
    "leftPoll": 1,
    "rightPoll": 2
  }
}

// Used in SurveyList
export { SomehowGetSurveyList };
// Used in SurveyItemVotePage & SurveyItemResultPage
export { SomehowGetSurveyItem };
// Used in SurveyItemVotePage
export { SomehowPickLeft, SomehowPickRight };
// Used in SurveyItemResultPage
export { SomehowGetSurveyResult };
