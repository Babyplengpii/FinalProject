import axios from 'axios'

//ดึงข้อมูลของตาราง Contact มาใช้งาน
export const getKpopProfile = () =>{
  return (dispatch) =>{
    axios.get('https://k-pop-services.herokuapp.com/kpop-profile/getAll')
    .then((res)=>{
      dispatch({
        type: 'GET_KROFILE',
        playload: res.data
      });
    });
  }
}