const passwordValidation = (password, setError, setMsg) => {
        if (!password || password.length < 8 || password.length >50 ) {
            setError(true)
            setMsg("パスワードは8文字以上50文字以下で入力してください。")
            return false
        };
            setError(false)
            setMsg("ユーザーID・パスワードの入力に誤りがあるか、登録されていません。") 
        return true
      };
    
    const useridValidation = (userid, setError, setMsg) => {
        if (!userid || isNaN(Number(userid))) {
            setError(true)
            setMsg("ユーザーIDは半角英数字で入力してください。")
        　　return false
        };
            setError(false)
            setMsg("ユーザーID・パスワードの入力に誤りがあるか、登録されていません。") 
        return true
      };
    
    class Validation {
        static formValidate = (type, value, setError, setMsg) => {
          switch (type) {
            case 'userid':
             return useridValidation(value, setError, setMsg);
            case 'password':
             return passwordValidation(value, setError, setMsg);
          }
        };
      }
      
      export default Validation;