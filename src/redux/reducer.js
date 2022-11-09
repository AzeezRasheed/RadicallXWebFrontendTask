import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rightRow: "",
  categoryBoolean: false,
  descriptionBoolean: false,
  locationBoolean: false,
  benefitBoolean: false,
  introVideosBoolean: false,
  mentorDetailsBoolean: false,
  recommendedRolesBoolean: false,
  webLinksBoolean: false,
  overviewBoolean: false,
  scheduleBoolean: false,
  resourcesBoolean: false,
  survey1Boolean: false,
  survey2Boolean: false,
  basicSettingsBoolean: false,
  heroImageBoolean: false,
};

const Reducer = createSlice({
  name: "reducers",
  initialState,
  reducers: {
    setRightRow: (state, action) => {
      state.rightRow = action.payload;
    },
    setCategoryBoolean: (state, action) => {
      state.categoryBoolean = action.payload;
    },
    setDescriptionBoolean: (state, action) => {
      state.descriptionBoolean = action.payload;
    },
    setLocationBoolean: (state, action) => {
      state.locationBoolean = action.payload;
    },
    setBenefitBoolean: (state, action) => {
      state.benefitBoolean = action.payload;
    },
    setIntroVideosBoolean: (state, action) => {
      state.introVideosBoolean = action.payload;
    },
    setMentorDetailsBoolean: (state, action) => {
      state.mentorDetailsBoolean = action.payload;

    },
    setRecommendedRolesBoolean: (state, action) => {
      state.recommendedRolesBoolean = action.payload;
    },
    setWebLinksBoolean: (state, action) => {
      state.webLinksBoolean = action.payload;
    },
    setOverviewBoolean: (state, action) => {
      state.overviewBoolean = action.payload;
    },
    setScheduleBoolean: (state, action) => {
      state.scheduleBoolean = action.payload;
    },
    setResourcesBoolean: (state, action) => {
      state.resourcesBoolean = action.payload;
    },
    setSurvey1Boolean: (state, action) => {
      state.survey1Boolean = action.payload;
    },
    setSurvey2Boolean: (state, action) => {
      state.survey2Boolean = action.payload;
    },
    setBasicSettingsBoolean: (state, action) => {
      state.basicSettingsBoolean = action.payload;
    },
    setHeroImageBoolean: (state, action) => {
      state.heroImageBoolean = action.payload;
    },
  },
});

export default Reducer.reducer;
export const {
  setRightRow,
  setOverviewBoolean,
  setScheduleBoolean,
  setResourcesBoolean,
  setSurvey1Boolean,
  setSurvey2Boolean,
  setBasicSettingsBoolean,
  setHeroImageBoolean,
  setWebLinksBoolean,
  setCategoryBoolean,
  setRecommendedRolesBoolean,
  setMentorDetailsBoolean,
  setIntroVideosBoolean,
  setDescriptionBoolean,
  setBenefitBoolean,
  setLocationBoolean,
} = Reducer.actions;
