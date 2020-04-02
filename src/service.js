import axios from 'axios';

export const getBankDetails = ifscCode =>
  axios
    .get(`https://ifsc.razorpay.com/${ifscCode}`)
    .then(res => res.data);