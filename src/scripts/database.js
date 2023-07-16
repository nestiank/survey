import { getDatabase, ref, get, set, update, remove, runTransaction } from 'firebase/database';

// Create: 설문 생성하기
const CreateSurveyItem = (survey) => {
  const database = getDatabase();
  GetSurveyItem(survey.id).then((result) => {
    if (result) {
      alert("설문 ID가 중복됩니다.");
    }
    else if (result === null) {
      set(ref(database, "survey/" + survey.id), survey).catch((error) => {
        console.error(error);
      });
      alert("새로운 설문이 등록되었습니다.");
    }
  }).catch((error) => {
    console.error(error);
  });
}

// Read: 설문 내용 가져오기
const GetSurveyItem = (id = null) => {
  const database = getDatabase();
  return new Promise((resolve, reject) => {
    let loc;
    if (id === null) {
      // If id is null, get total survey list from database
      loc = ref(database, "survey");
    }
    else {
      loc = ref(database, "survey/" + id);
    }
    get(loc).then((snapshot) => {
      if (snapshot.exists()) {
        resolve(snapshot.val());
      }
      else {
        resolve(null);
      }
    }).catch((error) => {
      reject(error);
    });
  });
}

// Update: 설문 내용 수정하기
const UpdateSurveyItem = (id, new_survey) => {
  const database = getDatabase();
  const updates = {};
  updates["survey/" + id] = new_survey;
  update(ref(database), updates);
  alert("설문이 수정되었습니다.");
}

// Update: 투표 처리하기
const PickSurveyItem = (id, vote) => {
  const database = getDatabase();
  const surveyRef = ref(database, "survey/" + id);
  return new Promise((resolve, reject) => {
    if (vote === "left") {
      runTransaction(surveyRef, (survey) => {
        if (survey) {
          survey.leftVotes++;
        }
        return survey;
      }).then(() => {
        alert("선택지 1에 투표하셨습니다.");
        resolve();
      }).catch((error) => {
        reject(error);
      });
    }
    else if (vote === "right") {
      runTransaction(surveyRef, (survey) => {
        if (survey) {
          survey.rightVotes++;
        }
        return survey;
      }).then(() => {
        alert("선택지 2에 투표하셨습니다.");
        resolve();
      }).catch((error) => {
        reject(error);
      });
    }
    else {
      reject(new Error("Wrong vote option"));
    }
  });
}

// Delete: 설문 삭제하기
const DeleteSurveyItem = (id) => {
  // Promise 불필요
  const database = getDatabase();
  const surveyRef = ref(database, "survey/" + id);
  remove(surveyRef);
  alert("설문이 삭제되었습니다.");
}

// Used in Admin
export { CreateSurveyItem, UpdateSurveyItem, DeleteSurveyItem };
// Used in Admin & SurveyList & SurveyItemVotePage & SurveyItemResultPage
export { GetSurveyItem };
// Used in SurveyItemVotePage
export { PickSurveyItem };
