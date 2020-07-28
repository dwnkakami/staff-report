const ListData = (() => {
    let staffData = [];
    const getStaffData = () => {
      return staffData;
    };
    const setStaffData = (data) => {
      staffData = data;
    };
    return {
      getStaffData: getStaffData,
      setStaffData: setStaffData
    }
})();


export default ListData;