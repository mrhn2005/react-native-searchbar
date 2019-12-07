
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer BVV_8oQ4AyAf_eBZNAmBAQ_YtgKrCJJpJAVPNNNNeXwd_PME5pMBLJKeQPuZ_4upkzV2mLQl9RKjZFDDgPJecHiglG2OF0TABgvo4f_wR5j-_OksMaF15ENFt53qXXYx'
    }
});