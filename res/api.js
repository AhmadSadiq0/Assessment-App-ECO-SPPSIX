//Common end point, for both types,only baseurl is changed
export const LOGIN = '/UserInfo/GetUserLogin?';
export const SIGNUP = '/UserInfo/AddNewUser';
//SSSIX API's
export const GET_DISTRICTS = '/UserInfoLookUp/GetUserDistrict';
export const CREATE_SPPSIX_ENTRY = '/Transactions/SaveStudentInfo';

//ECOTOOL API'S
export const CREATE_ECO_ENTRY = '/Transactions/SaveUserData';

//Forget password
export const FORGET_PASSWORD = '/UserLookUps/GetForgotPwd?UserName='