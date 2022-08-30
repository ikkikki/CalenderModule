import { createSlice } from '@reduxjs/toolkit';
import { plan } from '../interfaces/entities';

const initialState: plan[] = [
  {
    planId: 5755283204734976,
    companyId: 'EightDining',
    planName: 'BBQレンタル機材・食材セット',
    planDescription: 'ishikawa',
    planDetails: [],
    planCost: 2970,
    priceId: 'price_1KYhZgAYQWxotHddlJsaQ0LW',
    planMaxMembers: false,
    planMinMembers: 2,
    planReservationNeeds: true,
    planImgs: ['https://storage.googleapis.com/bbq-door-images/gentei.jpg'],
    childPlan: {
      childPlanName: 'BBQレンタル機材・食材セット（お子様セット）',
      childPlanCost: 1650,
      childPriceId: 'price_1Kc3SMAYQWxotHddc0q3vVBO',
    },
  },
  {
    planId: 5192333251313664,
    companyId: 'EightDining',
    planName: 'BBQレンタル機材セット',
    planDescription: 'ishikawa',
    planDetails: [],
    planCost: 1650,
    priceId: 'price_1KYhZgAYQWxotHddLpCE7TrY',
    planMaxMembers: false,
    planMinMembers: 2,
    planReservationNeeds: true,
    planImgs: [
      'https://storage.googleapis.com/bbq-door-images/kizai_riverside.jpg',
    ],
    childPlan: {
      childPlanName: 'BBQレンタル機材セット（お子様セット）',
      childPlanCost: 1100,
      childPriceId: 'price_1Kc3SMAYQWxotHddaTKPc8Of',
    },
  },

  // {
  //   planId: 1000000000000003,
  //   companyId: 'EightDining',
  //   planName: '環境整備費',
  //   planDescription: 'ishikawa',
  //   planDetails: [],
  //   planCost: 300,
  //   planMaxMembers: false,
  //   planMinMembers: 6,
  //   planReservationNeeds: true,
  //   planImgs: [],
  // },
];

const slice = createSlice({
  name: 'sitePlans',
  initialState,
  reducers: {
    updateSitePlans: (_, action) => {
      return action.payload;
    },
  },
});

export const { updateSitePlans } = slice.actions;

export default slice.reducer;
