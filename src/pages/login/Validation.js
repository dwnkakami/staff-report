const passwordValidation1 = (password, setError, setIs8Password) => {
        if (!password || password.length < 8) {
            setError(true)
            setIs8Password(true)
            return false
        };
            setIs8Password(false) 
        return true
      };
    
    class Validation {
        static formValidate = (type, value, setError, setIs8Password) => {
          switch (type) {
            case 'password':
              return passwordValidation1(value, setError, setIs8Password);
          }
        };
      }
      
      export default Validation;